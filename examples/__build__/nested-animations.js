webpackJsonp([10,16],[
/* 0 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {import React from 'react';
	import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
	import { render } from 'react-dom';
	import { browserHistory, Router, Route, Link } from 'react-router';
	
	import withExampleBasename from '../withExampleBasename';
	
	import './app.css';
	
	const App = ({ children, location: { pathname } }) => {
	  // Only take the first-level part of the path as key, instead of the whole path.
	  const key = pathname.split('/')[1] || 'root';
	
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
	        component: 'div', transitionName: 'swap',
	        transitionEnterTimeout: 500, transitionLeaveTimeout: 500
	      },
	      React.cloneElement(children || React.createElement('div', null), { key })
	    )
	  );
	};
	
	const Page1 = ({ children, location: { pathname } }) => React.createElement(
	  'div',
	  { className: 'Image' },
	  React.createElement(
	    'h1',
	    null,
	    'Page 1'
	  ),
	  React.createElement(
	    'ul',
	    null,
	    React.createElement(
	      'li',
	      null,
	      React.createElement(
	        Link,
	        { to: '/page1/tab1' },
	        'Tab 1'
	      )
	    ),
	    React.createElement(
	      'li',
	      null,
	      React.createElement(
	        Link,
	        { to: '/page1/tab2' },
	        'Tab 2'
	      )
	    )
	  ),
	  React.createElement(
	    ReactCSSTransitionGroup,
	    {
	      component: 'div', transitionName: 'example',
	      transitionEnterTimeout: 500, transitionLeaveTimeout: 500
	    },
	    React.cloneElement(children || React.createElement('div', null), { key: pathname })
	  )
	);
	
	const Page2 = ({ children, location: { pathname } }) => React.createElement(
	  'div',
	  { className: 'Image' },
	  React.createElement(
	    'h1',
	    null,
	    'Page 2'
	  ),
	  React.createElement(
	    'ul',
	    null,
	    React.createElement(
	      'li',
	      null,
	      React.createElement(
	        Link,
	        { to: '/page2/tab1' },
	        'Tab 1'
	      )
	    ),
	    React.createElement(
	      'li',
	      null,
	      React.createElement(
	        Link,
	        { to: '/page2/tab2' },
	        'Tab 2'
	      )
	    )
	  ),
	  React.createElement(
	    ReactCSSTransitionGroup,
	    {
	      component: 'div', transitionName: 'example',
	      transitionEnterTimeout: 500, transitionLeaveTimeout: 500
	    },
	    React.cloneElement(children || React.createElement('div', null), { key: pathname })
	  )
	);
	
	const Tab1 = () => React.createElement(
	  'div',
	  { className: 'Image' },
	  React.createElement(
	    'h2',
	    null,
	    'Tab 1'
	  ),
	  React.createElement(
	    'p',
	    null,
	    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	  )
	);
	
	const Tab2 = () => React.createElement(
	  'div',
	  { className: 'Image' },
	  React.createElement(
	    'h2',
	    null,
	    'Tab 2'
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
	    React.createElement(
	      Route,
	      { path: 'page1', component: Page1 },
	      React.createElement(Route, { path: 'tab1', component: Tab1 }),
	      React.createElement(Route, { path: 'tab2', component: Tab2 })
	    ),
	    React.createElement(
	      Route,
	      { path: 'page2', component: Page2 },
	      React.createElement(Route, { path: 'tab1', component: Tab1 }),
	      React.createElement(Route, { path: 'tab2', component: Tab2 })
	    )
	  )
	), document.getElementById('example'));
	/* WEBPACK VAR INJECTION */}.call(exports, "nested-animations"))

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9uZXN0ZWQtYW5pbWF0aW9ucy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHlEQUFPLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxRQUFPLHVCQUFQLE1BQW9DLG1DQUFwQztBQUNBLFVBQVMsTUFBVCxRQUF1QixXQUF2QjtBQUNBLFVBQVMsY0FBVCxFQUF5QixNQUF6QixFQUFpQyxLQUFqQyxFQUF3QyxJQUF4QyxRQUFvRCxjQUFwRDs7QUFFQSxRQUFPLG1CQUFQLE1BQWdDLHdCQUFoQzs7QUFFQSxRQUFPLFdBQVA7O0FBRUEsT0FBTSxNQUFNLENBQUMsRUFBRSxRQUFGLEVBQVksVUFBVSxFQUFFLFFBQUYsRUFBdEIsRUFBRCxLQUEwQztBQUNwRDtBQUNBLFNBQU0sTUFBTSxTQUFTLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLENBQXBCLEtBQTBCLE1BQXRDOztBQUVBLFVBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQyxlQUFEO0FBQUEsYUFBTSxJQUFHLFFBQVQ7QUFBQTtBQUFBO0FBQUosUUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUMsZUFBRDtBQUFBLGFBQU0sSUFBRyxRQUFUO0FBQUE7QUFBQTtBQUFKO0FBRkYsTUFERjtBQUtFO0FBQUMsOEJBQUQ7QUFBQTtBQUNFLG9CQUFVLEtBRFosRUFDa0IsZ0JBQWUsTUFEakM7QUFFRSxpQ0FBd0IsR0FGMUIsRUFFK0Isd0JBQXdCO0FBRnZEO0FBSUcsYUFBTSxZQUFOLENBQW1CLFlBQVksZ0NBQS9CLEVBQXdDLEVBQUUsR0FBRixFQUF4QztBQUpIO0FBTEYsSUFERjtBQWNELEVBbEJEOztBQW9CQSxPQUFNLFFBQVEsQ0FBQyxFQUFFLFFBQUYsRUFBWSxVQUFVLEVBQUUsUUFBRixFQUF0QixFQUFELEtBQ1o7QUFBQTtBQUFBLEtBQUssV0FBVSxPQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQyxhQUFEO0FBQUEsV0FBTSxJQUFHLGFBQVQ7QUFBQTtBQUFBO0FBQUosTUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUMsYUFBRDtBQUFBLFdBQU0sSUFBRyxhQUFUO0FBQUE7QUFBQTtBQUFKO0FBRkYsSUFGRjtBQU1FO0FBQUMsNEJBQUQ7QUFBQTtBQUNFLGtCQUFVLEtBRFosRUFDa0IsZ0JBQWUsU0FEakM7QUFFRSwrQkFBd0IsR0FGMUIsRUFFK0Isd0JBQXdCO0FBRnZEO0FBSUcsV0FBTSxZQUFOLENBQW1CLFlBQVksZ0NBQS9CLEVBQXVDLEVBQUUsS0FBSyxRQUFQLEVBQXZDO0FBSkg7QUFORixFQURGOztBQWdCQSxPQUFNLFFBQVEsQ0FBQyxFQUFFLFFBQUYsRUFBWSxVQUFVLEVBQUUsUUFBRixFQUF0QixFQUFELEtBQ1o7QUFBQTtBQUFBLEtBQUssV0FBVSxPQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQyxhQUFEO0FBQUEsV0FBTSxJQUFHLGFBQVQ7QUFBQTtBQUFBO0FBQUosTUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUMsYUFBRDtBQUFBLFdBQU0sSUFBRyxhQUFUO0FBQUE7QUFBQTtBQUFKO0FBRkYsSUFGRjtBQU1FO0FBQUMsNEJBQUQ7QUFBQTtBQUNFLGtCQUFVLEtBRFosRUFDa0IsZ0JBQWUsU0FEakM7QUFFRSwrQkFBd0IsR0FGMUIsRUFFK0Isd0JBQXdCO0FBRnZEO0FBSUcsV0FBTSxZQUFOLENBQW1CLFlBQVksZ0NBQS9CLEVBQXVDLEVBQUUsS0FBSyxRQUFQLEVBQXZDO0FBSkg7QUFORixFQURGOztBQWdCQSxPQUFNLE9BQU8sTUFDWDtBQUFBO0FBQUEsS0FBSyxXQUFVLE9BQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsRUFERjs7QUFPQSxPQUFNLE9BQU8sTUFDWDtBQUFBO0FBQUEsS0FBSyxXQUFVLE9BQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsRUFERjs7QUFPQSxRQUNFO0FBQUMsU0FBRDtBQUFBLEtBQVEsU0FBUyxvQkFBb0IsY0FBcEIsRUFBb0MsU0FBcEMsQ0FBakI7QUFDRTtBQUFDLFVBQUQ7QUFBQSxPQUFPLE1BQUssR0FBWixFQUFnQixXQUFXLEdBQTNCO0FBQ0U7QUFBQyxZQUFEO0FBQUEsU0FBTyxNQUFLLE9BQVosRUFBb0IsV0FBVyxLQUEvQjtBQUNFLDJCQUFDLEtBQUQsSUFBTyxNQUFLLE1BQVosRUFBbUIsV0FBVyxJQUE5QixHQURGO0FBRUUsMkJBQUMsS0FBRCxJQUFPLE1BQUssTUFBWixFQUFtQixXQUFXLElBQTlCO0FBRkYsTUFERjtBQUtFO0FBQUMsWUFBRDtBQUFBLFNBQU8sTUFBSyxPQUFaLEVBQW9CLFdBQVcsS0FBL0I7QUFDRSwyQkFBQyxLQUFELElBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVcsSUFBOUIsR0FERjtBQUVFLDJCQUFDLEtBQUQsSUFBTyxNQUFLLE1BQVosRUFBbUIsV0FBVyxJQUE5QjtBQUZGO0FBTEY7QUFERixFQURGLEVBYUcsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBYkgsRSIsImZpbGUiOiJuZXN0ZWQtYW5pbWF0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyLCBSb3V0ZSwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHdpdGhFeGFtcGxlQmFzZW5hbWUgZnJvbSAnLi4vd2l0aEV4YW1wbGVCYXNlbmFtZSdcblxuaW1wb3J0ICcuL2FwcC5jc3MnXG5cbmNvbnN0IEFwcCA9ICh7IGNoaWxkcmVuLCBsb2NhdGlvbjogeyBwYXRobmFtZSB9IH0pID0+IHtcbiAgLy8gT25seSB0YWtlIHRoZSBmaXJzdC1sZXZlbCBwYXJ0IG9mIHRoZSBwYXRoIGFzIGtleSwgaW5zdGVhZCBvZiB0aGUgd2hvbGUgcGF0aC5cbiAgY29uc3Qga2V5ID0gcGF0aG5hbWUuc3BsaXQoJy8nKVsxXSB8fCAncm9vdCdcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT48TGluayB0bz1cIi9wYWdlMVwiPlBhZ2UgMTwvTGluaz48L2xpPlxuICAgICAgICA8bGk+PExpbmsgdG89XCIvcGFnZTJcIj5QYWdlIDI8L0xpbms+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgY29tcG9uZW50PVwiZGl2XCIgdHJhbnNpdGlvbk5hbWU9XCJzd2FwXCJcbiAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17NTAwfSB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXs1MDB9XG4gICAgICA+XG4gICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4gfHwgPGRpdiAvPiwgeyBrZXkgfSl9XG4gICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IFBhZ2UxID0gKHsgY2hpbGRyZW4sIGxvY2F0aW9uOiB7IHBhdGhuYW1lIH0gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlXCI+XG4gICAgPGgxPlBhZ2UgMTwvaDE+XG4gICAgPHVsPlxuICAgICAgPGxpPjxMaW5rIHRvPVwiL3BhZ2UxL3RhYjFcIj5UYWIgMTwvTGluaz48L2xpPlxuICAgICAgPGxpPjxMaW5rIHRvPVwiL3BhZ2UxL3RhYjJcIj5UYWIgMjwvTGluaz48L2xpPlxuICAgIDwvdWw+XG4gICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwXG4gICAgICBjb21wb25lbnQ9XCJkaXZcIiB0cmFuc2l0aW9uTmFtZT1cImV4YW1wbGVcIlxuICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17NTAwfSB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXs1MDB9XG4gICAgPlxuICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiB8fCA8ZGl2Lz4sIHsga2V5OiBwYXRobmFtZSB9KX1cbiAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuICA8L2Rpdj5cbilcblxuY29uc3QgUGFnZTIgPSAoeyBjaGlsZHJlbiwgbG9jYXRpb246IHsgcGF0aG5hbWUgfSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VcIj5cbiAgICA8aDE+UGFnZSAyPC9oMT5cbiAgICA8dWw+XG4gICAgICA8bGk+PExpbmsgdG89XCIvcGFnZTIvdGFiMVwiPlRhYiAxPC9MaW5rPjwvbGk+XG4gICAgICA8bGk+PExpbmsgdG89XCIvcGFnZTIvdGFiMlwiPlRhYiAyPC9MaW5rPjwvbGk+XG4gICAgPC91bD5cbiAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgIGNvbXBvbmVudD1cImRpdlwiIHRyYW5zaXRpb25OYW1lPVwiZXhhbXBsZVwiXG4gICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXs1MDB9IHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezUwMH1cbiAgICA+XG4gICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuIHx8IDxkaXYvPiwgeyBrZXk6IHBhdGhuYW1lIH0pfVxuICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA+XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBUYWIxID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlXCI+XG4gICAgPGgyPlRhYiAxPC9oMj5cbiAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLjwvcD5cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IFRhYjIgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VcIj5cbiAgICA8aDI+VGFiIDI8L2gyPlxuICAgIDxwPkNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS48L3A+XG4gIDwvZGl2PlxuKVxuXG5yZW5kZXIoKFxuICA8Um91dGVyIGhpc3Rvcnk9e3dpdGhFeGFtcGxlQmFzZW5hbWUoYnJvd3Nlckhpc3RvcnksIF9fZGlybmFtZSl9PlxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfT5cbiAgICAgIDxSb3V0ZSBwYXRoPVwicGFnZTFcIiBjb21wb25lbnQ9e1BhZ2UxfT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJ0YWIxXCIgY29tcG9uZW50PXtUYWIxfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cInRhYjJcIiBjb21wb25lbnQ9e1RhYjJ9IC8+XG4gICAgICA8L1JvdXRlPlxuICAgICAgPFJvdXRlIHBhdGg9XCJwYWdlMlwiIGNvbXBvbmVudD17UGFnZTJ9PlxuICAgICAgICA8Um91dGUgcGF0aD1cInRhYjFcIiBjb21wb25lbnQ9e1RhYjF9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwidGFiMlwiIGNvbXBvbmVudD17VGFiMn0gLz5cbiAgICAgIDwvUm91dGU+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9uZXN0ZWQtYW5pbWF0aW9ucy9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9