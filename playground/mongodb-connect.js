const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to MongoDB server: \n', err);
    } else {
        console.log('Connected to MongoDB Server.');

        // db.collection('Todos').insertOne({
        //     text: 'Something to do.',
        //     completed: false
        // }, (err, result) => {
        //     if(err) {console.log('Unable to insert data to Todos collection.');}
        //     else {
        //         console.log('Successfully inserted data to Todos collection.');
        //         console.log(JSON.stringify(result.ops, undefined, 2));
        //     }
        // });

        db.collection('Users').insertOne({
            name: 'Surjit Chowdhury',
            age: 21,
            location: 'Bamungachi'
        }, (err, result) => {
            if(err) {
                console.log('Unable to insert data to Users Collection.');
            } else {
                console.log('Successfully inserted data to Users collection.');
                console.log(JSON.stringify(result.ops, undefined, 2));
            }
        });

        db.close();
    }
});