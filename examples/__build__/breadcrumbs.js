webpackJsonp([5,16],[
/* 0 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {import React from 'react';
	import { render } from 'react-dom';
	import { browserHistory, Router, Route, Link } from 'react-router';
	
	import withExampleBasename from '../withExampleBasename';
	
	import './app.css';
	
	const App = ({ children, routes }) => {
	  const depth = routes.length;
	
	  return React.createElement(
	    'div',
	    null,
	    React.createElement(
	      'aside',
	      null,
	      React.createElement(
	        'ul',
	        null,
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            Link,
	            { to: Products.path },
	            'Products'
	          )
	        ),
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            Link,
	            { to: Orders.path },
	            'Orders'
	          )
	        )
	      )
	    ),
	    React.createElement(
	      'main',
	      null,
	      React.createElement(
	        'ul',
	        { className: 'breadcrumbs-list' },
	        routes.map((item, index) => React.createElement(
	          'li',
	          { key: index },
	          React.createElement(
	            Link,
	            {
	              onlyActiveOnIndex: true,
	              activeClassName: 'breadcrumb-active',
	              to: item.path || '' },
	            item.component.title
	          ),
	          index + 1 < depth && '\u2192'
	        ))
	      ),
	      children
	    )
	  );
	};
	
	App.title = 'Home';
	App.path = '/';
	
	const Products = () => React.createElement(
	  'div',
	  { className: 'Page' },
	  React.createElement(
	    'h1',
	    null,
	    'Products'
	  )
	);
	
	Products.title = 'Products';
	Products.path = '/products';
	
	const Orders = () => React.createElement(
	  'div',
	  { className: 'Page' },
	  React.createElement(
	    'h1',
	    null,
	    'Orders'
	  )
	);
	
	Orders.title = 'Orders';
	Orders.path = '/orders';
	
	render(React.createElement(
	  Router,
	  { history: withExampleBasename(browserHistory, __dirname) },
	  React.createElement(
	    Route,
	    { path: App.path, component: App },
	    React.createElement(Route, { path: Products.path, component: Products }),
	    React.createElement(Route, { path: Orders.path, component: Orders })
	  )
	), document.getElementById('example'));
	/* WEBPACK VAR INJECTION */}.call(exports, "breadcrumbs"))

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9icmVhZGNydW1icy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHlEQUFPLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxVQUFTLE1BQVQsUUFBdUIsV0FBdkI7QUFDQSxVQUFTLGNBQVQsRUFBeUIsTUFBekIsRUFBaUMsS0FBakMsRUFBd0MsSUFBeEMsUUFBb0QsY0FBcEQ7O0FBRUEsUUFBTyxtQkFBUCxNQUFnQyx3QkFBaEM7O0FBRUEsUUFBTyxXQUFQOztBQUVBLE9BQU0sTUFBTSxDQUFDLEVBQUUsUUFBRixFQUFZLE1BQVosRUFBRCxLQUEwQjtBQUNwQyxTQUFNLFFBQVEsT0FBTyxNQUFyQjs7QUFFQSxVQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUMsaUJBQUQ7QUFBQSxlQUFNLElBQUksU0FBUyxJQUFuQjtBQUFBO0FBQUE7QUFBSixVQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQyxpQkFBRDtBQUFBLGVBQU0sSUFBSSxPQUFPLElBQWpCO0FBQUE7QUFBQTtBQUFKO0FBRkY7QUFERixNQURGO0FBT0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFdBQUksV0FBVSxrQkFBZDtBQUNHLGdCQUFPLEdBQVAsQ0FBVyxDQUFDLElBQUQsRUFBTyxLQUFQLEtBQ1Y7QUFBQTtBQUFBLGFBQUksS0FBSyxLQUFUO0FBQ0U7QUFBQyxpQkFBRDtBQUFBO0FBQ0Usa0NBQW1CLElBRHJCO0FBRUUsZ0NBQWdCLG1CQUZsQjtBQUdFLG1CQUFJLEtBQUssSUFBTCxJQUFhLEVBSG5CO0FBSUcsa0JBQUssU0FBTCxDQUFlO0FBSmxCLFlBREY7QUFPSSxtQkFBUSxDQUFULEdBQWMsS0FBZCxJQUF1QjtBQVAxQixVQUREO0FBREgsUUFERjtBQWNHO0FBZEg7QUFQRixJQURGO0FBMEJELEVBN0JEOztBQStCQSxLQUFJLEtBQUosR0FBWSxNQUFaO0FBQ0EsS0FBSSxJQUFKLEdBQVcsR0FBWDs7QUFHQSxPQUFNLFdBQVcsTUFDZjtBQUFBO0FBQUEsS0FBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsRUFERjs7QUFNQSxVQUFTLEtBQVQsR0FBaUIsVUFBakI7QUFDQSxVQUFTLElBQVQsR0FBZ0IsV0FBaEI7O0FBRUEsT0FBTSxTQUFTLE1BQ2I7QUFBQTtBQUFBLEtBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLEVBREY7O0FBTUEsUUFBTyxLQUFQLEdBQWUsUUFBZjtBQUNBLFFBQU8sSUFBUCxHQUFjLFNBQWQ7O0FBRUEsUUFDRTtBQUFDLFNBQUQ7QUFBQSxLQUFRLFNBQVMsb0JBQW9CLGNBQXBCLEVBQW9DLFNBQXBDLENBQWpCO0FBQ0U7QUFBQyxVQUFEO0FBQUEsT0FBTyxNQUFNLElBQUksSUFBakIsRUFBdUIsV0FBVyxHQUFsQztBQUNFLHlCQUFDLEtBQUQsSUFBTyxNQUFNLFNBQVMsSUFBdEIsRUFBNEIsV0FBVyxRQUF2QyxHQURGO0FBRUUseUJBQUMsS0FBRCxJQUFPLE1BQU0sT0FBTyxJQUFwQixFQUEwQixXQUFXLE1BQXJDO0FBRkY7QUFERixFQURGLEVBT0csU0FBUyxjQUFULENBQXdCLFNBQXhCLENBUEgsRSIsImZpbGUiOiJicmVhZGNydW1icy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5LCBSb3V0ZXIsIFJvdXRlLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgd2l0aEV4YW1wbGVCYXNlbmFtZSBmcm9tICcuLi93aXRoRXhhbXBsZUJhc2VuYW1lJ1xuXG5pbXBvcnQgJy4vYXBwLmNzcydcblxuY29uc3QgQXBwID0gKHsgY2hpbGRyZW4sIHJvdXRlcyB9KSA9PiB7XG4gIGNvbnN0IGRlcHRoID0gcm91dGVzLmxlbmd0aFxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxhc2lkZT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT48TGluayB0bz17UHJvZHVjdHMucGF0aH0+UHJvZHVjdHM8L0xpbms+PC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgdG89e09yZGVycy5wYXRofT5PcmRlcnM8L0xpbms+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvYXNpZGU+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJzLWxpc3RcIj5cbiAgICAgICAgICB7cm91dGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+XG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgb25seUFjdGl2ZU9uSW5kZXg9e3RydWV9XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1hY3RpdmVcIlxuICAgICAgICAgICAgICAgIHRvPXtpdGVtLnBhdGggfHwgJyd9PlxuICAgICAgICAgICAgICAgIHtpdGVtLmNvbXBvbmVudC50aXRsZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICB7KGluZGV4ICsgMSkgPCBkZXB0aCAmJiAnXFx1MjE5Mid9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5BcHAudGl0bGUgPSAnSG9tZSdcbkFwcC5wYXRoID0gJy8nXG5cblxuY29uc3QgUHJvZHVjdHMgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiUGFnZVwiPlxuICAgIDxoMT5Qcm9kdWN0czwvaDE+XG4gIDwvZGl2PlxuKVxuXG5Qcm9kdWN0cy50aXRsZSA9ICdQcm9kdWN0cydcblByb2R1Y3RzLnBhdGggPSAnL3Byb2R1Y3RzJ1xuXG5jb25zdCBPcmRlcnMgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiUGFnZVwiPlxuICAgIDxoMT5PcmRlcnM8L2gxPlxuICA8L2Rpdj5cbilcblxuT3JkZXJzLnRpdGxlID0gJ09yZGVycydcbk9yZGVycy5wYXRoID0gJy9vcmRlcnMnXG5cbnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17d2l0aEV4YW1wbGVCYXNlbmFtZShicm93c2VySGlzdG9yeSwgX19kaXJuYW1lKX0+XG4gICAgPFJvdXRlIHBhdGg9e0FwcC5wYXRofSBjb21wb25lbnQ9e0FwcH0+XG4gICAgICA8Um91dGUgcGF0aD17UHJvZHVjdHMucGF0aH0gY29tcG9uZW50PXtQcm9kdWN0c30gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPXtPcmRlcnMucGF0aH0gY29tcG9uZW50PXtPcmRlcnN9IC8+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9icmVhZGNydW1icy9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9