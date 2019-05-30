const mailer = require('./test_mailer');
const auth = require('./authorization');
const express = require('express');
var app = express();
var port = 8000;

app.use(express.static(__dirname + '/'));
app.use(express.json());
auth.initUsers();

app.post('/send/', async function(req, res) {
    let token = auth.generateToken();
    auth.loadUser(req.body.email);
    await mailer.sendTestMail(req.body.email, token).catch(function (err) {
        console.log(req.params);
        console.log(err);
    });
    await res.sendStatus(200);
});

app.get('/login/:token', async function(req, res){
    let token = req.params.token;
    let logged_in = auth.compareToken(token);
    if(logged_in){
        console.log(auth.getUser());
        await res.sendStatus(200);
    }
    else{
        await res.sendStatus(400);
    }
});

app.listen(port);
console.log('server on ' + port);