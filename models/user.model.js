var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 20,
        unique: [true, 'This login already exists!']
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (email) {
                return new RegExp('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$').test(email);
            }
        },
        unique: [true, 'This email already exists!']
    },
    neighbourhood: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
});

var User = mongoose.model('users', UserSchema);

module.exports = User;