webpackJsonp([9,16],[
/* 0 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {import React from 'react';
	import { render, findDOMNode } from 'react-dom';
	import { browserHistory, Router, Route, IndexRoute, Link, withRouter } from 'react-router';
	
	import withExampleBasename from '../withExampleBasename';
	import ContactStore from './ContactStore';
	
	import './app.css';
	
	const App = React.createClass({
	  displayName: 'App',
	
	  getInitialState() {
	    return {
	      contacts: ContactStore.getContacts(),
	      loading: true
	    };
	  },
	
	  componentWillMount() {
	    ContactStore.init();
	  },
	
	  componentDidMount() {
	    ContactStore.addChangeListener(this.updateContacts);
	  },
	
	  componentWillUnmount() {
	    ContactStore.removeChangeListener(this.updateContacts);
	  },
	
	  updateContacts() {
	    this.setState({
	      contacts: ContactStore.getContacts(),
	      loading: false
	    });
	  },
	
	  render() {
	    const contacts = this.state.contacts.map(function (contact) {
	      return React.createElement(
	        'li',
	        { key: contact.id },
	        React.createElement(
	          Link,
	          { to: `/contact/${ contact.id }` },
	          contact.first
	        )
	      );
	    });
	
	    return React.createElement(
	      'div',
	      { className: 'App' },
	      React.createElement(
	        'div',
	        { className: 'ContactList' },
	        React.createElement(
	          Link,
	          { to: '/contact/new' },
	          'New Contact'
	        ),
	        React.createElement(
	          'ul',
	          null,
	          contacts
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'Content' },
	        this.props.children
	      )
	    );
	  }
	});
	
	const Index = React.createClass({
	  displayName: 'Index',
	
	  render() {
	    return React.createElement(
	      'h1',
	      null,
	      'Address Book'
	    );
	  }
	});
	
	const Contact = withRouter(React.createClass({
	  displayName: 'Contact',
	
	
	  getStateFromStore(props) {
	    const { id } = props ? props.params : this.props.params;
	
	    return {
	      contact: ContactStore.getContact(id)
	    };
	  },
	
	  getInitialState() {
	    return this.getStateFromStore();
	  },
	
	  componentDidMount() {
	    ContactStore.addChangeListener(this.updateContact);
	  },
	
	  componentWillUnmount() {
	    ContactStore.removeChangeListener(this.updateContact);
	  },
	
	  componentWillReceiveProps(nextProps) {
	    this.setState(this.getStateFromStore(nextProps));
	  },
	
	  updateContact() {
	    this.setState(this.getStateFromStore());
	  },
	
	  destroy() {
	    const { id } = this.props.params;
	    ContactStore.removeContact(id);
	    this.props.router.push('/');
	  },
	
	  render() {
	    const contact = this.state.contact || {};
	    const name = contact.first + ' ' + contact.last;
	    const avatar = contact.avatar || 'http://placecage.com/50/50';
	
	    return React.createElement(
	      'div',
	      { className: 'Contact' },
	      React.createElement('img', { height: '50', src: avatar, key: avatar }),
	      React.createElement(
	        'h3',
	        null,
	        name
	      ),
	      React.createElement(
	        'button',
	        { onClick: this.destroy },
	        'Delete'
	      )
	    );
	  }
	}));
	
	const NewContact = withRouter(React.createClass({
	  displayName: 'NewContact',
	
	
	  createContact(event) {
	    event.preventDefault();
	
	    ContactStore.addContact({
	      first: findDOMNode(this.refs.first).value,
	      last: findDOMNode(this.refs.last).value
	    }, contact => {
	      this.props.router.push(`/contact/${ contact.id }`);
	    });
	  },
	
	  render() {
	    return React.createElement(
	      'form',
	      { onSubmit: this.createContact },
	      React.createElement(
	        'p',
	        null,
	        React.createElement('input', { type: 'text', ref: 'first', placeholder: 'First name' }),
	        React.createElement('input', { type: 'text', ref: 'last', placeholder: 'Last name' })
	      ),
	      React.createElement(
	        'p',
	        null,
	        React.createElement(
	          'button',
	          { type: 'submit' },
	          'Save'
	        ),
	        ' ',
	        React.createElement(
	          Link,
	          { to: '/' },
	          'Cancel'
	        )
	      )
	    );
	  }
	}));
	
	const NotFound = React.createClass({
	  displayName: 'NotFound',
	
	  render() {
	    return React.createElement(
	      'h2',
	      null,
	      'Not found'
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
	    React.createElement(Route, { path: 'contact/new', component: NewContact }),
	    React.createElement(Route, { path: 'contact/:id', component: Contact }),
	    React.createElement(Route, { path: '*', component: NotFound })
	  )
	), document.getElementById('example'));
	/* WEBPACK VAR INJECTION */}.call(exports, "master-detail"))

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYXN0ZXItZGV0YWlsL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEseURBQU8sS0FBUCxNQUFrQixPQUFsQjtBQUNBLFVBQVMsTUFBVCxFQUFpQixXQUFqQixRQUFvQyxXQUFwQztBQUNBLFVBQVMsY0FBVCxFQUF5QixNQUF6QixFQUFpQyxLQUFqQyxFQUF3QyxVQUF4QyxFQUFvRCxJQUFwRCxFQUEwRCxVQUExRCxRQUE0RSxjQUE1RTs7QUFFQSxRQUFPLG1CQUFQLE1BQWdDLHdCQUFoQztBQUNBLFFBQU8sWUFBUCxNQUF5QixnQkFBekI7O0FBRUEsUUFBTyxXQUFQOztBQUVBLE9BQU0sTUFBTSxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDNUIscUJBQWtCO0FBQ2hCLFlBQU87QUFDTCxpQkFBVSxhQUFhLFdBQWIsRUFETDtBQUVMLGdCQUFTO0FBRkosTUFBUDtBQUlELElBTjJCOztBQVE1Qix3QkFBcUI7QUFDbkIsa0JBQWEsSUFBYjtBQUNELElBVjJCOztBQVk1Qix1QkFBb0I7QUFDbEIsa0JBQWEsaUJBQWIsQ0FBK0IsS0FBSyxjQUFwQztBQUNELElBZDJCOztBQWdCNUIsMEJBQXVCO0FBQ3JCLGtCQUFhLG9CQUFiLENBQWtDLEtBQUssY0FBdkM7QUFDRCxJQWxCMkI7O0FBb0I1QixvQkFBaUI7QUFDZixVQUFLLFFBQUwsQ0FBYztBQUNaLGlCQUFVLGFBQWEsV0FBYixFQURFO0FBRVosZ0JBQVM7QUFGRyxNQUFkO0FBSUQsSUF6QjJCOztBQTJCNUIsWUFBUztBQUNQLFdBQU0sV0FBVyxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLFVBQVUsT0FBVixFQUFtQjtBQUMxRCxjQUFPO0FBQUE7QUFBQSxXQUFJLEtBQUssUUFBUSxFQUFqQjtBQUFxQjtBQUFDLGVBQUQ7QUFBQSxhQUFNLElBQUssYUFBVyxRQUFRLEVBQUcsR0FBakM7QUFBcUMsbUJBQVE7QUFBN0M7QUFBckIsUUFBUDtB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SSxPQUF2QixFQUErQixhQUFZLFlBQTNDLEdBREY7QUFFRSx3Q0FBTyxNQUFLLE1BQVosRUFBbUIsS0FBSSxNQUF2QixFQUE4QixhQUFZLFdBQTFDO0FBRkYsUUFERjtBQUtFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxhQUFRLE1BQUssUUFBYjtBQUFBO0FBQUEsVUFERjtBQUFBO0FBQ3NDO0FBQUMsZUFBRDtBQUFBLGFBQU0sSUFBRyxHQUFUO0FBQUE7QUFBQTtBQUR0QztBQUxGLE1BREY7QUFXRDtBQXpCZSxFQUFsQixDQURpQixDQUFuQjs7QUE4QkEsT0FBTSxXQUFXLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUNqQyxZQUFTO0FBQ1AsWUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRDtBQUhnQyxFQUFsQixDQUFqQjs7QUFNQSxRQUNFO0FBQUMsU0FBRDtBQUFBLEtBQVEsU0FBUyxvQkFBb0IsY0FBcEIsRUFBb0MsU0FBcEMsQ0FBakI7QUFDRTtBQUFDLFVBQUQ7QUFBQSxPQUFPLE1BQUssR0FBWixFQUFnQixXQUFXLEdBQTNCO0FBQ0UseUJBQUMsVUFBRCxJQUFZLFdBQVcsS0FBdkIsR0FERjtBQUVFLHlCQUFDLEtBQUQsSUFBTyxNQUFLLGFBQVosRUFBMEIsV0FBVyxVQUFyQyxHQUZGO0FBR0UseUJBQUMsS0FBRCxJQUFPLE1BQUssYUFBWixFQUEwQixXQUFXLE9BQXJDLEdBSEY7QUFJRSx5QkFBQyxLQUFELElBQU8sTUFBSyxHQUFaLEVBQWdCLFdBQVcsUUFBM0I7QUFKRjtBQURGLEVBREYsRUFTRyxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FUSCxFIiwiZmlsZSI6Im1hc3Rlci1kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIsIGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnksIFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIExpbmssIHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB3aXRoRXhhbXBsZUJhc2VuYW1lIGZyb20gJy4uL3dpdGhFeGFtcGxlQmFzZW5hbWUnXG5pbXBvcnQgQ29udGFjdFN0b3JlIGZyb20gJy4vQ29udGFjdFN0b3JlJ1xuXG5pbXBvcnQgJy4vYXBwLmNzcydcblxuY29uc3QgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhY3RzOiBDb250YWN0U3RvcmUuZ2V0Q29udGFjdHMoKSxcbiAgICAgIGxvYWRpbmc6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIENvbnRhY3RTdG9yZS5pbml0KClcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBDb250YWN0U3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy51cGRhdGVDb250YWN0cylcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBDb250YWN0U3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy51cGRhdGVDb250YWN0cylcbiAgfSxcblxuICB1cGRhdGVDb250YWN0cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRhY3RzOiBDb250YWN0U3RvcmUuZ2V0Q29udGFjdHMoKSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSlcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGFjdHMgPSB0aGlzLnN0YXRlLmNvbnRhY3RzLm1hcChmdW5jdGlvbiAoY29udGFjdCkge1xuICAgICAgcmV0dXJuIDxsaSBrZXk9e2NvbnRhY3QuaWR9PjxMaW5rIHRvPXtgL2NvbnRhY3QvJHtjb250YWN0LmlkfWB9Pntjb250YWN0LmZpcnN0fTwvTGluaz48L2xpPlxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb250YWN0TGlzdFwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3QvbmV3XCI+TmV3IENvbnRhY3Q8L0xpbms+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2NvbnRhY3RzfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRlbnRcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pXG5cbmNvbnN0IEluZGV4ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoMT5BZGRyZXNzIEJvb2s8L2gxPlxuICB9XG59KVxuXG5jb25zdCBDb250YWN0ID0gd2l0aFJvdXRlcihcbiAgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgZ2V0U3RhdGVGcm9tU3RvcmUocHJvcHMpIHtcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHByb3BzID8gcHJvcHMucGFyYW1zIDogdGhpcy5wcm9wcy5wYXJhbXNcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29udGFjdDogQ29udGFjdFN0b3JlLmdldENvbnRhY3QoaWQpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXRlRnJvbVN0b3JlKClcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBDb250YWN0U3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy51cGRhdGVDb250YWN0KVxuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIENvbnRhY3RTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLnVwZGF0ZUNvbnRhY3QpXG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U3RhdGVGcm9tU3RvcmUobmV4dFByb3BzKSlcbiAgICB9LFxuXG4gICAgdXBkYXRlQ29udGFjdCgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRTdGF0ZUZyb21TdG9yZSgpKVxuICAgIH0sXG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wcy5wYXJhbXNcbiAgICAgIENvbnRhY3RTdG9yZS5yZW1vdmVDb250YWN0KGlkKVxuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnLycpXG4gICAgfSxcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IGNvbnRhY3QgPSB0aGlzLnN0YXRlLmNvbnRhY3QgfHwge31cbiAgICAgIGNvbnN0IG5hbWUgPSBjb250YWN0LmZpcnN0ICsgJyAnICsgY29udGFjdC5sYXN0XG4gICAgICBjb25zdCBhdmF0YXIgPSBjb250YWN0LmF2YXRhciB8fCAnaHR0cDovL3BsYWNlY2FnZS5jb20vNTAvNTAnXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGFjdFwiPlxuICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiNTBcIiBzcmM9e2F2YXRhcn0ga2V5PXthdmF0YXJ9IC8+XG4gICAgICAgICAgPGgzPntuYW1lfTwvaDM+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmRlc3Ryb3l9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH0pXG4pXG5cbmNvbnN0IE5ld0NvbnRhY3QgPSB3aXRoUm91dGVyKFxuICBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBjcmVhdGVDb250YWN0KGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIENvbnRhY3RTdG9yZS5hZGRDb250YWN0KHtcbiAgICAgICAgZmlyc3Q6IGZpbmRET01Ob2RlKHRoaXMucmVmcy5maXJzdCkudmFsdWUsXG4gICAgICAgIGxhc3Q6IGZpbmRET01Ob2RlKHRoaXMucmVmcy5sYXN0KS52YWx1ZVxuICAgICAgfSwgKGNvbnRhY3QpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaChgL2NvbnRhY3QvJHtjb250YWN0LmlkfWApXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5jcmVhdGVDb250YWN0fT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cImZpcnN0XCIgcGxhY2Vob2xkZXI9XCJGaXJzdCBuYW1lXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cImxhc3RcIiBwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZVwiIC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZTwvYnV0dG9uPiA8TGluayB0bz1cIi9cIj5DYW5jZWw8L0xpbms+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICApXG4gICAgfVxuICB9KVxuKVxuXG5jb25zdCBOb3RGb3VuZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aDI+Tm90IGZvdW5kPC9oMj5cbiAgfVxufSlcblxucmVuZGVyKChcbiAgPFJvdXRlciBoaXN0b3J5PXt3aXRoRXhhbXBsZUJhc2VuYW1lKGJyb3dzZXJIaXN0b3J5LCBfX2Rpcm5hbWUpfT5cbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XG4gICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0luZGV4fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJjb250YWN0L25ld1wiIGNvbXBvbmVudD17TmV3Q29udGFjdH0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiY29udGFjdC86aWRcIiBjb21wb25lbnQ9e0NvbnRhY3R9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgIDwvUm91dGU+XG4gIDwvUm91dGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbWFzdGVyLWRldGFpbC9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9