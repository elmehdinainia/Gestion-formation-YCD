const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    ville: {
        type: String,        
    },
    address: {
        type: String,        
    },
    phone: {
        type: String,        
    },



    


})

module.exports = mongoose.model('Organismes', userSchema)