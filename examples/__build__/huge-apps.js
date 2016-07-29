webpackJsonp([8,16],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {import React from 'react';
	import { render } from 'react-dom';
	import { Router, browserHistory } from 'react-router';
	
	import withExampleBasename from '../withExampleBasename';
	import './stubs/COURSES';
	
	const rootRoute = {
	  childRoutes: [{
	    path: '/',
	    component: __webpack_require__(1),
	    childRoutes: [__webpack_require__(2), __webpack_require__(3), __webpack_require__(4), __webpack_require__(5), __webpack_require__(6)]
	  }]
	};
	
	render(React.createElement(Router, {
	  history: withExampleBasename(browserHistory, __dirname),
	  routes: rootRoute
	}), document.getElementById('example'));
	
	// I've unrolled the recursive directory loop that is happening above to get a
	// better idea of just what this huge-apps Router looks like, or just look at the
	// file system :)
	//
	// import { Route } from 'react-router'
	
	// import App from './components/App'
	// import Course from './routes/Course/components/Course'
	// import AnnouncementsSidebar from './routes/Course/routes/Announcements/components/Sidebar'
	// import Announcements from './routes/Course/routes/Announcements/components/Announcements'
	// import Announcement from './routes/Course/routes/Announcements/routes/Announcement/components/Announcement'
	// import AssignmentsSidebar from './routes/Course/routes/Assignments/components/Sidebar'
	// import Assignments from './routes/Course/routes/Assignments/components/Assignments'
	// import Assignment from './routes/Course/routes/Assignments/routes/Assignment/components/Assignment'
	// import CourseGrades from './routes/Course/routes/Grades/components/Grades'
	// import Calendar from './routes/Calendar/components/Calendar'
	// import Grades from './routes/Grades/components/Grades'
	// import Messages from './routes/Messages/components/Messages'
	
	// render(
	//   <Router>
	//     <Route path="/" component={App}>
	//       <Route path="calendar" component={Calendar} />
	//       <Route path="course/:courseId" component={Course}>
	//         <Route path="announcements" components={{
	//           sidebar: AnnouncementsSidebar,
	//           main: Announcements
	//         }}>
	//           <Route path=":announcementId" component={Announcement} />
	//         </Route>
	//         <Route path="assignments" components={{
	//           sidebar: AssignmentsSidebar,
	//           main: Assignments
	//         }}>
	//           <Route path=":assignmentId" component={Assignment} />
	//         </Route>
	//         <Route path="grades" component={CourseGrades} />
	//       </Route>
	//       <Route path="grades" component={Grades} />
	//       <Route path="messages" component={Messages} />
	//       <Route path="profile" component={Calendar} />
	//     </Route>
	//   </Router>,
	//   document.getElementById('example')
	// )
	/* WEBPACK VAR INJECTION */}.call(exports, "huge-apps"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*globals COURSES:true */
	import React, { Component } from 'react';
	import Dashboard from './Dashboard';
	import GlobalNav from './GlobalNav';
	
	class App extends Component {
	  render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(GlobalNav, null),
	      React.createElement(
	        'div',
	        { style: { padding: 20 } },
	        this.props.children || React.createElement(Dashboard, { courses: COURSES })
	      )
	    );
	  }
	}
	
	module.exports = App;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  path: 'calendar',
	  getComponent(nextState, cb) {
	    !/* require.ensure */(require => {
	      cb(null, require('./components/Calendar'));
	    }(__webpack_require__));
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  path: 'course/:courseId',
	
	  getChildRoutes(partialNextState, cb) {
	    !/* require.ensure */(require => {
	      cb(null, [require('./routes/Announcements'), require('./routes/Assignments'), require('./routes/Grades')]);
	    }(__webpack_require__));
	  },
	
	  getComponent(nextState, cb) {
	    !/* require.ensure */(require => {
	      cb(null, require('./components/Course'));
	    }(__webpack_require__));
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  path: 'grades',
	  getComponent(nextState, cb) {
	    !/* require.ensure */(require => {
	      cb(null, require('./components/Grades'));
	    }(__webpack_require__));
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  path: 'messages',
	  getComponent(nextState, cb) {
	    !/* require.ensure */(require => {
	      cb(null, require('./components/Messages'));
	    }(__webpack_require__));
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  path: 'profile',
	  getComponent(nextState, cb) {
	    !/* require.ensure */(require => {
	      cb(null, require('./components/Profile'));
	    }(__webpack_require__));
	  }
	};

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9odWdlLWFwcHMvYXBwLmpzIiwid2VicGFjazovLy8uL2h1Z2UtYXBwcy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9odWdlLWFwcHMvcm91dGVzL0NhbGVuZGFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h1Z2UtYXBwcy9yb3V0ZXMvQ291cnNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h1Z2UtYXBwcy9yb3V0ZXMvR3JhZGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h1Z2UtYXBwcy9yb3V0ZXMvTWVzc2FnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHVnZS1hcHBzL3JvdXRlcy9Qcm9maWxlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx5REFBTyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsVUFBUyxNQUFULFFBQXVCLFdBQXZCO0FBQ0EsVUFBUyxNQUFULEVBQWlCLGNBQWpCLFFBQXVDLGNBQXZDOztBQUVBLFFBQU8sbUJBQVAsTUFBZ0Msd0JBQWhDO0FBQ0EsUUFBTyxpQkFBUDs7QUFFQSxPQUFNLFlBQVk7QUFDaEIsZ0JBQWEsQ0FBRTtBQUNiLFdBQU0sR0FETztBQUViLGdCQUFXLG9CQUFRLENBQVIsQ0FGRTtBQUdiLGtCQUFhLENBQ1gsb0JBQVEsQ0FBUixDQURXLEVBRVgsb0JBQVEsQ0FBUixDQUZXLEVBR1gsb0JBQVEsQ0FBUixDQUhXLEVBSVgsb0JBQVEsQ0FBUixDQUpXLEVBS1gsb0JBQVEsQ0FBUixDQUxXO0FBSEEsSUFBRjtBQURHLEVBQWxCOztBQWNBLFFBQ0Usb0JBQUMsTUFBRDtBQUNFLFlBQVMsb0JBQW9CLGNBQXBCLEVBQW9DLFNBQXBDLENBRFg7QUFFRSxXQUFRO0FBRlYsR0FERixFQUtHLFNBQVMsY0FBVCxDQUF3QixTQUF4QixDQUxIOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSzs7Ozs7OztBQ3hFQTtBQUNBLFFBQU8sS0FBUCxJQUFnQixTQUFoQixRQUFpQyxPQUFqQztBQUNBLFFBQU8sU0FBUCxNQUFzQixhQUF0QjtBQUNBLFFBQU8sU0FBUCxNQUFzQixhQUF0Qjs7QUFFQSxPQUFNLEdBQU4sU0FBa0IsU0FBbEIsQ0FBNEI7QUFDMUIsWUFBUztBQUNQLFlBQ0U7QUFBQTtBQUFBO0FBQ0UsMkJBQUMsU0FBRCxPQURGO0FBRUU7QUFBQTtBQUFBLFdBQUssT0FBTyxFQUFFLFNBQVMsRUFBWCxFQUFaO0FBQ0csY0FBSyxLQUFMLENBQVcsUUFBWCxJQUF1QixvQkFBQyxTQUFELElBQVcsU0FBUyxPQUFwQjtBQUQxQjtBQUZGLE1BREY7QUFRRDtBQVZ5Qjs7QUFhNUIsUUFBTyxPQUFQLEdBQWlCLEdBQWpCLEM7Ozs7OztBQ2xCQSxRQUFPLE9BQVAsR0FBaUI7QUFDZixTQUFNLFVBRFM7QUFFZixnQkFBYSxTQUFiLEVBQXdCLEVBQXhCLEVBQTRCO0FBQzFCLDJCQUFvQixPQUFELElBQWE7QUFDOUIsVUFBRyxJQUFILEVBQVMsUUFBUSx1QkFBUixDQUFUO0FBQ0QsTUFGRDtBQUdEO0FBTmMsRUFBakIsQzs7Ozs7O0FDQUEsUUFBTyxPQUFQLEdBQWlCO0FBQ2YsU0FBTSxrQkFEUzs7QUFHZixrQkFBZSxnQkFBZixFQUFpQyxFQUFqQyxFQUFxQztBQUNuQywyQkFBb0IsT0FBRCxJQUFhO0FBQzlCLFVBQUcsSUFBSCxFQUFTLENBQ1AsUUFBUSx3QkFBUixDQURPLEVBRVAsUUFBUSxzQkFBUixDQUZPLEVBR1AsUUFBUSxpQkFBUixDQUhPLENBQVQ7QUFLRCxNQU5EO0FBT0QsSUFYYzs7QUFhZixnQkFBYSxTQUFiLEVBQXdCLEVBQXhCLEVBQTRCO0FBQzFCLDJCQUFvQixPQUFELElBQWE7QUFDOUIsVUFBRyxJQUFILEVBQVMsUUFBUSxxQkFBUixDQUFUO0FBQ0QsTUFGRDtBQUdEO0FBakJjLEVBQWpCLEM7Ozs7OztBQ0FBLFFBQU8sT0FBUCxHQUFpQjtBQUNmLFNBQU0sUUFEUztBQUVmLGdCQUFhLFNBQWIsRUFBd0IsRUFBeEIsRUFBNEI7QUFDMUIsMkJBQW9CLE9BQUQsSUFBYTtBQUM5QixVQUFHLElBQUgsRUFBUyxRQUFRLHFCQUFSLENBQVQ7QUFDRCxNQUZEO0FBR0Q7QUFOYyxFQUFqQixDOzs7Ozs7QUNBQSxRQUFPLE9BQVAsR0FBaUI7QUFDZixTQUFNLFVBRFM7QUFFZixnQkFBYSxTQUFiLEVBQXdCLEVBQXhCLEVBQTRCO0FBQzFCLDJCQUFvQixPQUFELElBQWE7QUFDOUIsVUFBRyxJQUFILEVBQVMsUUFBUSx1QkFBUixDQUFUO0FBQ0QsTUFGRDtBQUdEO0FBTmMsRUFBakIsQzs7Ozs7O0FDQUEsUUFBTyxPQUFQLEdBQWlCO0FBQ2YsU0FBTSxTQURTO0FBRWYsZ0JBQWEsU0FBYixFQUF3QixFQUF4QixFQUE0QjtBQUMxQiwyQkFBb0IsT0FBRCxJQUFhO0FBQzlCLFVBQUcsSUFBSCxFQUFTLFFBQVEsc0JBQVIsQ0FBVDtBQUNELE1BRkQ7QUFHRDtBQU5jLEVBQWpCLEMiLCJmaWxlIjoiaHVnZS1hcHBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgUm91dGVyLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHdpdGhFeGFtcGxlQmFzZW5hbWUgZnJvbSAnLi4vd2l0aEV4YW1wbGVCYXNlbmFtZSdcbmltcG9ydCAnLi9zdHVicy9DT1VSU0VTJ1xuXG5jb25zdCByb290Um91dGUgPSB7XG4gIGNoaWxkUm91dGVzOiBbIHtcbiAgICBwYXRoOiAnLycsXG4gICAgY29tcG9uZW50OiByZXF1aXJlKCcuL2NvbXBvbmVudHMvQXBwJyksXG4gICAgY2hpbGRSb3V0ZXM6IFtcbiAgICAgIHJlcXVpcmUoJy4vcm91dGVzL0NhbGVuZGFyJyksXG4gICAgICByZXF1aXJlKCcuL3JvdXRlcy9Db3Vyc2UnKSxcbiAgICAgIHJlcXVpcmUoJy4vcm91dGVzL0dyYWRlcycpLFxuICAgICAgcmVxdWlyZSgnLi9yb3V0ZXMvTWVzc2FnZXMnKSxcbiAgICAgIHJlcXVpcmUoJy4vcm91dGVzL1Byb2ZpbGUnKVxuICAgIF1cbiAgfSBdXG59XG5cbnJlbmRlcigoXG4gIDxSb3V0ZXJcbiAgICBoaXN0b3J5PXt3aXRoRXhhbXBsZUJhc2VuYW1lKGJyb3dzZXJIaXN0b3J5LCBfX2Rpcm5hbWUpfVxuICAgIHJvdXRlcz17cm9vdFJvdXRlfVxuICAvPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKSlcblxuLy8gSSd2ZSB1bnJvbGxlZCB0aGUgcmVjdXJzaXZlIGRpcmVjdG9yeSBsb29wIHRoYXQgaXMgaGFwcGVuaW5nIGFib3ZlIHRvIGdldCBhXG4vLyBiZXR0ZXIgaWRlYSBvZiBqdXN0IHdoYXQgdGhpcyBodWdlLWFwcHMgUm91dGVyIGxvb2tzIGxpa2UsIG9yIGp1c3QgbG9vayBhdCB0aGVcbi8vIGZpbGUgc3lzdGVtIDopXG4vL1xuLy8gaW1wb3J0IHsgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbi8vIGltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCdcbi8vIGltcG9ydCBDb3Vyc2UgZnJvbSAnLi9yb3V0ZXMvQ291cnNlL2NvbXBvbmVudHMvQ291cnNlJ1xuLy8gaW1wb3J0IEFubm91bmNlbWVudHNTaWRlYmFyIGZyb20gJy4vcm91dGVzL0NvdXJzZS9yb3V0ZXMvQW5ub3VuY2VtZW50cy9jb21wb25lbnRzL1NpZGViYXInXG4vLyBpbXBvcnQgQW5ub3VuY2VtZW50cyBmcm9tICcuL3JvdXRlcy9Db3Vyc2Uvcm91dGVzL0Fubm91bmNlbWVudHMvY29tcG9uZW50cy9Bbm5vdW5jZW1lbnRzJ1xuLy8gaW1wb3J0IEFubm91bmNlbWVudCBmcm9tICcuL3JvdXRlcy9Db3Vyc2Uvcm91dGVzL0Fubm91bmNlbWVudHMvcm91dGVzL0Fubm91bmNlbWVudC9jb21wb25lbnRzL0Fubm91bmNlbWVudCdcbi8vIGltcG9ydCBBc3NpZ25tZW50c1NpZGViYXIgZnJvbSAnLi9yb3V0ZXMvQ291cnNlL3JvdXRlcy9Bc3NpZ25tZW50cy9jb21wb25lbnRzL1NpZGViYXInXG4vLyBpbXBvcnQgQXNzaWdubWVudHMgZnJvbSAnLi9yb3V0ZXMvQ291cnNlL3JvdXRlcy9Bc3NpZ25tZW50cy9jb21wb25lbnRzL0Fzc2lnbm1lbnRzJ1xuLy8gaW1wb3J0IEFzc2lnbm1lbnQgZnJvbSAnLi9yb3V0ZXMvQ291cnNlL3JvdXRlcy9Bc3NpZ25tZW50cy9yb3V0ZXMvQXNzaWdubWVudC9jb21wb25lbnRzL0Fzc2lnbm1lbnQnXG4vLyBpbXBvcnQgQ291cnNlR3JhZGVzIGZyb20gJy4vcm91dGVzL0NvdXJzZS9yb3V0ZXMvR3JhZGVzL2NvbXBvbmVudHMvR3JhZGVzJ1xuLy8gaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vcm91dGVzL0NhbGVuZGFyL2NvbXBvbmVudHMvQ2FsZW5kYXInXG4vLyBpbXBvcnQgR3JhZGVzIGZyb20gJy4vcm91dGVzL0dyYWRlcy9jb21wb25lbnRzL0dyYWRlcydcbi8vIGltcG9ydCBNZXNzYWdlcyBmcm9tICcuL3JvdXRlcy9NZXNzYWdlcy9jb21wb25lbnRzL01lc3NhZ2VzJ1xuXG4vLyByZW5kZXIoXG4vLyAgIDxSb3V0ZXI+XG4vLyAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxuLy8gICAgICAgPFJvdXRlIHBhdGg9XCJjYWxlbmRhclwiIGNvbXBvbmVudD17Q2FsZW5kYXJ9IC8+XG4vLyAgICAgICA8Um91dGUgcGF0aD1cImNvdXJzZS86Y291cnNlSWRcIiBjb21wb25lbnQ9e0NvdXJzZX0+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiYW5ub3VuY2VtZW50c1wiIGNvbXBvbmVudHM9e3tcbi8vICAgICAgICAgICBzaWRlYmFyOiBBbm5vdW5jZW1lbnRzU2lkZWJhcixcbi8vICAgICAgICAgICBtYWluOiBBbm5vdW5jZW1lbnRzXG4vLyAgICAgICAgIH19PlxuLy8gICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOmFubm91bmNlbWVudElkXCIgY29tcG9uZW50PXtBbm5vdW5jZW1lbnR9IC8+XG4vLyAgICAgICAgIDwvUm91dGU+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiYXNzaWdubWVudHNcIiBjb21wb25lbnRzPXt7XG4vLyAgICAgICAgICAgc2lkZWJhcjogQXNzaWdubWVudHNTaWRlYmFyLFxuLy8gICAgICAgICAgIG1haW46IEFzc2lnbm1lbnRzXG4vLyAgICAgICAgIH19PlxuLy8gICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOmFzc2lnbm1lbnRJZFwiIGNvbXBvbmVudD17QXNzaWdubWVudH0gLz5cbi8vICAgICAgICAgPC9Sb3V0ZT5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCJncmFkZXNcIiBjb21wb25lbnQ9e0NvdXJzZUdyYWRlc30gLz5cbi8vICAgICAgIDwvUm91dGU+XG4vLyAgICAgICA8Um91dGUgcGF0aD1cImdyYWRlc1wiIGNvbXBvbmVudD17R3JhZGVzfSAvPlxuLy8gICAgICAgPFJvdXRlIHBhdGg9XCJtZXNzYWdlc1wiIGNvbXBvbmVudD17TWVzc2FnZXN9IC8+XG4vLyAgICAgICA8Um91dGUgcGF0aD1cInByb2ZpbGVcIiBjb21wb25lbnQ9e0NhbGVuZGFyfSAvPlxuLy8gICAgIDwvUm91dGU+XG4vLyAgIDwvUm91dGVyPixcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKVxuLy8gKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odWdlLWFwcHMvYXBwLmpzXG4gKiovIiwiLypnbG9iYWxzIENPVVJTRVM6dHJ1ZSAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL0Rhc2hib2FyZCdcbmltcG9ydCBHbG9iYWxOYXYgZnJvbSAnLi9HbG9iYWxOYXYnXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEdsb2JhbE5hdiAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDIwIH19PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuIHx8IDxEYXNoYm9hcmQgY291cnNlcz17Q09VUlNFU30gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h1Z2UtYXBwcy9jb21wb25lbnRzL0FwcC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAnY2FsZW5kYXInLFxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBjYikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCAocmVxdWlyZSkgPT4ge1xuICAgICAgY2IobnVsbCwgcmVxdWlyZSgnLi9jb21wb25lbnRzL0NhbGVuZGFyJykpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odWdlLWFwcHMvcm91dGVzL0NhbGVuZGFyL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6ICdjb3Vyc2UvOmNvdXJzZUlkJyxcblxuICBnZXRDaGlsZFJvdXRlcyhwYXJ0aWFsTmV4dFN0YXRlLCBjYikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCAocmVxdWlyZSkgPT4ge1xuICAgICAgY2IobnVsbCwgW1xuICAgICAgICByZXF1aXJlKCcuL3JvdXRlcy9Bbm5vdW5jZW1lbnRzJyksXG4gICAgICAgIHJlcXVpcmUoJy4vcm91dGVzL0Fzc2lnbm1lbnRzJyksXG4gICAgICAgIHJlcXVpcmUoJy4vcm91dGVzL0dyYWRlcycpXG4gICAgICBdKVxuICAgIH0pXG4gIH0sXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgY2IpIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgKHJlcXVpcmUpID0+IHtcbiAgICAgIGNiKG51bGwsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9Db3Vyc2UnKSlcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h1Z2UtYXBwcy9yb3V0ZXMvQ291cnNlL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6ICdncmFkZXMnLFxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBjYikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCAocmVxdWlyZSkgPT4ge1xuICAgICAgY2IobnVsbCwgcmVxdWlyZSgnLi9jb21wb25lbnRzL0dyYWRlcycpKVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHVnZS1hcHBzL3JvdXRlcy9HcmFkZXMvaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ21lc3NhZ2VzJyxcbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgY2IpIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgKHJlcXVpcmUpID0+IHtcbiAgICAgIGNiKG51bGwsIHJlcXVpcmUoJy4vY29tcG9uZW50cy9NZXNzYWdlcycpKVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHVnZS1hcHBzL3JvdXRlcy9NZXNzYWdlcy9pbmRleC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAncHJvZmlsZScsXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGNiKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIChyZXF1aXJlKSA9PiB7XG4gICAgICBjYihudWxsLCByZXF1aXJlKCcuL2NvbXBvbmVudHMvUHJvZmlsZScpKVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHVnZS1hcHBzL3JvdXRlcy9Qcm9maWxlL2luZGV4LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==