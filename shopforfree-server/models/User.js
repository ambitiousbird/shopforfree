var mongoose = require('mongoose');
var User = new mongoose.Schema({
    title: {type: String, defalut: ''},
    fname: {type: String, default: ''},
    lname: {type: String, default: ''},
    email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"],defalut: ''},
    password: {type: String, default: ''},
});
module.exports = mongoose.model('tbl_user', User);
