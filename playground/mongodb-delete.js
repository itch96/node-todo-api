const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to MongoDB server: \n', err);
    } else {
        console.log('Connected to MongoDB Server.');
        
        // deleteMany
        // db.collection('Todos').deleteMany({text: 'Eat lunch'}, (err, result) => {
        //     if(err) {console.log('Unable to delete. \n', err);}
        //     else {
        //         console.log('Deleted. \n', result);
        //     }
        // });

        // deleteOne
        // db.collection('Todos').deleteOne({text: 'Eat lunch'}, (err, result) => {
        //     if(err) {console.log('Unable to delete. \n', err);}
        //     else {
        //         console.log('Deleted. \n', result);
        //     }
        // });

        // findOneAndDelete
        // db.collection('Todos').findOneAndDelete({completed: false}, (err, result) => {
        //     if(err) {console.log('Unable to delete. \n', err);}
        //     else {
        //         console.log('Deleted. \n', result);
        //     }
        // });

        // challenge
        // db.collection('Users').deleteMany({age: 21}, (err, result) => {
        //     if(err) {console.log('Unable to delete data \n', err);}
        //     else {console.log('Data deleted. \n', result);}
        // });

        db.collection('Users').findOneAndDelete({_id: new ObjectID("5955ba4933e00fbb1dd7fc84")}, (err, result) => {
            if(err) {console.log('Unable to delete data.\n', err);}
            else {console.log('Data deleted.\n', result);}
        });
        db.close();
    }
});