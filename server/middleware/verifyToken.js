var decodedToken='';
var jwt = require('jsonwebtoken');

module.exports = (req,res,next) =>{
  let token = req.params[0].token;

  jwt.verify(token,'secret', function(err, tokendata){
    if(err){
      return res.status(400).json({message:' Unauthorized request'});
    }
    if(tokendata){
      decodedToken = tokendata;
      next();
    }
  })
}
