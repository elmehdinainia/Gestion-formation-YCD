const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const db = mongoose.connect(process.env.DB,  { useNewUrlParser: true }, () => console.log('Database Connected'));

module.exports = db