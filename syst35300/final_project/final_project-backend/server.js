const path = require('path')
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8887;
const bodyParser = require('body-parser');

const schema = new mongoose.Schema({
    active: String,
    location_id: Number,
    location_name: String,
    operated_by: String,
    city: String,
    address: String,
    postal_code: String,
    province: String,
    phone: String
});
const collectionName = 'vaccine';
const assCentre = mongoose.model('assessment_centre', schema, 'vaccine');

const dbName = 'covid19';
const dbPath = path.resolve(__dirname, 'db');
const dbConnString = `mongodb://localhost:27017/${dbName}`;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
    next();
});
app.listen(port, () => console.log(`Server running at localhost:${port}!`));

app.get('/dbImport', (req, res) => {
    const exec = require('child_process').exec;
    const command = `mongoimport -d ${dbName} -c ${collectionName} --jsonArray --file=${path.resolve(__dirname, 'data', 'import', 'assessment_centre_locations.json')}`

    exec(command, (error, stdout, stderr) => {
        if(error) {
            console.log(`error: ${error}`);
            res.send(error);
        } else if (stderr) {
            console.log(`stderr: ${stderr}`);
            res.send(stderr);
        } else if (stdout) {
            console.log(`stdout: ${stdout}`);
            res.send(stdout);
        } else { res.send('Error'); }
    });
});

app.get('/dbExport', (req, res) => {
    const exec = require('child_process').exec;
    const command = `mongoexport -d ${dbName} -c ${collectionName} -o ${path.resolve(__dirname, 'data', 'export', 'output.json')}`

    exec(command, (error, stdout, stderr) => {
        if(error) {
            console.log(`error: ${error}`);
            res.send(error);
        } else if (stderr) {
            console.log(`stderr: ${stderr}`);
            res.send(stderr);
        } else if (stdout) {
            console.log(`stdout: ${stdout}`);
            res.send(stdout);
        } else { res.send('Error'); }
    });
});
