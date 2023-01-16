const bcrypt = require('bcryptjs')
const User = require('../../models/employe')
const Organismes = require('../../models/organisme')
const formations = require('../../models/formation')
const Storage = require('local-storage')
const jwt = require('jsonwebtoken')
const { populate } = require('../../models/employe')



const getemploye= async (req, res) => {

  const id_role = '63b42f94f9bbeb1d0a78c969'
  const findclient = await User.find({ role: id_role })
  .populate("organisme").populate("formation")


  if (findclient) {

    res.status(200).json({ code: 200, message: "Get Formation",findclient });

  }
  else {
    throw Error('Not User to role client')
  }

}

const getFormation = async(req, res) => {
  const token = Storage('token')
  if(token){
    const token_user = await jwt.verify(token, process.env.TOKEN_SECRET)
    if(token_user){
      const user = await User.findById({_id: token_user._id})
      .populate('organisme').populate('formation')
      res.json({user:user})
    }
  }
}





// get data findOne
module.exports = {getemploye, getFormation}