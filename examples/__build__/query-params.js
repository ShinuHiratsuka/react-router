webpackJsonp([13,16],[
/* 0 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {import React from 'react';
	import { render } from 'react-dom';
	import { browserHistory, Router, Route, Link } from 'react-router';
	
	import withExampleBasename from '../withExampleBasename';
	
	const User = ({ params: { userID }, location: { query } }) => {
	  let age = query && query.showAge ? '33' : '';
	
	  return React.createElement(
	    'div',
	    { className: 'User' },
	    React.createElement(
	      'h1',
	      null,
	      'User id: ',
	      userID
	    ),
	    age
	  );
	};
	
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
	        { to: '/user/bob', activeClassName: 'active' },
	        'Bob'
	      )
	    ),
	    React.createElement(
	      'li',
	      null,
	      React.createElement(
	        Link,
	        { to: { pathname: '/user/bob', query: { showAge: true } }, activeClassName: 'active' },
	        'Bob With Query Params'
	      )
	    ),
	    React.createElement(
	      'li',
	      null,
	      React.createElement(
	        Link,
	        { to: '/user/sally', activeClassName: 'active' },
	        'Sally'
	      )
	    )
	  ),
	  children
	);
	
	render(React.createElement(
	  Router,
	  { history: withExampleBasename(browserHistory, __dirname) },
	  React.createElement(
	    Route,
	    { path: '/', component: App },
	    React.createElement(Route, { path: 'user/:userID', component: User })
	  )
	), document.getElementById('example'));
	/* WEBPACK VAR INJECTION */}.call(exports, "query-params"))

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9xdWVyeS1wYXJhbXMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx5REFBTyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsVUFBUyxNQUFULFFBQXVCLFdBQXZCO0FBQ0EsVUFBUyxjQUFULEVBQXlCLE1BQXpCLEVBQWlDLEtBQWpDLEVBQXdDLElBQXhDLFFBQW9ELGNBQXBEOztBQUVBLFFBQU8sbUJBQVAsTUFBZ0Msd0JBQWhDOztBQUVBLE9BQU0sT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQUYsRUFBVixFQUFzQixVQUFVLEVBQUUsS0FBRixFQUFoQyxFQUFELEtBQWlEO0FBQzVELE9BQUksTUFBTSxTQUFTLE1BQU0sT0FBZixHQUF5QixJQUF6QixHQUFnQyxFQUExQzs7QUFFQSxVQUNFO0FBQUE7QUFBQSxPQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQWM7QUFBZCxNQURGO0FBRUc7QUFGSCxJQURGO0FBTUQsRUFURDs7QUFXQSxPQUFNLE1BQU0sQ0FBQyxFQUFFLFFBQUYsRUFBRCxLQUNWO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUMsYUFBRDtBQUFBLFdBQU0sSUFBRyxXQUFULEVBQXFCLGlCQUFnQixRQUFyQztBQUFBO0FBQUE7QUFBSixNQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQyxhQUFEO0FBQUEsV0FBTSxJQUFJLEVBQUUsVUFBVSxXQUFaLEVBQXlCLE9BQU8sRUFBRSxTQUFTLElBQVgsRUFBaEMsRUFBVixFQUErRCxpQkFBZ0IsUUFBL0U7QUFBQTtBQUFBO0FBQUosTUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFJO0FBQUMsYUFBRDtBQUFBLFdBQU0sSUFBRyxhQUFULEVBQXVCLGlCQUFnQixRQUF2QztBQUFBO0FBQUE7QUFBSjtBQUhGLElBREY7QUFNRztBQU5ILEVBREY7O0FBV0EsUUFDRTtBQUFDLFNBQUQ7QUFBQSxLQUFRLFNBQVMsb0JBQW9CLGNBQXBCLEVBQW9DLFNBQXBDLENBQWpCO0FBQ0U7QUFBQyxVQUFEO0FBQUEsT0FBTyxNQUFLLEdBQVosRUFBZ0IsV0FBVyxHQUEzQjtBQUNFLHlCQUFDLEtBQUQsSUFBTyxNQUFLLGNBQVosRUFBMkIsV0FBVyxJQUF0QztBQURGO0FBREYsRUFERixFQU1HLFNBQVMsY0FBVCxDQUF3QixTQUF4QixDQU5ILEUiLCJmaWxlIjoicXVlcnktcGFyYW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnksIFJvdXRlciwgUm91dGUsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB3aXRoRXhhbXBsZUJhc2VuYW1lIGZyb20gJy4uL3dpdGhFeGFtcGxlQmFzZW5hbWUnXG5cbmNvbnN0IFVzZXIgPSAoeyBwYXJhbXM6IHsgdXNlcklEIH0sIGxvY2F0aW9uOiB7IHF1ZXJ5IH0gfSkgPT4ge1xuICBsZXQgYWdlID0gcXVlcnkgJiYgcXVlcnkuc2hvd0FnZSA/ICczMycgOiAnJ1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJVc2VyXCI+XG4gICAgICA8aDE+VXNlciBpZDoge3VzZXJJRH08L2gxPlxuICAgICAge2FnZX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBBcHAgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPHVsPlxuICAgICAgPGxpPjxMaW5rIHRvPVwiL3VzZXIvYm9iXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+Qm9iPC9MaW5rPjwvbGk+XG4gICAgICA8bGk+PExpbmsgdG89e3sgcGF0aG5hbWU6ICcvdXNlci9ib2InLCBxdWVyeTogeyBzaG93QWdlOiB0cnVlIH0gfX0gYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+Qm9iIFdpdGggUXVlcnkgUGFyYW1zPC9MaW5rPjwvbGk+XG4gICAgICA8bGk+PExpbmsgdG89XCIvdXNlci9zYWxseVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlNhbGx5PC9MaW5rPjwvbGk+XG4gICAgPC91bD5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKVxuXG5yZW5kZXIoKFxuICA8Um91dGVyIGhpc3Rvcnk9e3dpdGhFeGFtcGxlQmFzZW5hbWUoYnJvd3Nlckhpc3RvcnksIF9fZGlybmFtZSl9PlxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfT5cbiAgICAgIDxSb3V0ZSBwYXRoPVwidXNlci86dXNlcklEXCIgY29tcG9uZW50PXtVc2VyfSAvPlxuICAgIDwvUm91dGU+XG4gIDwvUm91dGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vcXVlcnktcGFyYW1zL2FwcC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=