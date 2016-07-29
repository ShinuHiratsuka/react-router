import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import withExampleBasename from '../withExampleBasename'
const ACTIVE = {color: 'red'}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>this is my first App!</h1>
        <ul>
          <li>
            <Link to="/"  activeStyle={ACTIVE}>/</Link>
          </li>
          <li>
            <Link to="/about"  activeStyle={ACTIVE}>/About</Link>
          </li>
          <li>
            <Link to="/users"  activeStyle={ACTIVE}>/Users</Link>
          </li>
          <li>
            <IndexLink to="/users/sdfghjk"  activeStyle={ACTIVE}>/Sdfghjk</IndexLink>
          </li>
          <li>
            <Link to={{ pathname: '/users/sdfghjk', query: { foo: 'bar',hoge:'piyo' } }}  activeStyle={ACTIVE}>/Users/child?has_query</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}


class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}

class Index extends React.Component {
  render() {
    return (
      <h2>Index</h2>
    )
  }
}

class Users extends React.Component {
  render() {
    return (
      <div>
        <h2>Users</h2>
        {this.props.children}
      </div>
    )
  }
}

class User extends React.Component {
  render() {
    var url_query = this.props.location.query
    return (
      <div>
        <h4>User name is {this.props.params.name}</h4>
        <p>url_query is {url_query.foo}</p>
      </div>
    )
  }
}

class UsersIndex extends React.Component {
  render() {
    return (
      <div>
        <h3>UsersIndexやで</h3>
      </div>
    )
  }
}

render((
  <Router history={withExampleBasename(browserHistory, __dirname)}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/about" component={About}/>
      <Route path="users" component={Users}>
        <IndexRoute component={UsersIndex}/>
        <Route path=":name" component={User}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('example'))
