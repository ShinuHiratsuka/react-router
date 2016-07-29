webpackJsonp([1,16],[
/* 0 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {import React from 'react';
	import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
	import { render } from 'react-dom';
	import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
	
	import withExampleBasename from '../withExampleBasename';
	
	import './app.css';
	
	const App = ({ children, location }) => React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'ul',
	    null,
	    React.createElement(
	      'li',
	      null,
	      React.createElement(
	        Link,
	        { to: '/page1' },
	        'Page 1'
	      )
	    ),
	    React.createElement(
	      'li',
	      null,
	      React.createElement(
	        Link,
	        { to: '/page2' },
	        'Page 2'
	      )
	    )
	  ),
	  React.createElement(
	    ReactCSSTransitionGroup,
	    {
	      component: 'div',
	      transitionName: 'example',
	      transitionEnterTimeout: 500,
	      transitionLeaveTimeout: 500
	    },
	    React.cloneElement(children, {
	      key: location.pathname
	    })
	  )
	);
	
	const Index = () => React.createElement(
	  'div',
	  { className: 'Image' },
	  React.createElement(
	    'h1',
	    null,
	    'Index'
	  ),
	  React.createElement(
	    'p',
	    null,
	    'Animations with React Router are not different than any other animation.'
	  )
	);
	
	const Page1 = () => React.createElement(
	  'div',
	  { className: 'Image' },
	  React.createElement(
	    'h1',
	    null,
	    'Page 1'
	  ),
	  React.createElement(
	    'p',
	    null,
	    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	  )
	);
	
	const Page2 = () => React.createElement(
	  'div',
	  { className: 'Image' },
	  React.createElement(
	    'h1',
	    null,
	    'Page 2'
	  ),
	  React.createElement(
	    'p',
	    null,
	    'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	  )
	);
	
	render(React.createElement(
	  Router,
	  { history: withExampleBasename(browserHistory, __dirname) },
	  React.createElement(
	    Route,
	    { path: '/', component: App },
	    React.createElement(IndexRoute, { component: Index }),
	    React.createElement(Route, { path: 'page1', component: Page1 }),
	    React.createElement(Route, { path: 'page2', component: Page2 })
	  )
	), document.getElementById('example'));
	/* WEBPACK VAR INJECTION */}.call(exports, "animations"))

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hbmltYXRpb25zL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEseURBQU8sS0FBUCxNQUFrQixPQUFsQjtBQUNBLFFBQU8sdUJBQVAsTUFBb0MsbUNBQXBDO0FBQ0EsVUFBUyxNQUFULFFBQXVCLFdBQXZCO0FBQ0EsVUFBUyxjQUFULEVBQXlCLE1BQXpCLEVBQWlDLEtBQWpDLEVBQXdDLFVBQXhDLEVBQW9ELElBQXBELFFBQWdFLGNBQWhFOztBQUVBLFFBQU8sbUJBQVAsTUFBZ0Msd0JBQWhDOztBQUVBLFFBQU8sV0FBUDs7QUFFQSxPQUFNLE1BQU0sQ0FBQyxFQUFFLFFBQUYsRUFBWSxRQUFaLEVBQUQsS0FDVjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFDLGFBQUQ7QUFBQSxXQUFNLElBQUcsUUFBVDtBQUFBO0FBQUE7QUFBSixNQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQyxhQUFEO0FBQUEsV0FBTSxJQUFHLFFBQVQ7QUFBQTtBQUFBO0FBQUo7QUFGRixJQURGO0FBTUU7QUFBQyw0QkFBRDtBQUFBO0FBQ0Usa0JBQVUsS0FEWjtBQUVFLHVCQUFlLFNBRmpCO0FBR0UsK0JBQXdCLEdBSDFCO0FBSUUsK0JBQXdCO0FBSjFCO0FBTUcsV0FBTSxZQUFOLENBQW1CLFFBQW5CLEVBQTZCO0FBQzVCLFlBQUssU0FBUztBQURjLE1BQTdCO0FBTkg7QUFORixFQURGOztBQW9CQSxPQUFNLFFBQVEsTUFDWjtBQUFBO0FBQUEsS0FBSyxXQUFVLE9BQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsRUFERjs7QUFPQSxPQUFNLFFBQVEsTUFDWjtBQUFBO0FBQUEsS0FBSyxXQUFVLE9BQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsRUFERjs7QUFPQSxPQUFNLFFBQVEsTUFDWjtBQUFBO0FBQUEsS0FBSyxXQUFVLE9BQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsRUFERjs7QUFPQSxRQUNFO0FBQUMsU0FBRDtBQUFBLEtBQVEsU0FBUyxvQkFBb0IsY0FBcEIsRUFBb0MsU0FBcEMsQ0FBakI7QUFDRTtBQUFDLFVBQUQ7QUFBQSxPQUFPLE1BQUssR0FBWixFQUFnQixXQUFXLEdBQTNCO0FBQ0UseUJBQUMsVUFBRCxJQUFZLFdBQVcsS0FBdkIsR0FERjtBQUVFLHlCQUFDLEtBQUQsSUFBTyxNQUFLLE9BQVosRUFBb0IsV0FBVyxLQUEvQixHQUZGO0FBR0UseUJBQUMsS0FBRCxJQUFPLE1BQUssT0FBWixFQUFvQixXQUFXLEtBQS9CO0FBSEY7QUFERixFQURGLEVBUUcsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBUkgsRSIsImZpbGUiOiJhbmltYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5LCBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgd2l0aEV4YW1wbGVCYXNlbmFtZSBmcm9tICcuLi93aXRoRXhhbXBsZUJhc2VuYW1lJ1xuXG5pbXBvcnQgJy4vYXBwLmNzcydcblxuY29uc3QgQXBwID0gKHsgY2hpbGRyZW4sIGxvY2F0aW9uIH0pID0+IChcbiAgPGRpdj5cbiAgICA8dWw+XG4gICAgICA8bGk+PExpbmsgdG89XCIvcGFnZTFcIj5QYWdlIDE8L0xpbms+PC9saT5cbiAgICAgIDxsaT48TGluayB0bz1cIi9wYWdlMlwiPlBhZ2UgMjwvTGluaz48L2xpPlxuICAgIDwvdWw+XG5cbiAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICB0cmFuc2l0aW9uTmFtZT1cImV4YW1wbGVcIlxuICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17NTAwfVxuICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dD17NTAwfVxuICAgID5cbiAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAga2V5OiBsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgfSl9XG4gICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlXCI+XG4gICAgPGgxPkluZGV4PC9oMT5cbiAgICA8cD5BbmltYXRpb25zIHdpdGggUmVhY3QgUm91dGVyIGFyZSBub3QgZGlmZmVyZW50IHRoYW4gYW55IG90aGVyIGFuaW1hdGlvbi48L3A+XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBQYWdlMSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZVwiPlxuICAgIDxoMT5QYWdlIDE8L2gxPlxuICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS48L3A+XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBQYWdlMiA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZVwiPlxuICAgIDxoMT5QYWdlIDI8L2gxPlxuICAgIDxwPkNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS48L3A+XG4gIDwvZGl2PlxuKVxuXG5yZW5kZXIoKFxuICA8Um91dGVyIGhpc3Rvcnk9e3dpdGhFeGFtcGxlQmFzZW5hbWUoYnJvd3Nlckhpc3RvcnksIF9fZGlybmFtZSl9PlxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfT5cbiAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17SW5kZXh9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwicGFnZTFcIiBjb21wb25lbnQ9e1BhZ2UxfSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJwYWdlMlwiIGNvbXBvbmVudD17UGFnZTJ9IC8+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hbmltYXRpb25zL2FwcC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=