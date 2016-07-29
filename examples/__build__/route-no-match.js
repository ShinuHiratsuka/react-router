webpackJsonp([14,16],[
/* 0 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {import React from 'react';
	import { render } from 'react-dom';
	import { browserHistory, Router, Route, Link } from 'react-router';
	
	import withExampleBasename from '../withExampleBasename';
	
	class User extends React.Component {
	  render() {
	    let { userID } = this.props.params;
	    let { query } = this.props.location;
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
	  }
	}
	
	class App extends React.Component {
	  render() {
	    return React.createElement(
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
	      this.props.children
	    );
	  }
	}
	
	class PageNotFound extends React.Component {
	  render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h1',
	        null,
	        'Page Not Found.'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Go to ',
	        React.createElement(
	          Link,
	          { to: '/' },
	          'Home Page'
	        )
	      )
	    );
	  }
	}
	
	render(React.createElement(
	  Router,
	  { history: withExampleBasename(browserHistory, __dirname) },
	  React.createElement(
	    Route,
	    { path: '/', component: App },
	    React.createElement(Route, { path: 'user/:userID', component: User })
	  ),
	  React.createElement(Route, { path: '*', component: PageNotFound })
	), document.getElementById('example'));
	/* WEBPACK VAR INJECTION */}.call(exports, "route-no-match"))

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZS1uby1tYXRjaC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHlEQUFPLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxVQUFTLE1BQVQsUUFBdUIsV0FBdkI7QUFDQSxVQUFTLGNBQVQsRUFBeUIsTUFBekIsRUFBaUMsS0FBakMsRUFBd0MsSUFBeEMsUUFBb0QsY0FBcEQ7O0FBRUEsUUFBTyxtQkFBUCxNQUFnQyx3QkFBaEM7O0FBRUEsT0FBTSxJQUFOLFNBQW1CLE1BQU0sU0FBekIsQ0FBbUM7QUFDakMsWUFBUztBQUNQLFNBQUksRUFBRSxNQUFGLEtBQWEsS0FBSyxLQUFMLENBQVcsTUFBNUI7QUFDQSxTQUFJLEVBQUUsS0FBRixLQUFZLEtBQUssS0FBTCxDQUFXLFFBQTNCO0FBQ0EsU0FBSSxNQUFNLFNBQVMsTUFBTSxPQUFmLEdBQXlCLElBQXpCLEdBQWdDLEVBQTFDOztBQUVBLFlBQ0U7QUFBQTtBQUFBLFNBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBYztBQUFkLFFBREY7QUFFRztBQUZILE1BREY7QUFNRDtBQVpnQzs7QUFlbkMsT0FBTSxHQUFOLFNBQWtCLE1BQU0sU0FBeEIsQ0FBa0M7QUFDaEMsWUFBUztBQUNQLFlBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQyxpQkFBRDtBQUFBLGVBQU0sSUFBRyxXQUFULEVBQXFCLGlCQUFnQixRQUFyQztBQUFBO0FBQUE7QUFBSixVQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQyxpQkFBRDtBQUFBLGVBQU0sSUFBSSxFQUFFLFVBQVUsV0FBWixFQUF5QixPQUFPLEVBQUUsU0FBUyxJQUFYLEVBQWhDLEVBQVYsRUFBK0QsaUJBQWdCLFFBQS9FO0FBQUE7QUFBQTtBQUFKLFVBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSTtBQUFDLGlCQUFEO0FBQUEsZUFBTSxJQUFHLGFBQVQsRUFBdUIsaUJBQWdCLFFBQXZDO0FBQUE7QUFBQTtBQUFKO0FBSEYsUUFERjtBQU1HLFlBQUssS0FBTCxDQUFXO0FBTmQsTUFERjtBQVVEO0FBWitCOztBQWVsQyxPQUFNLFlBQU4sU0FBMkIsTUFBTSxTQUFqQyxDQUEyQztBQUN6QyxZQUFTO0FBQ1AsWUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFTO0FBQUMsZUFBRDtBQUFBLGFBQU0sSUFBRyxHQUFUO0FBQUE7QUFBQTtBQUFUO0FBRkYsTUFERjtBQU1EO0FBUndDOztBQVczQyxRQUNFO0FBQUMsU0FBRDtBQUFBLEtBQVEsU0FBUyxvQkFBb0IsY0FBcEIsRUFBb0MsU0FBcEMsQ0FBakI7QUFDRTtBQUFDLFVBQUQ7QUFBQSxPQUFPLE1BQUssR0FBWixFQUFnQixXQUFXLEdBQTNCO0FBQ0UseUJBQUMsS0FBRCxJQUFPLE1BQUssY0FBWixFQUEyQixXQUFXLElBQXRDO0FBREYsSUFERjtBQUlFLHVCQUFDLEtBQUQsSUFBTyxNQUFLLEdBQVosRUFBZ0IsV0FBVyxZQUEzQjtBQUpGLEVBREYsRUFPRyxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FQSCxFIiwiZmlsZSI6InJvdXRlLW5vLW1hdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnksIFJvdXRlciwgUm91dGUsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB3aXRoRXhhbXBsZUJhc2VuYW1lIGZyb20gJy4uL3dpdGhFeGFtcGxlQmFzZW5hbWUnXG5cbmNsYXNzIFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgdXNlcklEIH0gPSB0aGlzLnByb3BzLnBhcmFtc1xuICAgIGxldCB7IHF1ZXJ5IH0gPSB0aGlzLnByb3BzLmxvY2F0aW9uXG4gICAgbGV0IGFnZSA9IHF1ZXJ5ICYmIHF1ZXJ5LnNob3dBZ2UgPyAnMzMnIDogJydcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlVzZXJcIj5cbiAgICAgICAgPGgxPlVzZXIgaWQ6IHt1c2VySUR9PC9oMT5cbiAgICAgICAge2FnZX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvdXNlci9ib2JcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5Cb2I8L0xpbms+PC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgdG89e3sgcGF0aG5hbWU6ICcvdXNlci9ib2InLCBxdWVyeTogeyBzaG93QWdlOiB0cnVlIH0gfX0gYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+Qm9iIFdpdGggUXVlcnkgUGFyYW1zPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL3VzZXIvc2FsbHlcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5TYWxseTwvTGluaz48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBQYWdlTm90Rm91bmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5QYWdlIE5vdCBGb3VuZC48L2gxPlxuICAgICAgICA8cD5HbyB0byA8TGluayB0bz1cIi9cIj5Ib21lIFBhZ2U8L0xpbms+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17d2l0aEV4YW1wbGVCYXNlbmFtZShicm93c2VySGlzdG9yeSwgX19kaXJuYW1lKX0+XG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgPFJvdXRlIHBhdGg9XCJ1c2VyLzp1c2VySURcIiBjb21wb25lbnQ9e1VzZXJ9IC8+XG4gICAgPC9Sb3V0ZT5cbiAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e1BhZ2VOb3RGb3VuZH0gLz5cbiAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9yb3V0ZS1uby1tYXRjaC9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9