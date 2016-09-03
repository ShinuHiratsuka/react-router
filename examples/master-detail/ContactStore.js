import fetch from './fetch'
import post from './post'
import destory from './delete'
const API = 'http://addressbook-api.herokuapp.com/contacts'
let _initCalled = false
let _contacts = {}
let _changeListeners = []

localStorage.token = localStorage.token || (Date.now()*Math.random())

const ContactStore = {
  init : () => {
    if(_initCalled) return
    _initCalled = true
    fetch(API,{
      authorization: localStorage.token
    }).then((res)=>{
      res.contacts.forEach((contact) =>{
        _contacts[contact.id] = contact
      })
      ContactStore.notifyChange()
    })
    
  },
  addContact: (contact, cd) => {
    post(API, {
      authorization: localStorage.token,
      send: {
        contact: contact
      }
    }).then((res)=>{
      _contacts[res.contact.id] = res.contact
      ContactStore.notifyChange()
      if(cd) {
        cd(res.contact)
      }
    })
  },
  notifyChange: () => {
    _changeListeners.forEach(function (listener) {
      listener()
    })
  },
  addChangeListener:  (listener) => {
    _changeListeners.push(listener)
  },

  removeChangeListener: (listener) => {
    _changeListeners = _changeListeners.filter(function (l) {
      return listener !== l
    })
  },
  getContacts : () => {
    const array = []

    for (const id in _contacts)
      array.push(_contacts[id])

    return array
  },
  getContact : (id) => {
    return _contacts[id]
  },
  removeContact : (id)=> {
    destory(API + '/' + id, {
      authorization: localStorage.token
    }).then((res)=>{
      delete _contacts[id]
      ContactStore.notifyChange()
    })
  }
}


export default ContactStore;


