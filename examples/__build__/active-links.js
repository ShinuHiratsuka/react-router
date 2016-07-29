webpackJsonp([0,16],[
/* 0 */
/***/ function(module, exports) {

	import React, { Component } from 'react';
	import { render } from 'react-dom';
	import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
	
	const ACTIVE = { color: 'red' };
	
	class App extends Component {
	  render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h1',
	        null,
	        'APP!'
	      ),
	      React.createElement(
	        'ul',
	        null,
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            Link,
	            { to: '/', activeStyle: ACTIVE },
	            '/'
	          )
	        ),
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            IndexLink,
	            { to: '/', activeStyle: ACTIVE },
	            '/ IndexLink'
	          )
	        ),
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            Link,
	            { to: '/users', activeStyle: ACTIVE },
	            '/users'
	          )
	        ),
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            IndexLink,
	            { to: '/users', activeStyle: ACTIVE },
	            '/users IndexLink'
	          )
	        ),
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            Link,
	            { to: '/users/ryan', activeStyle: ACTIVE },
	            '/users/ryan'
	          )
	        ),
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            Link,
	            { to: { pathname: '/users/ryan', query: { foo: 'bar' } },
	              activeStyle: ACTIVE },
	            '/users/ryan?foo=bar'
	          )
	        ),
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            Link,
	            { to: '/about', activeStyle: ACTIVE },
	            '/about'
	          )
	        )
	      ),
	      this.props.children
	    );
	  }
	}
	
	class Index extends React.Component {
	  render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        null,
	        'Index!'
	      )
	    );
	  }
	}
	
	class Users extends React.Component {
	  render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        null,
	        'Users'
	      ),
	      this.props.children
	    );
	  }
	}
	
	class UsersIndex extends React.Component {
	  render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'UsersIndex'
	      )
	    );
	  }
	}
	
	class User extends React.Component {
	  render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'User ',
	        this.props.params.id
	      )
	    );
	  }
	}
	
	class About extends React.Component {
	  render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        null,
	        'About'
	      )
	    );
	  }
	}
	
	render(React.createElement(
	  Router,
	  { history: browserHistory },
	  React.createElement(
	    Route,
	    { path: '/', component: App },
	    React.createElement(IndexRoute, { component: Index }),
	    React.createElement(Route, { path: '/about', component: About }),
	    React.createElement(
	      Route,
	      { path: 'users', component: Users },
	      React.createElement(IndexRoute, { component: UsersIndex }),
	      React.createElement(Route, { path: ':id', component: User })
	    )
	  )
	), document.getElementById('example'));

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3RpdmUtbGlua3MvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxRQUFPLEtBQVAsSUFBZ0IsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxVQUFTLE1BQVQsUUFBdUIsV0FBdkI7QUFDQSxVQUFTLE1BQVQsRUFBaUIsS0FBakIsRUFBd0IsVUFBeEIsRUFBb0MsSUFBcEMsRUFBMEMsU0FBMUMsRUFBcUQsY0FBckQsUUFBMkUsY0FBM0U7O0FBRUEsT0FBTSxTQUFTLEVBQUUsT0FBTyxLQUFULEVBQWY7O0FBRUEsT0FBTSxHQUFOLFNBQWtCLFNBQWxCLENBQTRCO0FBQzFCLFlBQVM7QUFDUCxZQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUMsaUJBQUQ7QUFBQSxlQUFXLElBQUcsR0FBZCxFQUE0QixhQUFhLE1BQXpDO0FBQUE7QUFBQTtBQUFKLFVBREY7QUFFRTtBQUFBO0FBQUE7QUFBSTtBQUFDLHNCQUFEO0FBQUEsZUFBVyxJQUFHLEdBQWQsRUFBNEIsYUFBYSxNQUF6QztBQUFBO0FBQUE7QUFBSixVQUZGO0FBSUU7QUFBQTtBQUFBO0FBQUk7QUFBQyxpQkFBRDtBQUFBLGVBQVcsSUFBRyxRQUFkLEVBQTRCLGFBQWEsTUFBekM7QUFBQTtBQUFBO0FBQUosVUFKRjtBQUtFO0FBQUE7QUFBQTtBQUFJO0FBQUMsc0JBQUQ7QUFBQSxlQUFXLElBQUcsUUFBZCxFQUE0QixhQUFhLE1BQXpDO0FBQUE7QUFBQTtBQUFKLFVBTEY7QUFPRTtBQUFBO0FBQUE7QUFBSTtBQUFDLGlCQUFEO0FBQUEsZUFBVyxJQUFHLGFBQWQsRUFBNEIsYUFBYSxNQUF6QztBQUFBO0FBQUE7QUFBSixVQVBGO0FBUUU7QUFBQTtBQUFBO0FBQUk7QUFBQyxpQkFBRDtBQUFBLGVBQVcsSUFBSSxFQUFFLFVBQVUsYUFBWixFQUEyQixPQUFPLEVBQUUsS0FBSyxLQUFQLEVBQWxDLEVBQWY7QUFDNEIsNEJBQWEsTUFEekM7QUFBQTtBQUFBO0FBQUosVUFSRjtBQVdFO0FBQUE7QUFBQTtBQUFJO0FBQUMsaUJBQUQ7QUFBQSxlQUFXLElBQUcsUUFBZCxFQUE0QixhQUFhLE1BQXpDO0FBQUE7QUFBQTtBQUFKO0FBWEYsUUFGRjtBQWdCRyxZQUFLLEtBQUwsQ0FBVztBQWhCZCxNQURGO0FBb0JEO0FBdEJ5Qjs7QUF5QjVCLE9BQU0sS0FBTixTQUFvQixNQUFNLFNBQTFCLENBQW9DO0FBQ2xDLFlBQVM7QUFDUCxZQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixNQURGO0FBS0Q7QUFQaUM7O0FBVXBDLE9BQU0sS0FBTixTQUFvQixNQUFNLFNBQTFCLENBQW9DO0FBQ2xDLFlBQVM7QUFDUCxZQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQUVHLFlBQUssS0FBTCxDQUFXO0FBRmQsTUFERjtBQU1EO0FBUmlDOztBQVdwQyxPQUFNLFVBQU4sU0FBeUIsTUFBTSxTQUEvQixDQUF5QztBQUN2QyxZQUFTO0FBQ1AsWUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsTUFERjtBQUtEO0FBUHNDOztBQVV6QyxPQUFNLElBQU4sU0FBbUIsTUFBTSxTQUF6QixDQUFtQztBQUNqQyxZQUFTO0FBQ1AsWUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFVLGNBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0I7QUFBNUI7QUFERixNQURGO0FBS0Q7QUFQZ0M7O0FBVW5DLE9BQU0sS0FBTixTQUFvQixNQUFNLFNBQTFCLENBQW9DO0FBQ2xDLFlBQVM7QUFDUCxZQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixNQURGO0FBS0Q7QUFQaUM7O0FBVXBDLFFBQ0U7QUFBQyxTQUFEO0FBQUEsS0FBUSxTQUFTLGNBQWpCO0FBQ0U7QUFBQyxVQUFEO0FBQUEsT0FBTyxNQUFLLEdBQVosRUFBZ0IsV0FBVyxHQUEzQjtBQUNFLHlCQUFDLFVBQUQsSUFBWSxXQUFXLEtBQXZCLEdBREY7QUFFRSx5QkFBQyxLQUFELElBQU8sTUFBSyxRQUFaLEVBQXFCLFdBQVcsS0FBaEMsR0FGRjtBQUdFO0FBQUMsWUFBRDtBQUFBLFNBQU8sTUFBSyxPQUFaLEVBQW9CLFdBQVcsS0FBL0I7QUFDRSwyQkFBQyxVQUFELElBQVksV0FBVyxVQUF2QixHQURGO0FBRUUsMkJBQUMsS0FBRCxJQUFPLE1BQUssS0FBWixFQUFrQixXQUFXLElBQTdCO0FBRkY7QUFIRjtBQURGLEVBREYsRUFXRyxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FYSCxFIiwiZmlsZSI6ImFjdGl2ZS1saW5rcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIExpbmssIEluZGV4TGluaywgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmNvbnN0IEFDVElWRSA9IHsgY29sb3I6ICdyZWQnIH1cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+QVBQITwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+PExpbmsgICAgICB0bz1cIi9cIiAgICAgICAgICAgYWN0aXZlU3R5bGU9e0FDVElWRX0+LzwvTGluaz48L2xpPlxuICAgICAgICAgIDxsaT48SW5kZXhMaW5rIHRvPVwiL1wiICAgICAgICAgICBhY3RpdmVTdHlsZT17QUNUSVZFfT4vIEluZGV4TGluazwvSW5kZXhMaW5rPjwvbGk+XG5cbiAgICAgICAgICA8bGk+PExpbmsgICAgICB0bz1cIi91c2Vyc1wiICAgICAgYWN0aXZlU3R5bGU9e0FDVElWRX0+L3VzZXJzPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPGxpPjxJbmRleExpbmsgdG89XCIvdXNlcnNcIiAgICAgIGFjdGl2ZVN0eWxlPXtBQ1RJVkV9Pi91c2VycyBJbmRleExpbms8L0luZGV4TGluaz48L2xpPlxuXG4gICAgICAgICAgPGxpPjxMaW5rICAgICAgdG89XCIvdXNlcnMvcnlhblwiIGFjdGl2ZVN0eWxlPXtBQ1RJVkV9Pi91c2Vycy9yeWFuPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPGxpPjxMaW5rICAgICAgdG89e3sgcGF0aG5hbWU6ICcvdXNlcnMvcnlhbicsIHF1ZXJ5OiB7IGZvbzogJ2JhcicgfSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3R5bGU9e0FDVElWRX0+L3VzZXJzL3J5YW4/Zm9vPWJhcjwvTGluaz48L2xpPlxuXG4gICAgICAgICAgPGxpPjxMaW5rICAgICAgdG89XCIvYWJvdXRcIiAgICAgIGFjdGl2ZVN0eWxlPXtBQ1RJVkV9Pi9hYm91dDwvTGluaz48L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+SW5kZXghPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBVc2VycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlVzZXJzPC9oMj5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgVXNlcnNJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPlVzZXJzSW5kZXg8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5Vc2VyIHt0aGlzLnByb3BzLnBhcmFtcy5pZH08L2gzPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+QWJvdXQ8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfT5cbiAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17SW5kZXh9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2Fib3V0XCIgY29tcG9uZW50PXtBYm91dH0vPlxuICAgICAgPFJvdXRlIHBhdGg9XCJ1c2Vyc1wiIGNvbXBvbmVudD17VXNlcnN9PlxuICAgICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e1VzZXJzSW5kZXh9Lz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCI6aWRcIiBjb21wb25lbnQ9e1VzZXJ9Lz5cbiAgICAgIDwvUm91dGU+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hY3RpdmUtbGlua3MvYXBwLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==