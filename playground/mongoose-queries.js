const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {ObjectID} = require('mongodb');

var id = "59563d775fd156e258078b3c1";

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// }, (err) => {
//     console.log('Error: ', err);
// });

// Todo.findOne({
//     _id: id
// }, (err, todo) => {
//     if(err) {console.log('Error: ', err);}
//     else {console.log('Todo: ', todo);}
// });

Todo.findById(id).then((todo) => {
    console.log('Todo By ID: ', todo);
}, (err) => {
    console.log('Error: ', err);
});