module.exports = {
  path: 'calendar',
  // getComponent(nextState, cb) {
  //   require.ensure([], (require) => {
  //     cb(null, require('./components/Calendar'))
  //   })
  // }
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Calendar'))
    },'hohe')
  }
}
