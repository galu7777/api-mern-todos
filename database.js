const mongoose = require('mongoose');
const db = mongoose.connection;
const uri = "mongodb://127.0.0.1:27017/todoDataBase"
mongoose.set('strictQuery', false)

function connectDB() {
    mongoose.connect(uri)

    db.on('open' , _ => {
        console.log('Database connected')
    });

    db.on('error' , err => {
        console.log(err);
    });
};

connectDB();