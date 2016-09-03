import request from 'superagent';
localStorage.token = localStorage.token || (Date.now()*Math.random())
module.exports = function (url ,obj) {
  return new Promise(function(resolve, reject){
    request
      .get(url)
      .set('authorization', obj.authorization)
      .end((err, res)=>{
        if(err) {
          reject(err)
        } else {
          resolve(JSON.parse(res.text))
        }
      })
  })
}


