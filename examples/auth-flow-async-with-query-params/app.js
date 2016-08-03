import React, { createClass } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory, Link, withRouter} from 'react-router'

render((
  <Router history={ browserHistory }>
    <Route path="/" component="" />
    <Route path="/page" />
  </Router>
),document.getElementById('example'))