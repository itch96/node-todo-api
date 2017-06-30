const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to MongoDB server: \n', err);
    } else {
        console.log('Connected to MongoDB Server.');
        
        // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        //     console.log('Todos');
        //     console.log(JSON.stringify(docs, undefined, 2));
        // }, (err) => {
        //     console.log('Unable to fetch Todos. ', err);
        // });

        db.collection('Users').find({prize: 23}).toArray((err, docs) => {
            if(err) {console.log('Unable to fetch data. \n', err);}
            else {
                console.log(JSON.stringify(docs, undefined, 2));
            }
        })

        db.close();
    }
});