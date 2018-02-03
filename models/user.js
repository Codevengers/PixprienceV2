/*jslint node: true */
/*jslint es6 */
"use strict";


const mongoose = require("mongoose");

let userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);

