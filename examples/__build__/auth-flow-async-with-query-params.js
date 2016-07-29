webpackJsonp([3,16],[
/* 0 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {import React, { createClass } from 'react';
	import { render } from 'react-dom';
	import { Router, Route, IndexRoute, browserHistory, Link, withRouter } from 'react-router';
	
	import withExampleBasename from '../withExampleBasename';
	
	function App(props) {
	  return React.createElement(
	    'div',
	    null,
	    props.children
	  );
	}
	
	const Form = withRouter(createClass({
	
	  getInitialState() {
	    return {
	      value: ''
	    };
	  },
	
	  submitAction(event) {
	    event.preventDefault();
	    this.props.router.push({
	      pathname: '/page',
	      query: {
	        qsparam: this.state.value
	      }
	    });
	  },
	
	  handleChange(event) {
	    this.setState({ value: event.target.value });
	  },
	
	  render() {
	    return React.createElement(
	      'form',
	      { onSubmit: this.submitAction },
	      React.createElement(
	        'p',
	        null,
	        'Token is ',
	        React.createElement(
	          'em',
	          null,
	          'pancakes'
	        )
	      ),
	      React.createElement('input', { type: 'text', value: this.state.value, onChange: this.handleChange }),
	      React.createElement(
	        'button',
	        { type: 'submit' },
	        'Submit the thing'
	      ),
	      React.createElement(
	        'p',
	        null,
	        React.createElement(
	          Link,
	          { to: '/page?qsparam=pancakes' },
	          'Or authenticate via URL'
	        )
	      ),
	      React.createElement(
	        'p',
	        null,
	        React.createElement(
	          Link,
	          { to: '/page?qsparam=bacon' },
	          'Or try failing to authenticate via URL'
	        )
	      )
	    );
	  }
	}));
	
	function Page() {
	  return React.createElement(
	    'h1',
	    null,
	    'Hey, I see you are authenticated. Welcome!'
	  );
	}
	
	function ErrorPage() {
	  return React.createElement(
	    'h1',
	    null,
	    'Oh no! Your auth failed!'
	  );
	}
	
	function requireCredentials(nextState, replace, next) {
	  const query = nextState.location.query;
	  if (query.qsparam) {
	    serverAuth(query.qsparam).then(() => next(), () => {
	      replace('/error');
	      next();
	    });
	  } else {
	    replace('/error');
	    next();
	  }
	}
	
	function serverAuth(authToken) {
	  return new Promise((resolve, reject) => {
	    // That server is gonna take a while
	    setTimeout(() => {
	      if (authToken === 'pancakes') {
	        resolve('authenticated');
	      } else {
	        reject('nope');
	      }
	    }, 200);
	  });
	}
	
	render(React.createElement(
	  Router,
	  { history: withExampleBasename(browserHistory, __dirname) },
	  React.createElement(
	    Route,
	    { path: '/', component: App },
	    React.createElement(IndexRoute, { component: Form }),
	    React.createElement(Route, { path: 'page', component: Page, onEnter: requireCredentials }),
	    React.createElement(Route, { path: 'error', component: ErrorPage })
	  )
	), document.getElementById('example'));
	/* WEBPACK VAR INJECTION */}.call(exports, "auth-flow-async-with-query-params"))

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hdXRoLWZsb3ctYXN5bmMtd2l0aC1xdWVyeS1wYXJhbXMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx5REFBTyxLQUFQLElBQWdCLFdBQWhCLFFBQW1DLE9BQW5DO0FBQ0EsVUFBUyxNQUFULFFBQXVCLFdBQXZCO0FBQ0EsVUFBUyxNQUFULEVBQWlCLEtBQWpCLEVBQXdCLFVBQXhCLEVBQW9DLGNBQXBDLEVBQW9ELElBQXBELEVBQTBELFVBQTFELFFBQTRFLGNBQTVFOztBQUVBLFFBQU8sbUJBQVAsTUFBZ0Msd0JBQWhDOztBQUVBLFVBQVMsR0FBVCxDQUFhLEtBQWIsRUFBb0I7QUFDbEIsVUFDRTtBQUFBO0FBQUE7QUFDRyxXQUFNO0FBRFQsSUFERjtBQUtEOztBQUVELE9BQU0sT0FBTyxXQUNYLFlBQVk7O0FBRVYscUJBQWtCO0FBQ2hCLFlBQU87QUFDTCxjQUFPO0FBREYsTUFBUDtBQUdELElBTlM7O0FBUVYsZ0JBQWEsS0FBYixFQUFvQjtBQUNsQixXQUFNLGNBQU47QUFDQSxVQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLElBQWxCLENBQXVCO0FBQ3JCLGlCQUFVLE9BRFc7QUFFckIsY0FBTztBQUNMLGtCQUFTLEtBQUssS0FBTCxDQUFXO0FBRGY7QUFGYyxNQUF2QjtBQU1ELElBaEJTOztBQWtCVixnQkFBYSxLQUFiLEVBQW9CO0FBQ2xCLFVBQUssUUFBTCxDQUFjLEVBQUUsT0FBTyxNQUFNLE1BQU4sQ0FBYSxLQUF0QixFQUFkO0FBQ0QsSUFwQlM7O0FBc0JWLFlBQVM7QUFDUCxZQUNFO0FBQUE7QUFBQSxTQUFNLFVBQVUsS0FBSyxZQUFyQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFaLFFBREY7QUFFRSxzQ0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFyQyxFQUE0QyxVQUFVLEtBQUssWUFBM0QsR0FGRjtBQUdFO0FBQUE7QUFBQSxXQUFRLE1BQUssUUFBYjtBQUFBO0FBQUEsUUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFHO0FBQUMsZUFBRDtBQUFBLGFBQU0sSUFBRyx3QkFBVDtBQUFBO0FBQUE7QUFBSCxRQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUc7QUFBQyxlQUFEO0FBQUEsYUFBTSxJQUFHLHFCQUFUO0FBQUE7QUFBQTtBQUFIO0FBTEYsTUFERjtBQVNEO0FBaENTLEVBQVosQ0FEVyxDQUFiOztBQXFDQSxVQUFTLElBQVQsR0FBZ0I7QUFDZCxVQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNEOztBQUVELFVBQVMsU0FBVCxHQUFxQjtBQUNuQixVQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNEOztBQUVELFVBQVMsa0JBQVQsQ0FBNEIsU0FBNUIsRUFBdUMsT0FBdkMsRUFBZ0QsSUFBaEQsRUFBc0Q7QUFDcEQsU0FBTSxRQUFRLFVBQVUsUUFBVixDQUFtQixLQUFqQztBQUNBLE9BQUksTUFBTSxPQUFWLEVBQW1CO0FBQ2pCLGdCQUFXLE1BQU0sT0FBakIsRUFDQyxJQURELENBRUUsTUFBTSxNQUZSLEVBR0UsTUFBTTtBQUNKLGVBQVEsUUFBUjtBQUNBO0FBQ0QsTUFOSDtBQVFELElBVEQsTUFTTztBQUNMLGFBQVEsUUFBUjtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxVQUFTLFVBQVQsQ0FBb0IsU0FBcEIsRUFBK0I7QUFDN0IsVUFBTyxJQUFJLE9BQUosQ0FBWSxDQUFDLE9BQUQsRUFBVSxNQUFWLEtBQXFCO0FBQ3RDO0FBQ0EsZ0JBQVcsTUFBTTtBQUNmLFdBQUcsY0FBYyxVQUFqQixFQUE2QjtBQUMzQixpQkFBUSxlQUFSO0FBQ0QsUUFGRCxNQUVPO0FBQ0wsZ0JBQU8sTUFBUDtBQUNEO0FBQ0YsTUFORCxFQU1HLEdBTkg7QUFPRCxJQVRNLENBQVA7QUFVRDs7QUFFRCxRQUNFO0FBQUMsU0FBRDtBQUFBLEtBQVEsU0FBUyxvQkFBb0IsY0FBcEIsRUFBb0MsU0FBcEMsQ0FBakI7QUFDRTtBQUFDLFVBQUQ7QUFBQSxPQUFPLE1BQUssR0FBWixFQUFnQixXQUFXLEdBQTNCO0FBQ0UseUJBQUMsVUFBRCxJQUFZLFdBQVcsSUFBdkIsR0FERjtBQUVFLHlCQUFDLEtBQUQsSUFBTyxNQUFLLE1BQVosRUFBbUIsV0FBVyxJQUE5QixFQUFvQyxTQUFTLGtCQUE3QyxHQUZGO0FBR0UseUJBQUMsS0FBRCxJQUFPLE1BQUssT0FBWixFQUFvQixXQUFXLFNBQS9CO0FBSEY7QUFERixFQURGLEVBUUcsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBUkgsRSIsImZpbGUiOiJhdXRoLWZsb3ctYXN5bmMtd2l0aC1xdWVyeS1wYXJhbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ2xhc3MgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGJyb3dzZXJIaXN0b3J5LCBMaW5rLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgd2l0aEV4YW1wbGVCYXNlbmFtZSBmcm9tICcuLi93aXRoRXhhbXBsZUJhc2VuYW1lJ1xuXG5mdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEZvcm0gPSB3aXRoUm91dGVyKFxuICBjcmVhdGVDbGFzcyh7XG5cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3VibWl0QWN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6ICcvcGFnZScsXG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgcXNwYXJhbTogdGhpcy5zdGF0ZS52YWx1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgfSxcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEFjdGlvbn0+XG4gICAgICAgICAgPHA+VG9rZW4gaXMgPGVtPnBhbmNha2VzPC9lbT48L3A+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQgdGhlIHRoaW5nPC9idXR0b24+XG4gICAgICAgICAgPHA+PExpbmsgdG89XCIvcGFnZT9xc3BhcmFtPXBhbmNha2VzXCI+T3IgYXV0aGVudGljYXRlIHZpYSBVUkw8L0xpbms+PC9wPlxuICAgICAgICAgIDxwPjxMaW5rIHRvPVwiL3BhZ2U/cXNwYXJhbT1iYWNvblwiPk9yIHRyeSBmYWlsaW5nIHRvIGF1dGhlbnRpY2F0ZSB2aWEgVVJMPC9MaW5rPjwvcD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKVxuICAgIH1cbiAgfSlcbilcblxuZnVuY3Rpb24gUGFnZSgpIHtcbiAgcmV0dXJuIDxoMT5IZXksIEkgc2VlIHlvdSBhcmUgYXV0aGVudGljYXRlZC4gV2VsY29tZSE8L2gxPlxufVxuXG5mdW5jdGlvbiBFcnJvclBhZ2UoKSB7XG4gIHJldHVybiA8aDE+T2ggbm8hIFlvdXIgYXV0aCBmYWlsZWQhPC9oMT5cbn1cblxuZnVuY3Rpb24gcmVxdWlyZUNyZWRlbnRpYWxzKG5leHRTdGF0ZSwgcmVwbGFjZSwgbmV4dCkge1xuICBjb25zdCBxdWVyeSA9IG5leHRTdGF0ZS5sb2NhdGlvbi5xdWVyeVxuICBpZiAocXVlcnkucXNwYXJhbSkge1xuICAgIHNlcnZlckF1dGgocXVlcnkucXNwYXJhbSlcbiAgICAudGhlbihcbiAgICAgICgpID0+IG5leHQoKSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgcmVwbGFjZSgnL2Vycm9yJylcbiAgICAgICAgbmV4dCgpXG4gICAgICB9XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJlcGxhY2UoJy9lcnJvcicpXG4gICAgbmV4dCgpXG4gIH1cbn1cblxuZnVuY3Rpb24gc2VydmVyQXV0aChhdXRoVG9rZW4pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBUaGF0IHNlcnZlciBpcyBnb25uYSB0YWtlIGEgd2hpbGVcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmKGF1dGhUb2tlbiA9PT0gJ3BhbmNha2VzJykge1xuICAgICAgICByZXNvbHZlKCdhdXRoZW50aWNhdGVkJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdCgnbm9wZScpXG4gICAgICB9XG4gICAgfSwgMjAwKVxuICB9KVxufVxuXG5yZW5kZXIoKFxuICA8Um91dGVyIGhpc3Rvcnk9e3dpdGhFeGFtcGxlQmFzZW5hbWUoYnJvd3Nlckhpc3RvcnksIF9fZGlybmFtZSl9PlxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfT5cbiAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17Rm9ybX0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwicGFnZVwiIGNvbXBvbmVudD17UGFnZX0gb25FbnRlcj17cmVxdWlyZUNyZWRlbnRpYWxzfS8+XG4gICAgICA8Um91dGUgcGF0aD1cImVycm9yXCIgY29tcG9uZW50PXtFcnJvclBhZ2V9Lz5cbiAgICA8L1JvdXRlPlxuICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJykpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2F1dGgtZmxvdy1hc3luYy13aXRoLXF1ZXJ5LXBhcmFtcy9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9