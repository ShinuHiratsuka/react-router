import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, withRouter } from 'react-router'
import auth from './auth'

import withExampleBasename from '../withExampleBasename'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateAuth = this.updateAuth.bind(this);
    this.state = {
      loggedIn : auth.loggedIn()
    };
  }
  updateAuth(loggedIn) {
    this.setState({
      loggedIn : loggedIn
    })
  }
  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  }
  render() {
    return (
      <div>
        <h1>this is my first App!</h1>
        <ul>
          <li>
            {this.state.loggedIn  ? (
              <Link to="/logout">Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
      </div>
    )
  }
}


const Login = withRouter(class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error : false
    }
  }
  handleSubmit(event) {
    event.preventDefault()
    const email = this.refs.email.value
    const pass = this.refs.password.value
    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true })

      const { location } = this.props

      this.props.router.replace('/')
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <lable>
          <input type="text" ref="email"  placeholder="email" defaultValue="joe@example.com" />
        </lable>
        <lable>
          <input type="text" ref="password"  placeholder="password"/>
        </lable>
        (hint: password1)<br />
        <button type="submit">login</button>
        {this.state.error && (
          <p>Bad login information</p>
        )}
      </form>
    )
  }
})
const Logout = withRouter(class Logout extends React.Component {
  componentWillMount() {
    if (!auth.loggedIn()) {
      this.props.router.replace('/')  
    }
  }
  componentDidMount() {
    auth.logout()
  }
  render() {
    return (
      <div>
        <h2>You are logouted</h2>
      </div>
    )
  }
})
class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}

class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <h2>Dashboard</h2>
        <p>you can see this page only if you sucess to loggin</p>
      </div>
    )
  }
}

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render((
  <Router history={withExampleBasename(browserHistory, __dirname)}>
    <Route path="/" component={App}>
      <Route path="/login" component={Login}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/about" component={About}/>
      <Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
    </Route>
  </Router>

), document.getElementById('example'))