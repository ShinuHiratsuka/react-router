webpackJsonp([7,16],[
/* 0 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {import React from 'react';
	import { render } from 'react-dom';
	import { browserHistory, Router, Route, Link, Redirect } from 'react-router';
	
	import withExampleBasename from '../withExampleBasename';
	
	const App = ({ children }) => React.createElement(
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
	        { to: '/user/123', activeClassName: 'active' },
	        'Bob'
	      )
	    ),
	    React.createElement(
	      'li',
	      null,
	      React.createElement(
	        Link,
	        { to: '/user/abc', activeClassName: 'active' },
	        'Sally'
	      )
	    )
	  ),
	  children
	);
	
	const User = ({ children, params: { userID } }) => React.createElement(
	  'div',
	  { className: 'User' },
	  React.createElement(
	    'h1',
	    null,
	    'User id: ',
	    userID
	  ),
	  React.createElement(
	    'ul',
	    null,
	    React.createElement(
	      'li',
	      null,
	      React.createElement(
	        Link,
	        { to: `/user/${ userID }/tasks/foo`, activeClassName: 'active' },
	        'foo task'
	      )
	    ),
	    React.createElement(
	      'li',
	      null,
	      React.createElement(
	        Link,
	        { to: `/user/${ userID }/tasks/bar`, activeClassName: 'active' },
	        'bar task'
	      )
	    )
	  ),
	  children
	);
	
	const Task = ({ params: { userID, taskID } }) => React.createElement(
	  'div',
	  { className: 'Task' },
	  React.createElement(
	    'h2',
	    null,
	    'User ID: ',
	    userID
	  ),
	  React.createElement(
	    'h3',
	    null,
	    'Task ID: ',
	    taskID
	  )
	);
	
	render(React.createElement(
	  Router,
	  { history: withExampleBasename(browserHistory, __dirname) },
	  React.createElement(
	    Route,
	    { path: '/', component: App },
	    React.createElement(
	      Route,
	      { path: 'user/:userID', component: User },
	      React.createElement(Route, { path: 'tasks/:taskID', component: Task }),
	      React.createElement(Redirect, { from: 'todos/:taskID', to: 'tasks/:taskID' })
	    )
	  )
	), document.getElementById('example'));
	/* WEBPACK VAR INJECTION */}.call(exports, "dynamic-segments"))

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9keW5hbWljLXNlZ21lbnRzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEseURBQU8sS0FBUCxNQUFrQixPQUFsQjtBQUNBLFVBQVMsTUFBVCxRQUF1QixXQUF2QjtBQUNBLFVBQVMsY0FBVCxFQUF5QixNQUF6QixFQUFpQyxLQUFqQyxFQUF3QyxJQUF4QyxFQUE4QyxRQUE5QyxRQUE4RCxjQUE5RDs7QUFFQSxRQUFPLG1CQUFQLE1BQWdDLHdCQUFoQzs7QUFFQSxPQUFNLE1BQU0sQ0FBQyxFQUFFLFFBQUYsRUFBRCxLQUNWO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUMsYUFBRDtBQUFBLFdBQU0sSUFBRyxXQUFULEVBQXFCLGlCQUFnQixRQUFyQztBQUFBO0FBQUE7QUFBSixNQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQyxhQUFEO0FBQUEsV0FBTSxJQUFHLFdBQVQsRUFBcUIsaUJBQWdCLFFBQXJDO0FBQUE7QUFBQTtBQUFKO0FBRkYsSUFERjtBQUtHO0FBTEgsRUFERjs7QUFVQSxPQUFNLE9BQU8sQ0FBQyxFQUFFLFFBQUYsRUFBWSxRQUFRLEVBQUUsTUFBRixFQUFwQixFQUFELEtBQ1g7QUFBQTtBQUFBLEtBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBYztBQUFkLElBREY7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFDLGFBQUQ7QUFBQSxXQUFNLElBQUssVUFBUSxNQUFPLGFBQTFCLEVBQXVDLGlCQUFnQixRQUF2RDtBQUFBO0FBQUE7QUFBSixNQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQyxhQUFEO0FBQUEsV0FBTSxJQUFLLFVBQVEsTUFBTyxhQUExQixFQUF1QyxpQkFBZ0IsUUFBdkQ7QUFBQTtBQUFBO0FBQUo7QUFGRixJQUZGO0FBTUc7QUFOSCxFQURGOztBQVdBLE9BQU0sT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQUYsRUFBVSxNQUFWLEVBQVYsRUFBRCxLQUNYO0FBQUE7QUFBQSxLQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQWM7QUFBZCxJQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBYztBQUFkO0FBRkYsRUFERjs7QUFPQSxRQUNFO0FBQUMsU0FBRDtBQUFBLEtBQVEsU0FBUyxvQkFBb0IsY0FBcEIsRUFBb0MsU0FBcEMsQ0FBakI7QUFDRTtBQUFDLFVBQUQ7QUFBQSxPQUFPLE1BQUssR0FBWixFQUFnQixXQUFXLEdBQTNCO0FBQ0U7QUFBQyxZQUFEO0FBQUEsU0FBTyxNQUFLLGNBQVosRUFBMkIsV0FBVyxJQUF0QztBQUNFLDJCQUFDLEtBQUQsSUFBTyxNQUFLLGVBQVosRUFBNEIsV0FBVyxJQUF2QyxHQURGO0FBRUUsMkJBQUMsUUFBRCxJQUFVLE1BQUssZUFBZixFQUErQixJQUFHLGVBQWxDO0FBRkY7QUFERjtBQURGLEVBREYsRUFTRyxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FUSCxFIiwiZmlsZSI6ImR5bmFtaWMtc2VnbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyLCBSb3V0ZSwgTGluaywgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB3aXRoRXhhbXBsZUJhc2VuYW1lIGZyb20gJy4uL3dpdGhFeGFtcGxlQmFzZW5hbWUnXG5cbmNvbnN0IEFwcCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdj5cbiAgICA8dWw+XG4gICAgICA8bGk+PExpbmsgdG89XCIvdXNlci8xMjNcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5Cb2I8L0xpbms+PC9saT5cbiAgICAgIDxsaT48TGluayB0bz1cIi91c2VyL2FiY1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlNhbGx5PC9MaW5rPjwvbGk+XG4gICAgPC91bD5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBVc2VyID0gKHsgY2hpbGRyZW4sIHBhcmFtczogeyB1c2VySUQgfSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiVXNlclwiPlxuICAgIDxoMT5Vc2VyIGlkOiB7dXNlcklEfTwvaDE+XG4gICAgPHVsPlxuICAgICAgPGxpPjxMaW5rIHRvPXtgL3VzZXIvJHt1c2VySUR9L3Rhc2tzL2Zvb2B9IGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPmZvbyB0YXNrPC9MaW5rPjwvbGk+XG4gICAgICA8bGk+PExpbmsgdG89e2AvdXNlci8ke3VzZXJJRH0vdGFza3MvYmFyYH0gYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+YmFyIHRhc2s8L0xpbms+PC9saT5cbiAgICA8L3VsPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IFRhc2sgPSAoeyBwYXJhbXM6IHsgdXNlcklELCB0YXNrSUQgfSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiVGFza1wiPlxuICAgIDxoMj5Vc2VyIElEOiB7dXNlcklEfTwvaDI+XG4gICAgPGgzPlRhc2sgSUQ6IHt0YXNrSUR9PC9oMz5cbiAgPC9kaXY+XG4pXG5cbnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17d2l0aEV4YW1wbGVCYXNlbmFtZShicm93c2VySGlzdG9yeSwgX19kaXJuYW1lKX0+XG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgPFJvdXRlIHBhdGg9XCJ1c2VyLzp1c2VySURcIiBjb21wb25lbnQ9e1VzZXJ9PlxuICAgICAgICA8Um91dGUgcGF0aD1cInRhc2tzLzp0YXNrSURcIiBjb21wb25lbnQ9e1Rhc2t9IC8+XG4gICAgICAgIDxSZWRpcmVjdCBmcm9tPVwidG9kb3MvOnRhc2tJRFwiIHRvPVwidGFza3MvOnRhc2tJRFwiIC8+XG4gICAgICA8L1JvdXRlPlxuICAgIDwvUm91dGU+XG4gIDwvUm91dGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZHluYW1pYy1zZWdtZW50cy9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9