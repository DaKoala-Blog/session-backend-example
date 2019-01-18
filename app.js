const express = require('express');
const session = require('express-session');

const app = express();
app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.set('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(session({
    secret: 'billy',
    resave: false,
    saveUninitialized: false,
}));

app.get('/time', (req, res) => {
    if (!req.session.time) {
        req.session.time = Date();
    }
    res.send(req.session.time);
});

app.listen(3000);
