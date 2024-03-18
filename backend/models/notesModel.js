const mongoose = require('mongoose')
const Schema = mongoose.Schema

//This is the model class which defines the attributes of the Note
const noteSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type:String,
        required: true
    }
},{
    timestamps: true,
})

module.exports = mongoose.model("Notes", noteSchema)