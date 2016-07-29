webpackJsonp([12,16],[
/* 0 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {import React from 'react';
	import { render } from 'react-dom';
	import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
	
	import withExampleBasename from '../withExampleBasename';
	
	const PICTURES = [{ id: 0, src: 'http://placekitten.com/601/601' }, { id: 1, src: 'http://placekitten.com/610/610' }, { id: 2, src: 'http://placekitten.com/620/620' }];
	
	const Modal = React.createClass({
	  displayName: 'Modal',
	
	  styles: {
	    position: 'fixed',
	    top: '20%',
	    right: '20%',
	    bottom: '20%',
	    left: '20%',
	    padding: 20,
	    boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
	    overflow: 'auto',
	    background: '#fff'
	  },
	
	  render() {
	    return React.createElement(
	      'div',
	      { style: this.styles },
	      React.createElement(
	        'p',
	        null,
	        React.createElement(
	          Link,
	          { to: this.props.returnTo },
	          'Back'
	        )
	      ),
	      this.props.children
	    );
	  }
	});
	
	const App = React.createClass({
	  displayName: 'App',
	
	
	  componentWillReceiveProps(nextProps) {
	    // if we changed routes...
	    if (nextProps.location.key !== this.props.location.key && nextProps.location.state && nextProps.location.state.modal) {
	      // save the old children (just like animation)
	      this.previousChildren = this.props.children;
	    }
	  },
	
	  render() {
	    let { location } = this.props;
	
	    let isModal = location.state && location.state.modal && this.previousChildren;
	
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h1',
	        null,
	        'Pinterest Style Routes'
	      ),
	      React.createElement(
	        'div',
	        null,
	        isModal ? this.previousChildren : this.props.children,
	        isModal && React.createElement(
	          Modal,
	          { isOpen: true, returnTo: location.state.returnTo },
	          this.props.children
	        )
	      )
	    );
	  }
	});
	
	const Index = React.createClass({
	  displayName: 'Index',
	
	  render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'p',
	        null,
	        'The url `/pictures/:id` can be rendered anywhere in the app as a modal. Simply put `modal: true` in the location descriptor of the `to` prop.'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Click on an item and see its rendered as a modal, then copy/paste the url into a different browser window (with a different session, like Chrome -> Firefox), and see that the image does not render inside the overlay. One URL, two session dependent screens :D'
	      ),
	      React.createElement(
	        'div',
	        null,
	        PICTURES.map(picture => React.createElement(
	          Link,
	          {
	            key: picture.id,
	            to: {
	              pathname: `/pictures/${ picture.id }`,
	              state: { modal: true, returnTo: this.props.location.pathname }
	            }
	          },
	          React.createElement('img', { style: { margin: 10 }, src: picture.src, height: '100' })
	        ))
	      ),
	      React.createElement(
	        'p',
	        null,
	        React.createElement(
	          Link,
	          { to: '/some/123/deep/456/route' },
	          'Go to some deep route'
	        )
	      )
	    );
	  }
	});
	
	const Deep = React.createClass({
	  displayName: 'Deep',
	
	  render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'p',
	        null,
	        'You can link from anywhere really deep too'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Params stick around: ',
	        this.props.params.one,
	        ' ',
	        this.props.params.two
	      ),
	      React.createElement(
	        'p',
	        null,
	        React.createElement(
	          Link,
	          { to: {
	              pathname: '/pictures/0',
	              state: { modal: true, returnTo: this.props.location.pathname }
	            } },
	          'Link to picture with Modal'
	        ),
	        React.createElement('br', null),
	        React.createElement(
	          Link,
	          { to: '/pictures/0' },
	          'Without modal'
	        )
	      )
	    );
	  }
	});
	
	const Picture = React.createClass({
	  displayName: 'Picture',
	
	  render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement('img', { src: PICTURES[this.props.params.id].src, style: { height: '80%' } })
	    );
	  }
	});
	
	render(React.createElement(
	  Router,
	  { history: withExampleBasename(browserHistory, __dirname) },
	  React.createElement(
	    Route,
	    { path: '/', component: App },
	    React.createElement(IndexRoute, { component: Index }),
	    React.createElement(Route, { path: '/pictures/:id', component: Picture }),
	    React.createElement(Route, { path: '/some/:one/deep/:two/route', component: Deep })
	  )
	), document.getElementById('example'));
	/* WEBPACK VAR INJECTION */}.call(exports, "pinterest"))

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9waW50ZXJlc3QvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx5REFBTyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsVUFBUyxNQUFULFFBQXVCLFdBQXZCO0FBQ0EsVUFBUyxjQUFULEVBQXlCLE1BQXpCLEVBQWlDLEtBQWpDLEVBQXdDLFVBQXhDLEVBQW9ELElBQXBELFFBQWdFLGNBQWhFOztBQUVBLFFBQU8sbUJBQVAsTUFBZ0Msd0JBQWhDOztBQUVBLE9BQU0sV0FBVyxDQUNmLEVBQUUsSUFBSSxDQUFOLEVBQVMsS0FBSyxnQ0FBZCxFQURlLEVBRWYsRUFBRSxJQUFJLENBQU4sRUFBUyxLQUFLLGdDQUFkLEVBRmUsRUFHZixFQUFFLElBQUksQ0FBTixFQUFTLEtBQUssZ0NBQWQsRUFIZSxDQUFqQjs7QUFNQSxPQUFNLFFBQVEsTUFBTSxXQUFOLENBQWtCO0FBQUE7O0FBQzlCLFdBQVE7QUFDTixlQUFVLE9BREo7QUFFTixVQUFLLEtBRkM7QUFHTixZQUFPLEtBSEQ7QUFJTixhQUFRLEtBSkY7QUFLTixXQUFNLEtBTEE7QUFNTixjQUFTLEVBTkg7QUFPTixnQkFBVyx3Q0FQTDtBQVFOLGVBQVUsTUFSSjtBQVNOLGlCQUFZO0FBVE4sSUFEc0I7O0FBYTlCLFlBQVM7QUFDUCxZQUNFO0FBQUE7QUFBQSxTQUFLLE9BQU8sS0FBSyxNQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUFHO0FBQUMsZUFBRDtBQUFBLGFBQU0sSUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFyQjtBQUFBO0FBQUE7QUFBSCxRQURGO0FBRUcsWUFBSyxLQUFMLENBQVc7QUFGZCxNQURGO0FBTUQ7QUFwQjZCLEVBQWxCLENBQWQ7O0FBdUJBLE9BQU0sTUFBTSxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7O0FBRTVCLDZCQUEwQixTQUExQixFQUFxQztBQUNuQztBQUNBLFNBQ0UsVUFBVSxRQUFWLENBQW1CLEdBQW5CLEtBQTJCLEtBQUssS0FBTCxDQUFXLFFB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QUFnQixXQUFXLEdBQTNCO0FBQ0UseUJBQUMsVUFBRCxJQUFZLFdBQVcsS0FBdkIsR0FERjtBQUVFLHlCQUFDLEtBQUQsSUFBTyxNQUFLLGVBQVosRUFBNEIsV0FBVyxPQUF2QyxHQUZGO0FBR0UseUJBQUMsS0FBRCxJQUFPLE1BQUssNEJBQVosRUFBeUMsV0FBVyxJQUFwRDtBQUhGO0FBREYsRUFERixFQVFHLFNBQVMsY0FBVCxDQUF3QixTQUF4QixDQVJILEUiLCJmaWxlIjoicGludGVyZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnksIFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB3aXRoRXhhbXBsZUJhc2VuYW1lIGZyb20gJy4uL3dpdGhFeGFtcGxlQmFzZW5hbWUnXG5cbmNvbnN0IFBJQ1RVUkVTID0gW1xuICB7IGlkOiAwLCBzcmM6ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tLzYwMS82MDEnIH0sXG4gIHsgaWQ6IDEsIHNyYzogJ2h0dHA6Ly9wbGFjZWtpdHRlbi5jb20vNjEwLzYxMCcgfSxcbiAgeyBpZDogMiwgc3JjOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS82MjAvNjIwJyB9XG5dXG5cbmNvbnN0IE1vZGFsID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBzdHlsZXM6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6ICcyMCUnLFxuICAgIHJpZ2h0OiAnMjAlJyxcbiAgICBib3R0b206ICcyMCUnLFxuICAgIGxlZnQ6ICcyMCUnLFxuICAgIHBhZGRpbmc6IDIwLFxuICAgIGJveFNoYWRvdzogJzBweCAwcHggMTUwcHggMTMwcHggcmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIGJhY2tncm91bmQ6ICcjZmZmJ1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17dGhpcy5zdHlsZXN9PlxuICAgICAgICA8cD48TGluayB0bz17dGhpcy5wcm9wcy5yZXR1cm5Ub30+QmFjazwvTGluaz48L3A+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KVxuXG5jb25zdCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAvLyBpZiB3ZSBjaGFuZ2VkIHJvdXRlcy4uLlxuICAgIGlmICgoXG4gICAgICBuZXh0UHJvcHMubG9jYXRpb24ua2V5ICE9PSB0aGlzLnByb3BzLmxvY2F0aW9uLmtleSAmJlxuICAgICAgbmV4dFByb3BzLmxvY2F0aW9uLnN0YXRlICYmXG4gICAgICBuZXh0UHJvcHMubG9jYXRpb24uc3RhdGUubW9kYWxcbiAgICApKSB7XG4gICAgICAvLyBzYXZlIHRoZSBvbGQgY2hpbGRyZW4gKGp1c3QgbGlrZSBhbmltYXRpb24pXG4gICAgICB0aGlzLnByZXZpb3VzQ2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBsb2NhdGlvbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGlzTW9kYWwgPSAoXG4gICAgICBsb2NhdGlvbi5zdGF0ZSAmJlxuICAgICAgbG9jYXRpb24uc3RhdGUubW9kYWwgJiZcbiAgICAgIHRoaXMucHJldmlvdXNDaGlsZHJlblxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UGludGVyZXN0IFN0eWxlIFJvdXRlczwvaDE+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7aXNNb2RhbCA/XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzQ2hpbGRyZW4gOlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHtpc01vZGFsICYmIChcbiAgICAgICAgICAgIDxNb2RhbCBpc09wZW49e3RydWV9IHJldHVyblRvPXtsb2NhdGlvbi5zdGF0ZS5yZXR1cm5Ub30+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgSW5kZXggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIHVybCBgL3BpY3R1cmVzLzppZGAgY2FuIGJlIHJlbmRlcmVkIGFueXdoZXJlIGluIHRoZSBhcHAgYXMgYSBtb2RhbC5cbiAgICAgICAgICBTaW1wbHkgcHV0IGBtb2RhbDogdHJ1ZWAgaW4gdGhlIGxvY2F0aW9uIGRlc2NyaXB0b3Igb2YgdGhlIGB0b2AgcHJvcC5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIENsaWNrIG9uIGFuIGl0ZW0gYW5kIHNlZSBpdHMgcmVuZGVyZWQgYXMgYSBtb2RhbCwgdGhlbiBjb3B5L3Bhc3RlIHRoZVxuICAgICAgICAgIHVybCBpbnRvIGEgZGlmZmVyZW50IGJyb3dzZXIgd2luZG93ICh3aXRoIGEgZGlmZmVyZW50IHNlc3Npb24sIGxpa2VcbiAgICAgICAgICBDaHJvbWUgLT4gRmlyZWZveCksIGFuZCBzZWUgdGhhdCB0aGUgaW1hZ2UgZG9lcyBub3QgcmVuZGVyIGluc2lkZSB0aGVcbiAgICAgICAgICBvdmVybGF5LiBPbmUgVVJMLCB0d28gc2Vzc2lvbiBkZXBlbmRlbnQgc2NyZWVucyA6RFxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7UElDVFVSRVMubWFwKHBpY3R1cmUgPT4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAga2V5PXtwaWN0dXJlLmlkfVxuICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgL3BpY3R1cmVzLyR7cGljdHVyZS5pZH1gLFxuICAgICAgICAgICAgICAgIHN0YXRlOiB7IG1vZGFsOiB0cnVlLCByZXR1cm5UbzogdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fSBzcmM9e3BpY3R1cmUuc3JjfSBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cD48TGluayB0bz1cIi9zb21lLzEyMy9kZWVwLzQ1Ni9yb3V0ZVwiPkdvIHRvIHNvbWUgZGVlcCByb3V0ZTwvTGluaz48L3A+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuY29uc3QgRGVlcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5Zb3UgY2FuIGxpbmsgZnJvbSBhbnl3aGVyZSByZWFsbHkgZGVlcCB0b288L3A+XG4gICAgICAgIDxwPlBhcmFtcyBzdGljayBhcm91bmQ6IHt0aGlzLnByb3BzLnBhcmFtcy5vbmV9IHt0aGlzLnByb3BzLnBhcmFtcy50d299PC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8TGluayB0bz17e1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvcGljdHVyZXMvMCcsXG4gICAgICAgICAgICBzdGF0ZTogeyBtb2RhbDogdHJ1ZSwgcmV0dXJuVG86IHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUgfVxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgTGluayB0byBwaWN0dXJlIHdpdGggTW9kYWxcbiAgICAgICAgICA8L0xpbms+PGJyLz5cbiAgICAgICAgICA8TGluayB0bz1cIi9waWN0dXJlcy8wXCI+XG4gICAgICAgICAgICBXaXRob3V0IG1vZGFsXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IFBpY3R1cmUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9e1BJQ1RVUkVTW3RoaXMucHJvcHMucGFyYW1zLmlkXS5zcmN9IHN0eWxlPXt7IGhlaWdodDogJzgwJScgfX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxucmVuZGVyKChcbiAgPFJvdXRlciBoaXN0b3J5PXt3aXRoRXhhbXBsZUJhc2VuYW1lKGJyb3dzZXJIaXN0b3J5LCBfX2Rpcm5hbWUpfT5cbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XG4gICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0luZGV4fS8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9waWN0dXJlcy86aWRcIiBjb21wb25lbnQ9e1BpY3R1cmV9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3NvbWUvOm9uZS9kZWVwLzp0d28vcm91dGVcIiBjb21wb25lbnQ9e0RlZXB9Lz5cbiAgICA8L1JvdXRlPlxuICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJykpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3BpbnRlcmVzdC9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9