// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
//object destructure
var user = {name: 'bob', age: 25};
var {name} = user;

//inserting data
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if(err){
//        return console.log('Unable to connect to MongoDB serever');
//     }
//     console.log('Connected to MongoDB server');

//     db.collection('Todos').insertOne({
//         text: 'Something to do',
//         completed: false
//     }, (err, result) => {
//         if(err){
//            return console.log('Unable to connect to MongoDB serever', err);
//         }
//         // console.log(JSON.stringify(result.ops, undefined, 2));
//     });

//     db.collection('Users').insertOne({
//         name: 'Dalmar Segrest- Brooks',
//         age: 24,
//         location: 'Johnson City, TN'
//     }, (err, result) => {
//         if(err){
//             return console.log(err);
//         }
//         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
//     });

//     db.close();
// });

//reading from database.
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to server', err);
    }
    db.collection('Todos').find({completed: false}).toArray((err,docs) => {
        if(err){
            return console.log('Unable to fetch data', err);
        }
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
        db.close();
    });
    db.collection('Todos').count().then((count) => {
        console.log(`Todos count: ${count}`);
    },(err) => {
        console.log('Unable to fetch todos', err);
    });
    db.close();
});

