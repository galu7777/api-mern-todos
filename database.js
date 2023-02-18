const mongoose = require('mongoose');
const db = mongoose.connection;
const uri = "mongodb://mongo:NkddVMhRNqc6nSdv0r78@containers-us-west-72.railway.app:6509"
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
