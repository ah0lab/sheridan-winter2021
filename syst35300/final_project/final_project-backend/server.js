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
    phone: String,
    appointments: []
});
//schema.index({"appointments.id": 1}, {unique: true});
const collectionName = 'vaccine';
const vaccine = mongoose.model('assessment_centre', schema, 'vaccine');

const dbName = 'covid19';
const dbPath = path.resolve(__dirname, 'db');
const dbConnString = `mongodb://localhost:27017/${dbName}`;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, PATCH, DELETE, POST");
    res.header("Access-Control-Allow-Headers", "Origin, x-Requested-With, content-type, Accept");
    next();
});

mongoose.connect(dbConnString, {useNewUrlParser: true, useUnifiedTopology: true});

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

    const date = new Date(Date.now());
    let dateString = `${date.getFullYear()}_${date.getDate()}_${date.getMonth()}`
    // TODO export with date time?
    const filename = `${dateString}-output.json`
    const command = `mongoexport -d ${dbName} -c ${collectionName} -o ${path.resolve(__dirname, 'data', 'export', filename)}`

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

app.get('/assessment_centres', (req, res) => {
    vaccine.find({},{_id:0, appointments:0})
        .then(result => {
            res.send(result);
        }, err => {res.send(err.message);})
        .catch(err => {console.log(err);
    });
});

app.get('/assessment_centres/centre', (req, res) => {
    console.log(req.query);
    vaccine.find({location_id:req.get('location_id')}, {appointments:1})
        .then(
            result => {
                res.send(result);
            },
            err => {res.send(err.message);}
        ).catch(err => {console.log(err);});
});

// Retrieve all appointments for a selected centre
app.get('/assessment_centres/centre/appointments', (req, res) => {
    // TODO: Retrieve all appointments for a specific centre
    console.log(req.query.location_id)
    vaccine.find({'location_id': req.query.location_id}, {appointments:1})
        .then(
            result => {
                res.send(result);
            },
            err => {res.send(err.message);}
        ).catch(err => { console.log(err); });
});

// Get information on a single appointment
app.get('/assessment_centres/centre/appointments/appointment', (req, res) => {
    vaccine.find({
        location_id: req.query.location_id,
        appointments: {
            $elemMatch: { time: req.query.time, date: req.query.date }
        },
    }, { _id:0, 'appointments.$': 1}
    ).then(
        result => {
            res.send(result);
        },
        err => {res.send(err.message);}
        ).catch(err => { console.log(err); }
    );
});

// Create a single appointment
app.post('/assessment_centres/centre/appointments/appointment', (req, res) => {
    // TODO: Add Vaccination appointment under selected center to database
    console.log(req.body.time);
    vaccine.findOneAndUpdate({
        location_id: req.body.location_id
    },
    {
        $addToSet: { appointments: {
            date: req.body.date,
            time: req.body.time,
            ohip_number: req.body.ohip_number,
            email: req.body.email
        }}
    }).then(
        result => {
            res.send(res.ok);
            console.log(result);
        },
        err => { res.send(err.message); }
        ).catch( err => { console.log(err);}
    );
});

// Function to export one or all appointments from the database.
//  Filename includes date and time when filename was generated
app.get('/assessment_centres/centre/appointments/export', (req, res) => {
    const exec = require('child_process').exec;
    // TODO export with date time?
    const date = new Date(Date.now());

    let dateString = `${date.getFullYear()}_${date.getDate()}_${date.getMonth()}`;
    const filename = `${dateString}-appointments.json`;
    const command = `mongoexport -d ${dbName} -c ${collectionName} --fields=appointments -o ${path.resolve(__dirname, 'data', 'export', filename)}`
    //const command = `mongoexport -d ${dbName} -c ${collectionName} -q 'db.vaccine.find({'location_id': ${req.query.location_id}}, {appointments:1)' --jsonArray -o ${path.resolve(__dirname, 'data', 'export', filename)}`
    console.log(command);

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

// Function to delete all appointments
app.post('/assessment_centres/centre/appointments/delete', (req, res) => {
    vaccine.findOneAndUpdate({
        location_id: req.body.location_id
    },{
        $set: {appointments: []}
    }).then(
        result => {
            res.send(res.ok);
        },
        err => { res.send(err.message); }
        ).catch( err => {console.log(err);}
    );
});

// Function to delete one appointment
app.post('/assessment_centres/centre/appointments/appointment/delete', (req,res) =>{
    if(!req.body) {
        res.send(500);
        return;
    }
    vaccine.findOneAndUpdate({
        location_id: req.body.location_id,
        //appointments: { $elemMatch: {date: req.query.date, time: req.query.time} }
    }, {
        $pull: { appointments: {
            date: req.body.date,
            time: req.body.time
        }}
    }).then(
        result => {
            console.log(result)
            res.send(res.ok)
        },
        err => { res.send(err.message); }
    ).catch(err => { console.log(err); }
    );
});

// Function to update information of an appointment selected from the list
/*
app.post('/assessment_centres/centre/appointments/appointment/update', (req,res) => {
    vaccine.findOneAndUpdate({
        location_id: req.query.location_id,
        appointments: {$elemMatch: {time: req.query.time, date: req.query.date}}
    },{
        $set: {
            'appointments.$.email': req.query.email,
            'appointments.$.'
        }
    }).then(
        result => {
            console.log(result)
            res.send(res.ok)
        },
        err => { res.send(err.message);}
    ).catch(err =>{ console.log(err); }
    );
});
*/
