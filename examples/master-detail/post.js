import request from 'superagent';

module.exports = function (url, obj) {
  return new Promise(function(resolve, reject){
    request
      .post(url)
      .set('Content-Type', 'application/json;charset=UTF-8')
      .set('authorization', obj.authorization)
      .send(JSON.stringify(obj.send))
      .end((err, res)=>{
        if(err) {
          reject(err)
        } else {
          resolve(JSON.parse(res.text))
        }
      })
  })
}


