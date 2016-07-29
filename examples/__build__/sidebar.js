webpackJsonp([15,16],[
/* 0 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {import React from 'react';
	import { render } from 'react-dom';
	import { browserHistory, Router, Route, Link } from 'react-router';
	
	import withExampleBasename from '../withExampleBasename';
	import data from './data';
	
	import './app.css';
	
	const Category = ({ children, params }) => {
	  const category = data.lookupCategory(params.category);
	
	  return React.createElement(
	    'div',
	    null,
	    React.createElement(
	      'h1',
	      null,
	      category.name
	    ),
	    children || React.createElement(
	      'p',
	      null,
	      category.description
	    )
	  );
	};
	
	const CategorySidebar = ({ params }) => {
	  const category = data.lookupCategory(params.category);
	
	  return React.createElement(
	    'div',
	    null,
	    React.createElement(
	      Link,
	      { to: '/' },
	      '◀︎ Back'
	    ),
	    React.createElement(
	      'h2',
	      null,
	      category.name,
	      ' Items'
	    ),
	    React.createElement(
	      'ul',
	      null,
	      category.items.map((item, index) => React.createElement(
	        'li',
	        { key: index },
	        React.createElement(
	          Link,
	          { to: `/category/${ category.name }/${ item.name }` },
	          item.name
	        )
	      ))
	    )
	  );
	};
	
	const Item = ({ params: { category, item } }) => {
	  const menuItem = data.lookupItem(category, item);
	
	  return React.createElement(
	    'div',
	    null,
	    React.createElement(
	      'h1',
	      null,
	      menuItem.name
	    ),
	    React.createElement(
	      'p',
	      null,
	      '$',
	      menuItem.price
	    )
	  );
	};
	
	const Index = () => React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'h1',
	    null,
	    'Sidebar'
	  ),
	  React.createElement(
	    'p',
	    null,
	    'Routes can have multiple components, so that all portions of your UI can participate in the routing.'
	  )
	);
	
	const IndexSidebar = () => React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'h2',
	    null,
	    'Categories'
	  ),
	  React.createElement(
	    'ul',
	    null,
	    data.getAll().map((category, index) => React.createElement(
	      'li',
	      { key: index },
	      React.createElement(
	        Link,
	        { to: `/category/${ category.name }` },
	        category.name
	      )
	    ))
	  )
	);
	
	const App = ({ content, sidebar }) => React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'div',
	    { className: 'Sidebar' },
	    sidebar || React.createElement(IndexSidebar, null)
	  ),
	  React.createElement(
	    'div',
	    { className: 'Content' },
	    content || React.createElement(Index, null)
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
	      { path: 'category/:category', components: { content: Category, sidebar: CategorySidebar } },
	      React.createElement(Route, { path: ':item', component: Item })
	    )
	  )
	), document.getElementById('example'));
	/* WEBPACK VAR INJECTION */}.call(exports, "sidebar"))

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaWRlYmFyL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEseURBQU8sS0FBUCxNQUFrQixPQUFsQjtBQUNBLFVBQVMsTUFBVCxRQUF1QixXQUF2QjtBQUNBLFVBQVMsY0FBVCxFQUF5QixNQUF6QixFQUFpQyxLQUFqQyxFQUF3QyxJQUF4QyxRQUFvRCxjQUFwRDs7QUFFQSxRQUFPLG1CQUFQLE1BQWdDLHdCQUFoQztBQUNBLFFBQU8sSUFBUCxNQUFpQixRQUFqQjs7QUFFQSxRQUFPLFdBQVA7O0FBRUEsT0FBTSxXQUFXLENBQUMsRUFBRSxRQUFGLEVBQVksTUFBWixFQUFELEtBQTBCO0FBQ3pDLFNBQU0sV0FBVyxLQUFLLGNBQUwsQ0FBb0IsT0FBTyxRQUEzQixDQUFqQjs7QUFFQSxVQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLLGdCQUFTO0FBQWQsTUFERjtBQUVHLGlCQUNDO0FBQUE7QUFBQTtBQUFJLGdCQUFTO0FBQWI7QUFISixJQURGO0FBUUQsRUFYRDs7QUFhQSxPQUFNLGtCQUFrQixDQUFDLEVBQUUsTUFBRixFQUFELEtBQWdCO0FBQ3RDLFNBQU0sV0FBVyxLQUFLLGNBQUwsQ0FBb0IsT0FBTyxRQUEzQixDQUFqQjs7QUFFQSxVQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsV0FBRDtBQUFBLFNBQU0sSUFBRyxHQUFUO0FBQUE7QUFBQSxNQURGO0FBRUU7QUFBQTtBQUFBO0FBQUssZ0JBQVMsSUFBZDtBQUFBO0FBQUEsTUFGRjtBQUdFO0FBQUE7QUFBQTtBQUNHLGdCQUFTLEtBQVQsQ0FBZSxHQUFmLENBQW1CLENBQUMsSUFBRCxFQUFPLEtBQVAsS0FDbEI7QUFBQTtBQUFBLFdBQUksS0FBSyxLQUFUO0FBQ0U7QUFBQyxlQUFEO0FBQUEsYUFBTSxJQUFLLGNBQVksU0FBUyxJQUFLLE1BQUcsS0FBSyxJQUFLLEdBQWxEO0FBQXNELGdCQUFLO0FBQTNEO0FBREYsUUFERDtBQURIO0FBSEYsSUFERjtBQWFELEVBaEJEOztBQWtCQSxPQUFNLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFGLEVBQVksSUFBWixFQUFWLEVBQUQsS0FBb0M7QUFDL0MsU0FBTSxXQUFXLEtBQUssVUFBTCxDQUFnQixRQUFoQixFQUEwQixJQUExQixDQUFqQjs7QUFFQSxVQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLLGdCQUFTO0FBQWQsTUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUssZ0JBQVM7QUFBZDtBQUZGLElBREY7QUFNRCxFQVREOztBQVdBLE9BQU0sUUFBUSxNQUNaO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixFQURGOztBQVVBLE9BQU0sZUFBZSxNQUNuQjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFFRTtBQUFBO0FBQUE7QUFDRyxVQUFLLE1BQUwsR0FBYyxHQUFkLENBQWtCLENBQUMsUUFBRCxFQUFXLEtBQVgsS0FDakI7QUFBQTtBQUFBLFNBQUksS0FBSyxLQUFUO0FBQ0U7QUFBQyxhQUFEO0FBQUEsV0FBTSxJQUFLLGNBQVksU0FBUyxJQUFLLEdBQXJDO0FBQXlDLGtCQUFTO0FBQWxEO0FBREYsTUFERDtBQURIO0FBRkYsRUFERjs7QUFhQSxPQUFNLE1BQU0sQ0FBQyxFQUFFLE9BQUYsRUFBVyxPQUFYLEVBQUQsS0FDVjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsT0FBSyxXQUFVLFNBQWY7QUFDRyxnQkFBVyxvQkFBQyxZQUFEO0FBRGQsSUFERjtBQUlFO0FBQUE7QUFBQSxPQUFLLFdBQVUsU0FBZjtBQUNHLGdCQUFXLG9CQUFDLEtBQUQ7QUFEZDtBQUpGLEVBREY7O0FBV0EsUUFDRTtBQUFDLFNBQUQ7QUFBQSxLQUFRLFNBQVMsb0JBQW9CLGNBQXBCLEVBQW9DLFNBQXBDLENBQWpCO0FBQ0U7QUFBQyxVQUFEO0FBQUEsT0FBTyxNQUFLLEdBQVosRUFBZ0IsV0FBVyxHQUEzQjtBQUNFO0FBQUMsWUFBRDtBQUFBLFNBQU8sTUFBSyxvQkFBWixFQUFpQyxZQUFZLEVBQUUsU0FBUyxRQUFYLEVBQXFCLFNBQVMsZUFBOUIsRUFBN0M7QUFDRSwyQkFBQyxLQUFELElBQU8sTUFBSyxPQUFaLEVBQW9CLFdBQVcsSUFBL0I7QUFERjtBQURGO0FBREYsRUFERixFQVFHLFNBQVMsY0FBVCxDQUF3QixTQUF4QixDQVJILEUiLCJmaWxlIjoic2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5LCBSb3V0ZXIsIFJvdXRlLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgd2l0aEV4YW1wbGVCYXNlbmFtZSBmcm9tICcuLi93aXRoRXhhbXBsZUJhc2VuYW1lJ1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhJ1xuXG5pbXBvcnQgJy4vYXBwLmNzcydcblxuY29uc3QgQ2F0ZWdvcnkgPSAoeyBjaGlsZHJlbiwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgY2F0ZWdvcnkgPSBkYXRhLmxvb2t1cENhdGVnb3J5KHBhcmFtcy5jYXRlZ29yeSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e2NhdGVnb3J5Lm5hbWV9PC9oMT5cbiAgICAgIHtjaGlsZHJlbiB8fCAoXG4gICAgICAgIDxwPntjYXRlZ29yeS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IENhdGVnb3J5U2lkZWJhciA9ICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gZGF0YS5sb29rdXBDYXRlZ29yeShwYXJhbXMuY2F0ZWdvcnkpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPExpbmsgdG89XCIvXCI+4peA77iOIEJhY2s8L0xpbms+XG4gICAgICA8aDI+e2NhdGVnb3J5Lm5hbWV9IEl0ZW1zPC9oMj5cbiAgICAgIDx1bD5cbiAgICAgICAge2NhdGVnb3J5Lml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8TGluayB0bz17YC9jYXRlZ29yeS8ke2NhdGVnb3J5Lm5hbWV9LyR7aXRlbS5uYW1lfWB9PntpdGVtLm5hbWV9PC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBJdGVtID0gKHsgcGFyYW1zOiB7IGNhdGVnb3J5LCBpdGVtIH0gfSkgPT4ge1xuICBjb25zdCBtZW51SXRlbSA9IGRhdGEubG9va3VwSXRlbShjYXRlZ29yeSwgaXRlbSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e21lbnVJdGVtLm5hbWV9PC9oMT5cbiAgICAgIDxwPiR7bWVudUl0ZW0ucHJpY2V9PC9wPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxoMT5TaWRlYmFyPC9oMT5cbiAgICA8cD5cbiAgICAgIFJvdXRlcyBjYW4gaGF2ZSBtdWx0aXBsZSBjb21wb25lbnRzLCBzbyB0aGF0IGFsbCBwb3J0aW9ucyBvZiB5b3VyIFVJXG4gICAgICBjYW4gcGFydGljaXBhdGUgaW4gdGhlIHJvdXRpbmcuXG4gICAgPC9wPlxuICA8L2Rpdj5cbilcblxuY29uc3QgSW5kZXhTaWRlYmFyID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxoMj5DYXRlZ29yaWVzPC9oMj5cbiAgICA8dWw+XG4gICAgICB7ZGF0YS5nZXRBbGwoKS5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxuICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgPExpbmsgdG89e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5uYW1lfWB9PntjYXRlZ29yeS5uYW1lfTwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBBcHAgPSAoeyBjb250ZW50LCBzaWRlYmFyIH0pID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpZGViYXJcIj5cbiAgICAgIHtzaWRlYmFyIHx8IDxJbmRleFNpZGViYXIgLz59XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJDb250ZW50XCI+XG4gICAgICB7Y29udGVudCB8fCA8SW5kZXggLz59XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKVxuXG5yZW5kZXIoKFxuICA8Um91dGVyIGhpc3Rvcnk9e3dpdGhFeGFtcGxlQmFzZW5hbWUoYnJvd3Nlckhpc3RvcnksIF9fZGlybmFtZSl9PlxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfT5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiY2F0ZWdvcnkvOmNhdGVnb3J5XCIgY29tcG9uZW50cz17eyBjb250ZW50OiBDYXRlZ29yeSwgc2lkZWJhcjogQ2F0ZWdvcnlTaWRlYmFyIH19PlxuICAgICAgICA8Um91dGUgcGF0aD1cIjppdGVtXCIgY29tcG9uZW50PXtJdGVtfSAvPlxuICAgICAgPC9Sb3V0ZT5cbiAgICA8L1JvdXRlPlxuICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJykpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NpZGViYXIvYXBwLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==