const express = require('express');
const app = express();
const port = 8887;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.write('<!doctype html><html lang="en"><head><meta charset="utf-8"' + 
              '<title>GET Request</title></head><h3>GET Request>/h3><div><ul>');
    next(); 
})

app.post('/insert', (req, res) => {
    res.write('<h2>Hello Class - ' + req.method + '</h2>');
    for (const key in input) {
        res.write('<li>' + key + ' - ' + input[key] + '</li>'); 
    }
    res.end();
})

app.listen(8887, () => console.log(`Server running at localhost: ${port}!`));