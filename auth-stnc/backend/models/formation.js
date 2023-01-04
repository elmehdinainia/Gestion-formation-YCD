const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,

    },
    images:{
        type: Array,
        required: true,
        trim: true
    },
    description: {
        type: String,
        
    },
    datedebut: {
        type: String,        
    },
    datefin: {
        type: String,        
    },


    


})

module.exports = mongoose.model('Formation', userSchema)