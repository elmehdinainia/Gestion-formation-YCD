const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,        
    },
    email: {
        type: String,        
    },
    phone: {
        type: String,        
    },
    password: {
        type: String,        
    },
    organisme: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organismes'   
    }
    ],
    role: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'   
    }
    ],
    formation: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Formation'   
    }
    ],

    


})

module.exports = mongoose.model('Users', userSchema)