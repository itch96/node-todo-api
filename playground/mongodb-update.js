const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to MongoDB server: \n', err);
    } else {
        console.log('Connected to MongoDB Server.');
        
        // db.collection('Todos').findOneAndUpdate({
        //     _id: new ObjectID("5955bfce33e00fbb1dd7fd40")
        // }, {
        //     $set: {completed: true}
        // }, {
        //     returnOriginal: false
        // }, (err, result) => {
        //     if(err) {console.log('Unable to update document.\n', err);}
        //     else {console.log('Document updated.\n', result);}
        // });

        db.collection('Users').findOneAndUpdate({
            name: 'Jen' 
        }, {
            $set: {
                name: 'Rahul'
            },
            $inc: {age: 1}
        }, {
            returnOriginal: false
        }, (err, result) => {
            if(err) {console.log('Error updating data.\n', err);}
            else {console.log('Update successful\n', result);}
        });
   
        db.close();
    }
});