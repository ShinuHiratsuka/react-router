import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'

import withExampleBasename from '../withExampleBasename'

const App = React.createClass({
  render () {
    return (
      <div>
        <div>
          <ul>
            <li>
              <Link to="/dashboard" activeClassName="active">Dashboard</Link>
            </li>
            <li>
              <Link to="/form" activeClassName="active">Form</Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
})

const Dashbord = React.createClass({
  render () {
    return <h1>Dashbord</h1>
  }
})

const Form = withRouter(
  React.createClass({
    getInitialState() {
      return {
        text: 'ohai'
      }
    },
    componentWillMount() {
      this.props.router.setRouteLeaveHook(
        this.props.route,
        this.routerWillLeave
      )
    },
    handleChange(e) {
      this.setState({
        text: e.target.value
      })
    },
    routerWillLeave() {
      if (this.state.text)
        return 'You have unsaved information, are you sure you want to leave this page?'
    },
    handleSubmit(e) {
      e.preventDefault()
      this.setState({
        text: ''
      },()=>{
        this.props.router.push('/')
      })

    },
    render () {
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>Form</h1>
          <input type="text" ref="userinput" value={this.state.text} onChange={this.handleChange}/>
          <button type="submit">Go</button>
        </form>
      )
    }
  })
)

render((
  <Router history={withExampleBasename(browserHistory, __dirname)}>
    <Route path="/" component={App}>
      <Route path="/dashboard" component={Dashbord} />
      <Route path="/form" component={Form} />
    </Route>
  </Router>
),document.getElementById('example'))