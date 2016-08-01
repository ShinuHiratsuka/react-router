module.exports = {
  login(email, pass, cd) {
    pretendRequest(email, pass, (res) => {
      if(res.authenticated) {
        localStorage.token = res.token
        this.onChange(true)
        if(cd) cd(true)
      } else {
        if(cd) cd(false) 
      }
    })
  },
  getToken() {

  },
  logout(cd) {
    delete localStorage.token
    if(cd) cd()
    this.onChange(false)
  },
  loggedIn() {
    return !!localStorage.token
  },
  onChange() {}
}

function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    if (email === 'joe@example.com' && pass === 'password1') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({
        authenticated: false
      })
    }
  }, 0)
}