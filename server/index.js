var express = require('express');
var app = express();
var login = require('./controllers/login');
var expressJwt = require('express-jwt');
var cors = require('cors');
var getusername = require('./controllers/users');

var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');

    app.use(bodyParser.json());

    app.use(cors({
        origin:'http://localhost:4200'
    }));

    app.get('/', (req, res) =>  {

        res.send('Welcome to app');
    });

    app.post('/login', login);
    app.get('/getusername', getusername);

app.listen(4000, () => {
    console.log('app listening on port 4000');
});