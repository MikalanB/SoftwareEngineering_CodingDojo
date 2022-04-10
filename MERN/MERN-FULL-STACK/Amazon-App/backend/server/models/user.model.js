const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minLength: [2, "First Name needs to be at least 2 characters."]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minLength: [2, "Last Name needs to be at least 2 characters."]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email."
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },
    address: {
        type: String,
        required: [true, "Address is required."],
        minLength: [5, "Address must be at least 5 characters long"]
    },
    orders: {
        type: Array
    },

    }, {timestamps: true});

    UserSchema.virtual('confirmPassword')
        .get( () => this._confirmPassword )
        .set( value => this._confirmPassword = value );
    
    UserSchema.pre('save', function(next) {
        bcrypt.hash(this.password, 10)
            .then(hash => {
            this.password = hash;
            next();
            });
        });

const User = mongoose.model('User', UserSchema);
module.exports = User;