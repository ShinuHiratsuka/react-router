import request from 'superagent';

module.exports = function (url, obj) {
  return new Promise(function(resolve, reject){
    request
      .delete(url)
      .set('authorization', obj.authorization)
      .end((err, res)=>{
        if(err) {
          reject(err)
        } else {
          resolve()
        }
      })
  })
}


