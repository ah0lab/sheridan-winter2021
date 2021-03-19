const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 8887;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-With," +
        "Content-Type, application/json");
    next();
})

app.get('/api/covidstats/bystatus', (req, res) => {
    try {
        fs.readFile(path.resolve(__dirname, 'data/cases_by_status_and_phu.json'),
            'utf8', ((err, data) => {
                if (err) throw err;
                res.json(JSON.parse(data));
                res.end();
            })
        );
    } catch(error) {
       res.error();
       res.end();
    }
});

app.get('/api/covidstats/ongoing', ((req, res) => {
    try {
        fs.readFile(path.resolve(__dirname, 'data/ongoing_outbreaks.json'),
            'utf8', ((err, data) => {
                if (err) throw err;
                res.json(JSON.parse(data));
                res.end();
            })
        );
    } catch(error) {
        res.error();
        res.end();
    }
}));

app.get('/api/covidstats/schools/summary', (((req, res) => {
    try {
        fs.readFile(path.resolve(__dirname, 'data/schoolcovidsummary.json'),
            'utf8', ((err, data) => {
                if (err) throw err;
                res.json(JSON.parse(data));
                res.end();
            })
        );
    } catch(error) {
        res.error();
        res.end();
    }
})));

app.get('/api/covidstats/schools/testing', (((req, res) => {
    try {
        fs.readFile(path.resolve(__dirname, 'data/schoolcovidtesting.json'),
            'utf8', ((err, data) => {
                if (err) throw err;
                res.json(JSON.parse(data));
                res.end();
            })
        );
    } catch(error) {
        res.error();
        res.end();
    }
})));

app.get('/api/covidstats/schools/activepartners', (((req, res) => {
    try {
        fs.readFile(path.resolve(__dirname, 'data/schoolpartnersactivecovid.json'),
            'utf8', ((err, data) => {
                if (err) throw err;
                res.json(JSON.parse(data));
                res.end();
            })
        );
    } catch(error) {
        res.error();
        res.end();
    }
})));

app.listen(8887, () => console.log(`Server running at localhost: ${port}`));
