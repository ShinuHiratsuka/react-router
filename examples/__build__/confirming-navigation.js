webpackJsonp([6,16],[
/* 0 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {import React from 'react';
	import { render } from 'react-dom';
	import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
	
	import withExampleBasename from '../withExampleBasename';
	
	const App = React.createClass({
	  displayName: 'App',
	
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
	            { to: '/dashboard', activeClassName: 'active' },
	            'Dashboard'
	          )
	        ),
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            Link,
	            { to: '/form', activeClassName: 'active' },
	            'Form'
	          )
	        )
	      ),
	      this.props.children
	    );
	  }
	});
	
	const Dashboard = React.createClass({
	  displayName: 'Dashboard',
	
	  render() {
	    return React.createElement(
	      'h1',
	      null,
	      'Dashboard'
	    );
	  }
	});
	
	const Form = withRouter(React.createClass({
	  displayName: 'Form',
	
	
	  componentWillMount() {
	    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
	  },
	
	  getInitialState() {
	    return {
	      textValue: 'ohai'
	    };
	  },
	
	  routerWillLeave() {
	    if (this.state.textValue) return 'You have unsaved information, are you sure you want to leave this page?';
	  },
	
	  handleChange(event) {
	    this.setState({
	      textValue: event.target.value
	    });
	  },
	
	  handleSubmit(event) {
	    event.preventDefault();
	
	    this.setState({
	      textValue: ''
	    }, () => {
	      this.props.router.push('/');
	    });
	  },
	
	  render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'form',
	        { onSubmit: this.handleSubmit },
	        React.createElement(
	          'p',
	          null,
	          'Click the dashboard link with text in the input.'
	        ),
	        React.createElement('input', { type: 'text', ref: 'userInput', value: this.state.textValue, onChange: this.handleChange }),
	        React.createElement(
	          'button',
	          { type: 'submit' },
	          'Go'
	        )
	      )
	    );
	  }
	}));
	
	render(React.createElement(
	  Router,
	  { history: withExampleBasename(browserHistory, __dirname) },
	  React.createElement(
	    Route,
	    { path: '/', component: App },
	    React.createElement(Route, { path: 'dashboard', component: Dashboard }),
	    React.createElement(Route, { path: 'form', component: Form })
	  )
	), document.getElementById('example'));
	/* WEBPACK VAR INJECTION */}.call(exports, "confirming-navigation"))

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maXJtaW5nLW5hdmlnYXRpb24vYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx5REFBTyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsVUFBUyxNQUFULFFBQXVCLFdBQXZCO0FBQ0EsVUFBUyxjQUFULEVBQXlCLE1BQXpCLEVBQWlDLEtBQWpDLEVBQXdDLElBQXhDLEVBQThDLFVBQTlDLFFBQWdFLGNBQWhFOztBQUVBLFFBQU8sbUJBQVAsTUFBZ0Msd0JBQWhDOztBQUVBLE9BQU0sTUFBTSxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDNUIsWUFBUztBQUNQLFlBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQyxpQkFBRDtBQUFBLGVBQU0sSUFBRyxZQUFULEVBQXNCLGlCQUFnQixRQUF0QztBQUFBO0FBQUE7QUFBSixVQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQyxpQkFBRDtBQUFBLGVBQU0sSUFBRyxPQUFULEVBQWlCLGlCQUFnQixRQUFqQztBQUFBO0FBQUE7QUFBSjtBQUZGLFFBREY7QUFLRyxZQUFLLEtBQUwsQ0FBVztBQUxkLE1BREY7QUFTRDtBQVgyQixFQUFsQixDQUFaOztBQWNBLE9BQU0sWUFBWSxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDbEMsWUFBUztBQUNQLFlBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0Q7QUFIaUMsRUFBbEIsQ0FBbEI7O0FBTUEsT0FBTSxPQUFPLFdBQ1gsTUFBTSxXQUFOLENBQWtCO0FBQUE7OztBQUVoQix3QkFBcUI7QUFDbkIsVUFBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixpQkFBbEIsQ0FDRSxLQUFLLEtBQUwsQ0FBVyxLQURiLEVBRUUsS0FBSyxlQUZQO0FBSUQsSUFQZTs7QUFTaEIscUJBQWtCO0FBQ2hCLFlBQU87QUFDTCxrQkFBVztBQUROLE1BQVA7QUFHRCxJQWJlOztBQWVoQixxQkFBa0I7QUFDaEIsU0FBSSxLQUFLLEtBQUwsQ0FBVyxTQUFmLEVBQ0UsT0FBTyx5RUFBUDtBQUNILElBbEJlOztBQW9CaEIsZ0JBQWEsS0FBYixFQUFvQjtBQUNsQixVQUFLLFFBQUwsQ0FBYztBQUNaLGtCQUFXLE1BQU0sTUFBTixDQUFhO0FBRFosTUFBZDtBQUdELElBeEJlOztBQTBCaEIsZ0JBQWEsS0FBYixFQUFvQjtBQUNsQixXQUFNLGNBQU47O0FBRUEsVUFBSyxRQUFMLENBQWM7QUFDWixrQkFBVztBQURDLE1BQWQsRUFFRyxNQUFNO0FBQ1AsWUFBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixJQUFsQixDQUF1QixHQUF2QjtBQUNELE1BSkQ7QUFLRCxJQWxDZTs7QUFvQ2hCLFlBQVM7QUFDUCxZQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxXQUFNLFVBQVUsS0FBSyxZQUFyQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUVFLHdDQUFPLE1BQUssTUFBWixFQUFtQixLQUFJLFdBQXZCLEVBQW1DLE9BQU8sS0FBSyxLQUFMLENBQVcsU0FBckQsRUFBZ0UsVUFBVSxLQUFLLFlBQS9FLEdBRkY7QUFHRTtBQUFBO0FBQUEsYUFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBSEY7QUFERixNQURGO0FBU0Q7QUE5Q2UsRUFBbEIsQ0FEVyxDQUFiOztBQW1EQSxRQUNFO0FBQUMsU0FBRDtBQUFBLEtBQVEsU0FBUyxvQkFBb0IsY0FBcEIsRUFBb0MsU0FBcEMsQ0FBakI7QUFDRTtBQUFDLFVBQUQ7QUFBQSxPQUFPLE1BQUssR0FBWixFQUFnQixXQUFXLEdBQTNCO0FBQ0UseUJBQUMsS0FBRCxJQUFPLE1BQUssV0FBWixFQUF3QixXQUFXLFNBQW5DLEdBREY7QUFFRSx5QkFBQyxLQUFELElBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVcsSUFBOUI7QUFGRjtBQURGLEVBREYsRUFPRyxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FQSCxFIiwiZmlsZSI6ImNvbmZpcm1pbmctbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5LCBSb3V0ZXIsIFJvdXRlLCBMaW5rLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgd2l0aEV4YW1wbGVCYXNlbmFtZSBmcm9tICcuLi93aXRoRXhhbXBsZUJhc2VuYW1lJ1xuXG5jb25zdCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9kYXNoYm9hcmRcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5EYXNoYm9hcmQ8L0xpbms+PC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvZm9ybVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPkZvcm08L0xpbms+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IERhc2hib2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDE+RGFzaGJvYXJkPC9oMT5cbiAgfVxufSlcblxuY29uc3QgRm9ybSA9IHdpdGhSb3V0ZXIoXG4gIFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMucm91dGVyLnNldFJvdXRlTGVhdmVIb29rKFxuICAgICAgICB0aGlzLnByb3BzLnJvdXRlLFxuICAgICAgICB0aGlzLnJvdXRlcldpbGxMZWF2ZVxuICAgICAgKVxuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0VmFsdWU6ICdvaGFpJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByb3V0ZXJXaWxsTGVhdmUoKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS50ZXh0VmFsdWUpXG4gICAgICAgIHJldHVybiAnWW91IGhhdmUgdW5zYXZlZCBpbmZvcm1hdGlvbiwgYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxlYXZlIHRoaXMgcGFnZT8nXG4gICAgfSxcblxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRleHRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRleHRWYWx1ZTogJydcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnLycpXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8cD5DbGljayB0aGUgZGFzaGJvYXJkIGxpbmsgd2l0aCB0ZXh0IGluIHRoZSBpbnB1dC48L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJ1c2VySW5wdXRcIiB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0VmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkdvPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH0pXG4pXG5cbnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17d2l0aEV4YW1wbGVCYXNlbmFtZShicm93c2VySGlzdG9yeSwgX19kaXJuYW1lKX0+XG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgPFJvdXRlIHBhdGg9XCJkYXNoYm9hcmRcIiBjb21wb25lbnQ9e0Rhc2hib2FyZH0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiZm9ybVwiIGNvbXBvbmVudD17Rm9ybX0gLz5cbiAgICA8L1JvdXRlPlxuICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJykpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbmZpcm1pbmctbmF2aWdhdGlvbi9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9