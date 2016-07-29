webpackJsonp([11,16],[
/* 0 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {import React from 'react';
	import { render } from 'react-dom';
	import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
	
	import withExampleBasename from '../withExampleBasename';
	
	import './app.css';
	
	const App = withRouter(React.createClass({
	  displayName: 'App',
	
	
	  getInitialState() {
	    return {
	      tacos: [{ name: 'duck confit' }, { name: 'carne asada' }, { name: 'shrimp' }]
	    };
	  },
	
	  addTaco() {
	    let name = prompt('taco name?');
	
	    this.setState({
	      tacos: this.state.tacos.concat({ name })
	    });
	  },
	
	  handleRemoveTaco(removedTaco) {
	    this.setState({
	      tacos: this.state.tacos.filter(function (taco) {
	        return taco.name != removedTaco;
	      })
	    });
	
	    this.props.router.push('/');
	  },
	
	  render() {
	    let links = this.state.tacos.map(function (taco, i) {
	      return React.createElement(
	        'li',
	        { key: i },
	        React.createElement(
	          Link,
	          { to: `/taco/${ taco.name }` },
	          taco.name
	        )
	      );
	    });
	    return React.createElement(
	      'div',
	      { className: 'App' },
	      React.createElement(
	        'button',
	        { onClick: this.addTaco },
	        'Add Taco'
	      ),
	      React.createElement(
	        'ul',
	        { className: 'Master' },
	        links
	      ),
	      React.createElement(
	        'div',
	        { className: 'Detail' },
	        this.props.children && React.cloneElement(this.props.children, {
	          onRemoveTaco: this.handleRemoveTaco
	        })
	      )
	    );
	  }
	}));
	
	const Taco = React.createClass({
	  displayName: 'Taco',
	
	  remove() {
	    this.props.onRemoveTaco(this.props.params.name);
	  },
	
	  render() {
	    return React.createElement(
	      'div',
	      { className: 'Taco' },
	      React.createElement(
	        'h1',
	        null,
	        this.props.params.name
	      ),
	      React.createElement(
	        'button',
	        { onClick: this.remove },
	        'remove'
	      )
	    );
	  }
	});
	
	render(React.createElement(
	  Router,
	  { history: withExampleBasename(browserHistory, __dirname) },
	  React.createElement(
	    Route,
	    { path: '/', component: App },
	    React.createElement(Route, { path: 'taco/:name', component: Taco })
	  )
	), document.getElementById('example'));
	/* WEBPACK VAR INJECTION */}.call(exports, "passing-props-to-children"))

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYXNzaW5nLXByb3BzLXRvLWNoaWxkcmVuL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEseURBQU8sS0FBUCxNQUFrQixPQUFsQjtBQUNBLFVBQVMsTUFBVCxRQUF1QixXQUF2QjtBQUNBLFVBQVMsY0FBVCxFQUF5QixNQUF6QixFQUFpQyxLQUFqQyxFQUF3QyxJQUF4QyxFQUE4QyxVQUE5QyxRQUFnRSxjQUFoRTs7QUFFQSxRQUFPLG1CQUFQLE1BQWdDLHdCQUFoQzs7QUFFQSxRQUFPLFdBQVA7O0FBRUEsT0FBTSxNQUFNLFdBQ1YsTUFBTSxXQUFOLENBQWtCO0FBQUE7OztBQUVoQixxQkFBa0I7QUFDaEIsWUFBTztBQUNMLGNBQU8sQ0FDTCxFQUFFLE1BQU0sYUFBUixFQURLLEVBRUwsRUFBRSxNQUFNLGFBQVIsRUFGSyxFQUdMLEVBQUUsTUFBTSxRQUFSLEVBSEs7QUFERixNQUFQO0FBT0QsSUFWZTs7QUFZaEIsYUFBVTtBQUNSLFNBQUksT0FBTyxPQUFPLFlBQVAsQ0FBWDs7QUFFQSxVQUFLLFFBQUwsQ0FBYztBQUNaLGNBQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixNQUFqQixDQUF3QixFQUFFLElBQUYsRUFBeEI7QUFESyxNQUFkO0FBR0QsSUFsQmU7O0FBb0JoQixvQkFBaUIsV0FBakIsRUFBOEI7QUFDNUIsVUFBSyxRQUFMLENBQWM7QUFDWixjQUFPLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsTUFBakIsQ0FBd0IsVUFBVSxJQUFWLEVBQWdCO0FBQzdDLGdCQUFPLEtBQUssSUFBTCxJQUFhLFdBQXBCO0FBQ0QsUUFGTTtBQURLLE1BQWQ7O0FBTUEsVUFBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixJQUFsQixDQUF1QixHQUF2QjtBQUNELElBNUJlOztBQThCaEIsWUFBUztBQUNQLFNBQUksUUFBUSxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEdBQWpCLENBQXFCLFVBQVUsSUFBVixFQUFnQixDQUFoQixFQUFtQjtBQUNsRCxjQUNFO0FBQUE7QUFBQSxXQUFJLEtBQUssQ0FBVDtBQUNFO0FBQUMsZUFBRDtBQUFBLGFBQU0sSUFBSyxVQUFRLEtBQUssSUFBSyxHQUE3QjtBQUFpQyxnQkFBSztBQUF0QztBQURGLFFBREY7QUFLRCxNQU5XLENBQVo7QUFPQSxZQUNFO0FBQUE7QUFBQSxTQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxXQUFRLFNBQVMsS0FBSyxPQUF0QjtBQUFBO0FBQUEsUUFERjtBQUVFO0FBQUE7QUFBQSxXQUFJLFdBQVUsUUFBZDtBQUNHO0FBREgsUUFGRjtBQUtFO0FBQUE7QUFBQSxXQUFLLFdBQVUsUUFBZjtBQUNHLGNBQUssS0FBTCxDQUFXLFFBQVgsSUFBdUIsTUFBTSxZQUFOLENBQW1CLEtBQUssS0FBTCxDQUFXLFFBQTlCLEVBQXdDO0FBQzlELHlCQUFjLEtBQUs7QUFEMkMsVUFBeEM7QUFEMUI7QUFMRixNQURGO0FBYUQ7QUFuRGUsRUFBbEIsQ0FEVSxDQUFaOztBQXdEQSxPQUFNLE9BQU8sTUFBTSxXQUFOLENBQWtCO0FBQUE7O0FBQzdCLFlBQVM7QUFDUCxVQUFLLEtBQUwsQ0FBVyxZQUFYLENBQXdCLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsSUFBMUM7QUFDRCxJQUg0Qjs7QUFLN0IsWUFBUztBQUNQLFlBQ0U7QUFBQTtBQUFBLFNBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUssY0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQjtBQUF2QixRQURGO0FBRUU7QUFBQTtBQUFBLFdBQVEsU0FBUyxLQUFLLE1BQXRCO0FBQUE7QUFBQTtBQUZGLE1BREY7QUFNRDtBQVo0QixFQUFsQixDQUFiOztBQWVBLFFBQ0U7QUFBQyxTQUFEO0FBQUEsS0FBUSxTQUFTLG9CQUFvQixjQUFwQixFQUFvQyxTQUFwQyxDQUFqQjtBQUNFO0FBQUMsVUFBRDtBQUFBLE9BQU8sTUFBSyxHQUFaLEVBQWdCLFdBQVcsR0FBM0I7QUFDRSx5QkFBQyxLQUFELElBQU8sTUFBSyxZQUFaLEVBQXlCLFdBQVcsSUFBcEM7QUFERjtBQURGLEVBREYsRUFNRyxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FOSCxFIiwiZmlsZSI6InBhc3NpbmctcHJvcHMtdG8tY2hpbGRyZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyLCBSb3V0ZSwgTGluaywgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHdpdGhFeGFtcGxlQmFzZW5hbWUgZnJvbSAnLi4vd2l0aEV4YW1wbGVCYXNlbmFtZSdcblxuaW1wb3J0ICcuL2FwcC5jc3MnXG5cbmNvbnN0IEFwcCA9IHdpdGhSb3V0ZXIoXG4gIFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRhY29zOiBbXG4gICAgICAgICAgeyBuYW1lOiAnZHVjayBjb25maXQnIH0sXG4gICAgICAgICAgeyBuYW1lOiAnY2FybmUgYXNhZGEnIH0sXG4gICAgICAgICAgeyBuYW1lOiAnc2hyaW1wJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRkVGFjbygpIHtcbiAgICAgIGxldCBuYW1lID0gcHJvbXB0KCd0YWNvIG5hbWU/JylcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRhY29zOiB0aGlzLnN0YXRlLnRhY29zLmNvbmNhdCh7IG5hbWUgfSlcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGhhbmRsZVJlbW92ZVRhY28ocmVtb3ZlZFRhY28pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0YWNvczogdGhpcy5zdGF0ZS50YWNvcy5maWx0ZXIoZnVuY3Rpb24gKHRhY28pIHtcbiAgICAgICAgICByZXR1cm4gdGFjby5uYW1lICE9IHJlbW92ZWRUYWNvXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvJylcbiAgICB9LFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgbGV0IGxpbmtzID0gdGhpcy5zdGF0ZS50YWNvcy5tYXAoZnVuY3Rpb24gKHRhY28sIGkpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtgL3RhY28vJHt0YWNvLm5hbWV9YH0+e3RhY28ubmFtZX08L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKVxuICAgICAgfSlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFRhY299PkFkZCBUYWNvPC9idXR0b24+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIk1hc3RlclwiPlxuICAgICAgICAgICAge2xpbmtzfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRhaWxcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuICYmIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB7XG4gICAgICAgICAgICAgIG9uUmVtb3ZlVGFjbzogdGhpcy5oYW5kbGVSZW1vdmVUYWNvXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9KVxuKVxuXG5jb25zdCBUYWNvID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW1vdmUoKSB7XG4gICAgdGhpcy5wcm9wcy5vblJlbW92ZVRhY28odGhpcy5wcm9wcy5wYXJhbXMubmFtZSlcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGFjb1wiPlxuICAgICAgICA8aDE+e3RoaXMucHJvcHMucGFyYW1zLm5hbWV9PC9oMT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnJlbW92ZX0+cmVtb3ZlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pXG5cbnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17d2l0aEV4YW1wbGVCYXNlbmFtZShicm93c2VySGlzdG9yeSwgX19kaXJuYW1lKX0+XG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgPFJvdXRlIHBhdGg9XCJ0YWNvLzpuYW1lXCIgY29tcG9uZW50PXtUYWNvfSAvPlxuICAgIDwvUm91dGU+XG4gIDwvUm91dGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vcGFzc2luZy1wcm9wcy10by1jaGlsZHJlbi9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9