const mongoose = require('mongoose')
const teacherSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    teaches : {
        type: String,
        required : true
    }
})
const Teachers =mongoose.model("teacher", teacherSchema)
module.exports = Teachers