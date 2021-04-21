const express = require('express');
const bodyParser = require('body-parser')
const rng = require('./rng.js');

const app = express();
const port = 8887;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-With," +
        "Content-Type, application/json");
    next();
});

app.listen(port, () => console.log(`Server running at localhost:${port}`));

app.get('/guess', (req, res) => {
    const guess = parseInt(req.query.guess);
    const answer = rng.getRandomNumber();
    console.log(guess);
    console.log(answer);

    if(guess === answer) {
        console.log("CORRECT");
        res.send({result: 0});
    } else {
        console.log("WRONG");
        res.send({result: 1});
    }
});
