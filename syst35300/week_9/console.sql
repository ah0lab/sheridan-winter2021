// Create new database
use week_9
// Create users collection
db.createCollection('users')

// insert doc into users collection
db.users.insertOne({
    username: 'abc123',
    age: 55,
    status: 'A'
})

// insert doc using user-specified primary key
db.users.insertOne({
    _id: '888',
    username: 'ccd727',
    age: 55,
    status: 'A'
})


// retrieve all docs
db.users.find()

// retrieve first doc that matches
db.users.findOne()

// retrieve doc by exact field match
db.users.find({status:'A'})
db.users.find({status:'A', username:'ccd727'})

// retrieve specific fields of found doc
db.users.find({status:'A'}, {username:1, age:1})

// omit specific fields of found doc
db.users.find({status:'A'}, {username:0, age:0})