const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: {
        type:String,
        trim: true,
        required: true,
    },
    age: {
        type:Number,
        trim: true,
        required: true,
    },
    job: {
        type:String,
        trim: true,
        required: true,
    },
    sifre: {
        type: String,
        required: true,
        minlength:6,
        trim:true
    }
}, {collection :'test', timestamps:true});

const User = mongoose.model('User', UserSchema);

module.exports = User;
