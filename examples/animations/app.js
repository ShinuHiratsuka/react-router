import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import withExampleBasename from '../withExampleBasename'
import './app.css'
const ACTIVE = {color: 'red'}
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>page move animation</h1>
        <ul>
          <li>
            <Link to="/" activeStyle={ACTIVE} onlyActiveOnIndex>Index</Link>
          </li>
          <li>
            <Link to="/page1" activeStyle={ACTIVE}>Page1</Link>
          </li>
          <li>
            <Link to="/page2" activeStyle={ACTIVE}>Page2</Link>
          </li>
        </ul>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>

      </div>
    )
  }
}
class Index extends React.Component {
  render () {
    return (
      <div className="Image">
        <h1>this is index page</h1>
      </div>
    )
  }
}
class Page1 extends React.Component {
  render () {
    return (
      <div className="Image">
        <p>page1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus veniam at eligendi iure alias commodi illum provident, sint sequi. Praesentium ad reprehenderit minus dolor magnam, illum rem possimus quos voluptate, aliquid aliquam blanditiis omnis expedita voluptates harum quia illo deleniti eum labore molestiae doloribus. Fugiat non, sunt? Assumenda officiis similique nam, totam veniam adipisci dolores, laborum! Cumque ipsum suscipit, optio exercitationem debitis vitae alias, voluptatem porro omnis velit eveniet reprehenderit distinctio minus, ipsam qui soluta! Dolor explicabo quidem, quos beatae officiis totam rerum nobis molestiae obcaecati, earum. Nesciunt, nisi, quam. Quisquam reiciendis minima nesciunt pariatur cupiditate consequatur necessitatibus iusto fuga.</p>
      </div> 
    )
  }
}
class Page2 extends React.Component {
  render () {
    return (
      <div className="Image">
        <p>page2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus veniam at eligendi iure alias commodi illum provident, sint sequi. Praesentium ad reprehenderit minus dolor magnam, illum rem possimus quos voluptate, aliquid aliquam blanditiis omnis expedita voluptates harum quia illo deleniti eum labore molestiae doloribus. Fugiat non, sunt? Assumenda officiis similique nam, totam veniam adipisci dolores, laborum! Cumque ipsum suscipit, optio exercitationem debitis vitae alias, voluptatem porro omnis velit eveniet reprehenderit distinctio minus, ipsam qui soluta! Dolor explicabo quidem, quos beatae officiis totam rerum nobis molestiae obcaecati, earum. Nesciunt, nisi, quam. Quisquam reiciendis minima nesciunt pariatur cupiditate consequatur necessitatibus iusto fuga.</p>
      </div> 
    )
  }
}

render((
  <Router history={withExampleBasename(browserHistory, __dirname)}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
    </Route>
  </Router>
), document.getElementById('example'))