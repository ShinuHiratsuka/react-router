webpackJsonp([2,16],[
/* 0 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {import React from 'react';
	import { render } from 'react-dom';
	import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
	
	import withExampleBasename from '../withExampleBasename';
	import auth from './auth';
	
	const App = React.createClass({
	  displayName: 'App',
	
	  getInitialState() {
	    return {
	      loggedIn: auth.loggedIn()
	    };
	  },
	
	  updateAuth(loggedIn) {
	    this.setState({
	      loggedIn
	    });
	  },
	
	  componentWillMount() {
	    auth.onChange = this.updateAuth;
	    auth.login();
	  },
	
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
	          this.state.loggedIn ? React.createElement(
	            Link,
	            { to: '/logout' },
	            'Log out'
	          ) : React.createElement(
	            Link,
	            { to: '/login' },
	            'Sign in'
	          )
	        ),
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            Link,
	            { to: '/about' },
	            'About'
	          )
	        ),
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            Link,
	            { to: '/dashboard' },
	            'Dashboard'
	          ),
	          ' (authenticated)'
	        )
	      ),
	      this.props.children || React.createElement(
	        'p',
	        null,
	        'You are ',
	        !this.state.loggedIn && 'not',
	        ' logged in.'
	      )
	    );
	  }
	});
	
	const Dashboard = React.createClass({
	  displayName: 'Dashboard',
	
	  render() {
	    const token = auth.getToken();
	
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h1',
	        null,
	        'Dashboard'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'You made it!'
	      ),
	      React.createElement(
	        'p',
	        null,
	        token
	      )
	    );
	  }
	});
	
	const Login = withRouter(React.createClass({
	  displayName: 'Login',
	
	
	  getInitialState() {
	    return {
	      error: false
	    };
	  },
	
	  handleSubmit(event) {
	    event.preventDefault();
	
	    const email = this.refs.email.value;
	    const pass = this.refs.pass.value;
	
	    auth.login(email, pass, loggedIn => {
	      if (!loggedIn) return this.setState({ error: true });
	
	      const { location } = this.props;
	
	      if (location.state && location.state.nextPathname) {
	        this.props.router.replace(location.state.nextPathname);
	      } else {
	        this.props.router.replace('/');
	      }
	    });
	  },
	
	  render() {
	    return React.createElement(
	      'form',
	      { onSubmit: this.handleSubmit },
	      React.createElement(
	        'label',
	        null,
	        React.createElement('input', { ref: 'email', placeholder: 'email', defaultValue: 'joe@example.com' })
	      ),
	      React.createElement(
	        'label',
	        null,
	        React.createElement('input', { ref: 'pass', placeholder: 'password' })
	      ),
	      ' (hint: password1)',
	      React.createElement('br', null),
	      React.createElement(
	        'button',
	        { type: 'submit' },
	        'login'
	      ),
	      this.state.error && React.createElement(
	        'p',
	        null,
	        'Bad login information'
	      )
	    );
	  }
	}));
	
	const About = React.createClass({
	  displayName: 'About',
	
	  render() {
	    return React.createElement(
	      'h1',
	      null,
	      'About'
	    );
	  }
	});
	
	const Logout = React.createClass({
	  displayName: 'Logout',
	
	  componentDidMount() {
	    auth.logout();
	  },
	
	  render() {
	    return React.createElement(
	      'p',
	      null,
	      'You are now logged out'
	    );
	  }
	});
	
	function requireAuth(nextState, replace) {
	  if (!auth.loggedIn()) {
	    replace({
	      pathname: '/login',
	      state: { nextPathname: nextState.location.pathname }
	    });
	  }
	}
	
	render(React.createElement(
	  Router,
	  { history: withExampleBasename(browserHistory, __dirname) },
	  React.createElement(
	    Route,
	    { path: '/', component: App },
	    React.createElement(Route, { path: 'login', component: Login }),
	    React.createElement(Route, { path: 'logout', component: Logout }),
	    React.createElement(Route, { path: 'about', component: About }),
	    React.createElement(Route, { path: 'dashboard', component: Dashboard, onEnter: requireAuth })
	  )
	), document.getElementById('example'));
	/* WEBPACK VAR INJECTION */}.call(exports, "auth-flow"))

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hdXRoLWZsb3cvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx5REFBTyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsVUFBUyxNQUFULFFBQXVCLFdBQXZCO0FBQ0EsVUFBUyxjQUFULEVBQXlCLE1BQXpCLEVBQWlDLEtBQWpDLEVBQXdDLElBQXhDLEVBQThDLFVBQTlDLFFBQWdFLGNBQWhFOztBQUVBLFFBQU8sbUJBQVAsTUFBZ0Msd0JBQWhDO0FBQ0EsUUFBTyxJQUFQLE1BQWlCLFFBQWpCOztBQUVBLE9BQU0sTUFBTSxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDNUIscUJBQWtCO0FBQ2hCLFlBQU87QUFDTCxpQkFBVSxLQUFLLFFBQUw7QUFETCxNQUFQO0FBR0QsSUFMMkI7O0FBTzVCLGNBQVcsUUFBWCxFQUFxQjtBQUNuQixVQUFLLFFBQUwsQ0FBYztBQUNaO0FBRFksTUFBZDtBQUdELElBWDJCOztBQWE1Qix3QkFBcUI7QUFDbkIsVUFBSyxRQUFMLEdBQWdCLEtBQUssVUFBckI7QUFDQSxVQUFLLEtBQUw7QUFDRCxJQWhCMkI7O0FBa0I1QixZQUFTO0FBQ1AsWUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRyxnQkFBSyxLQUFMLENBQVcsUUFBWCxHQUNDO0FBQUMsaUJBQUQ7QUFBQSxlQUFNLElBQUcsU0FBVDtBQUFBO0FBQUEsWUFERCxHQUdDO0FBQUMsaUJBQUQ7QUFBQSxlQUFNLElBQUcsUUFBVDtBQUFBO0FBQUE7QUFKSixVQURGO0FBUUU7QUFBQTtBQUFBO0FBQUk7QUFBQyxpQkFBRDtBQUFBLGVBQU0sSUFBRyxRQUFUO0FBQUE7QUFBQTtBQUFKLFVBUkY7QUFTRTtBQUFBO0FBQUE7QUFBSTtBQUFDLGlCQUFEO0FBQUEsZUFBTSxJQUFHLFlBQVQ7QUFBQTtBQUFBLFlBQUo7QUFBQTtBQUFBO0FBVEYsUUFERjtBQVlHLFlBQUssS0FBTCxDQUFXLFFBQVgsSUFB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QVosRUFBZ0IsV0FBVyxHQUEzQjtBQUNFLHlCQUFDLEtBQUQsSUFBTyxNQUFLLE9BQVosRUFBb0IsV0FBVyxLQUEvQixHQURGO0FBRUUseUJBQUMsS0FBRCxJQUFPLE1BQUssUUFBWixFQUFxQixXQUFXLE1BQWhDLEdBRkY7QUFHRSx5QkFBQyxLQUFELElBQU8sTUFBSyxPQUFaLEVBQW9CLFdBQVcsS0FBL0IsR0FIRjtBQUlFLHlCQUFDLEtBQUQsSUFBTyxNQUFLLFdBQVosRUFBd0IsV0FBVyxTQUFuQyxFQUE4QyxTQUFTLFdBQXZEO0FBSkY7QUFERixFQURGLEVBU0csU0FBUyxjQUFULENBQXdCLFNBQXhCLENBVEgsRSIsImZpbGUiOiJhdXRoLWZsb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyLCBSb3V0ZSwgTGluaywgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHdpdGhFeGFtcGxlQmFzZW5hbWUgZnJvbSAnLi4vd2l0aEV4YW1wbGVCYXNlbmFtZSdcbmltcG9ydCBhdXRoIGZyb20gJy4vYXV0aCdcblxuY29uc3QgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ2dlZEluOiBhdXRoLmxvZ2dlZEluKClcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlQXV0aChsb2dnZWRJbikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9nZ2VkSW5cbiAgICB9KVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBhdXRoLm9uQ2hhbmdlID0gdGhpcy51cGRhdGVBdXRoXG4gICAgYXV0aC5sb2dpbigpXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUubG9nZ2VkSW4gPyAoXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ291dFwiPkxvZyBvdXQ8L0xpbms+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPlNpZ24gaW48L0xpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+PC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvZGFzaGJvYXJkXCI+RGFzaGJvYXJkPC9MaW5rPiAoYXV0aGVudGljYXRlZCk8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbiB8fCA8cD5Zb3UgYXJlIHshdGhpcy5zdGF0ZS5sb2dnZWRJbiAmJiAnbm90J30gbG9nZ2VkIGluLjwvcD59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IERhc2hib2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRva2VuID0gYXV0aC5nZXRUb2tlbigpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkRhc2hib2FyZDwvaDE+XG4gICAgICAgIDxwPllvdSBtYWRlIGl0ITwvcD5cbiAgICAgICAgPHA+e3Rva2VufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgTG9naW4gPSB3aXRoUm91dGVyKFxuICBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcjogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIGNvbnN0IGVtYWlsID0gdGhpcy5yZWZzLmVtYWlsLnZhbHVlXG4gICAgICBjb25zdCBwYXNzID0gdGhpcy5yZWZzLnBhc3MudmFsdWVcblxuICAgICAgYXV0aC5sb2dpbihlbWFpbCwgcGFzcywgKGxvZ2dlZEluKSA9PiB7XG4gICAgICAgIGlmICghbG9nZ2VkSW4pXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSB9KVxuXG4gICAgICAgIGNvbnN0IHsgbG9jYXRpb24gfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBpZiAobG9jYXRpb24uc3RhdGUgJiYgbG9jYXRpb24uc3RhdGUubmV4dFBhdGhuYW1lKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIucmVwbGFjZShsb2NhdGlvbi5zdGF0ZS5uZXh0UGF0aG5hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIucmVwbGFjZSgnLycpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsPjxpbnB1dCByZWY9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiBkZWZhdWx0VmFsdWU9XCJqb2VAZXhhbXBsZS5jb21cIiAvPjwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPjxpbnB1dCByZWY9XCJwYXNzXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIC8+PC9sYWJlbD4gKGhpbnQ6IHBhc3N3b3JkMSk8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5sb2dpbjwvYnV0dG9uPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yICYmIChcbiAgICAgICAgICAgIDxwPkJhZCBsb2dpbiBpbmZvcm1hdGlvbjwvcD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICApXG4gICAgfVxuICB9KVxuKVxuXG5jb25zdCBBYm91dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+QWJvdXQ8L2gxPlxuICB9XG59KVxuXG5jb25zdCBMb2dvdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF1dGgubG9nb3V0KClcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxwPllvdSBhcmUgbm93IGxvZ2dlZCBvdXQ8L3A+XG4gIH1cbn0pXG5cbmZ1bmN0aW9uIHJlcXVpcmVBdXRoKG5leHRTdGF0ZSwgcmVwbGFjZSkge1xuICBpZiAoIWF1dGgubG9nZ2VkSW4oKSkge1xuICAgIHJlcGxhY2Uoe1xuICAgICAgcGF0aG5hbWU6ICcvbG9naW4nLFxuICAgICAgc3RhdGU6IHsgbmV4dFBhdGhuYW1lOiBuZXh0U3RhdGUubG9jYXRpb24ucGF0aG5hbWUgfVxuICAgIH0pXG4gIH1cbn1cblxucmVuZGVyKChcbiAgPFJvdXRlciBoaXN0b3J5PXt3aXRoRXhhbXBsZUJhc2VuYW1lKGJyb3dzZXJIaXN0b3J5LCBfX2Rpcm5hbWUpfT5cbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XG4gICAgICA8Um91dGUgcGF0aD1cImxvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwibG9nb3V0XCIgY29tcG9uZW50PXtMb2dvdXR9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cImFib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiZGFzaGJvYXJkXCIgY29tcG9uZW50PXtEYXNoYm9hcmR9IG9uRW50ZXI9e3JlcXVpcmVBdXRofSAvPlxuICAgIDwvUm91dGU+XG4gIDwvUm91dGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXV0aC1mbG93L2FwcC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=