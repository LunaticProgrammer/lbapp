var jwt = require('jsonwebtoken');

module.exports = (req, res) => {

    var credentials = {

        email : req.body.email,
        password : req.body.password
    }

    if(req.body.email == 'user' && req.body.password == 'user')
    {
        jwt.sign(credentials, 'secret', {expiresIn : '1h'},(err , token) => {

            res.json(token);
            console.log(token);
        })

    }else {

        res.send('Login Failed. Try with correct credentials!');
    }
}