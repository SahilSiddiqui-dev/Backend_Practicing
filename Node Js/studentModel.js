const mongoose=require('mongoose');
const studentSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    course : {
        type: String,
        required : true
    }
})

const Students=mongoose.model("Student", studentSchema)
module.exports = Students