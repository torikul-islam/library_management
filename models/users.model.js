const crypto = require('crypto');
const Joi = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");
const config = require("config");




const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    role: {
        type: String,
        enum: ['librarian', 'student'],
        default: 'student'
    }
});


usersSchema.methods.hashPassword = function () {
    this.password = crypto.pbkdf2Sync(this.password, 'salt', 100000, 64, 'sha512').toString('hex')
};

usersSchema.methods.comparePassword = function (password) {
    const result = crypto.pbkdf2Sync(password, 'salt', 100000, 64, 'sha512').toString('hex');
    return result === this.password;
}

usersSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
        _id: this._id,
        username: this.username,
        role: this.role
    }, config.get('jwtSecret'), { expiresIn: '1 days' });
    return token;
};



const User = mongoose.model('User', usersSchema);


function validateUser(user) {
    const schema = Joi.object({
        username: Joi.string().min(3).max(50).required(),
        password: Joi.string().min(5).max(1024).required(),
        role: Joi.string().required()
    });

    return schema.validate(user, {
        abortEarly: false, errors: {
            wrap: {
                label: ''
            }
        }
    });
}


module.exports.usersSchema = usersSchema;
module.exports.User = User;
module.exports.validate = validateUser;