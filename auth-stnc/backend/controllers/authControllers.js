const bcrypt = require('bcryptjs')
const storage = require('local-storage')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/employe')
const Roles = require('../models/role')


const register = async(req,res)=>{

                 const {firstname,lastname,email,phone,password} = req.body
                 // check les input
                if(firstname==="" || lastname==="" || email==="" || phone==="" || password==""){
                  res.status(404).send("enter len info please")
                }
                  //find model User
                const emailexist = await User.findOne({email})

                 if(emailexist) res.status(400).send("the email already exist")

                // hash password
                const slat = await bcrypt.genSalt(10)
                const password_Hash = await bcrypt.hash(password,slat)
                // insere role par defaut manager
                const role = "63b42f94f9bbeb1d0a78c967"
                // create new user 
                    const user = await User.create({
                      firstname,
                      lastname,
                      phone,
                      email,
                      password: password_Hash,
                      role,
              
                    })
                if (user) res.status(200).send("user created")
                if (!user)  res.send("user not created")
 }

     
    
    


 const login = async(req,res) =>{
              const {email,password}= req.body
            //validation
            if(email===""||password==="") res.status(400).send("enter your information")
            const user = await User.findOne({email})

            if(!user) return res.status(400).send('email or password is  wrong')
            // password is correct 
            const validpass = await bcrypt.compare(password,user.password)
            if(!validpass)res.status(400).send('password is not correct')
            //creation de role 
            const role = await Roles.findById({ _id: user.role })
            console.log(role)
            //create and assign a token
            const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET)
            storage('token',token)
            // res.header('auth-token',token).send(token)
            res.json({
                first_name: user.firstname,
                last_name: user.lastname,
                email: user.email,
                phone:user.phone,
                role: role.name,
                token: token
            })

  }


module.exports = {login,register}