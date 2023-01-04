const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config()
const port = process.env.PORT || 4444

require('./config/db')
require('./models')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const authRoute = require('./routes/authRoute')
const formation = require('./routes/userRoute/formationRoute')


app.use('/gestion/auth/user',authRoute )
app.use('/formation/',formation)




app.listen(port,()=>{
    console.log(`${port} is running`)
})