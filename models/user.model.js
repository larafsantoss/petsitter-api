var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let bcrypt = require('bcrypt');

var UserSchema = new Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 20,
        unique: [true,'This login already exists!']
    },
    email: {
        type: String,
        validate: {
            validator: function (email) {
                return new RegExp('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$').test(email);
            }
        },
        unique: [true, 'This email already exists!']
    },
    password: {
        type: String
    },
    admin: {
        type: Boolean
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
    password: {
        type: String
    },
    image: {
        type: String
    } 
});

UserSchema.methods.generatePassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};


UserSchema.pre("save", async function () {
    // this.password = await this.generatePassword(this.password);
});


var User = mongoose.model('users', UserSchema);

module.exports = User;