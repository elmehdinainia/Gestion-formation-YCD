
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Users: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'   
}
],
organisme: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organismes'   
}
],
formation: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Formation'   
}
]

})

module.exports = mongoose.model('Historique', userSchema)