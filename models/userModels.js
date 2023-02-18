const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config()// para acceder a la variable de env

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    create_at: {
        type: Date,
        default: new Date() 
    }
});

userSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10); //encriptar contraseña
    return bcrypt.hash(password, salt);
}

userSchema.methods.confirmPassword = function(password) {
    return bcrypt.compare(password, this.password);
}

module.exports = model('User', userSchema)