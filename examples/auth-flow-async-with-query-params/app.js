import React, { createClass } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory, Link, withRouter} from 'react-router'
import classNames from 'classnames';
import withExampleBasename from '../withExampleBasename'
import './loading.css'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLoading: false
    }
    this.updateLoadingState = this.updateLoadingState.bind(this)
  }
  updateLoadingState(showLoading) {
    if (showLoading) {
      this.setState({
        showLoading:true
      })
    }else {
      this.setState({
        showLoading:false
      })
    }
  }
  render () {
    console.log(this.state.showLoading)
    var childrenWithProps = React.cloneElement(this.props.children, {updateLoadingState: this.updateLoadingState});
    return (
      <div>
        <Loading showLoading={this.state.showLoading} updateLoadingState={this.updateLoadingState}/>
        {childrenWithProps}
      </div>
    )
  }
}
class Loading extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    var loaderClass = classNames({
      'loader is-hidden': !this.props.showLoading,
      'loader': this.props.showLoading
    });
    console.log(this.props.showLoading)
    return (
      <h1 className={loaderClass}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </h1>
    )
  }
}

class Form extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value:''
    }
  }
  SubmitAction(e) {
    e.preventDefault()
    this.props.updateLoadingState(true)
    this.context.router.push({
      pathname: '/page',
      query: {
        qsparam: this.state.value
      }
    })
  }
  handleChange(e) {
    this.setState ({
      value: e.target.value
    })
  }
  render () {
    return (
      <div>
        <h1>The token is <em>pancakes</em></h1>
        <form onSubmit={this.SubmitAction.bind(this)}>
          <input type="text" onChange={this.handleChange.bind(this)}/>
          <button type="submit">Submit the thing</button>
          <p><Link to="/page?qsparam=pancakes">Or authenticate via URL</Link></p>
          <p><Link to="/page?qsparam=bacon">Or try failing to authenticate via URL</Link></p>
        </form>
      </div>
    )
  }
}

Form.contextTypes = {
    router: React.PropTypes.object.isRequired
};

class Page extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.updateLoadingState(false)
  }
  render () {
    return (
      <h1>Hey, I see you are authenticated. Welcome!</h1>
    )
  }
}

function ErrorPage() {
  return <h1>Oh no! Your auth failed!</h1>
}

const requireCredentials = function(nextState, replace, next) {
  const query = nextState.location.query
  if(query.qsparam) {
    serverAuth(query.qsparam)
      .then(
          () => next(),
          () => {
            replace('/error')
            next()
          }
      )
  }else {
    replace('/error')
    next()
  }
}

function serverAuth(authToken) {
  return new Promise ((resolve, reject) => {
    setTimeout(() =>{
      if(authToken === 'pancakes') {
        resolve('authenticated')
      } else {
        reject('nope')
      }
    }, 1000)
  })
}
render((
  <Router history={withExampleBasename(browserHistory, __dirname)}>
    <Route path="/" component={App}>
      <IndexRoute component={Form} />
      <Route path="page" component={Page} onEnter={requireCredentials} />
      <Route path="error" component={ErrorPage}/>
    </Route>
  </Router>
),document.getElementById('example'))