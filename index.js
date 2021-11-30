const express = require('express');
const pug = require('pug');
const routes = require('./routes/routes');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/public')));

app.post('/', urlEncodedParser, (req, res) => {
    console.log(req.body.username);
    if(req.body.username == 'user' && req.body.password == 'pass') {
        req.session.user = {
            isAuthenticated: true,
            username: req.body.username
        };
        res.redirect('/private');
    } else {
        res.redirect('/');
    }
});