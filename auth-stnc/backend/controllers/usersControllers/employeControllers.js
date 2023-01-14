const bcrypt = require('bcryptjs')
const User = require('../../models/employe')
const Organismes = require('../../models/organisme')
const formations = require('../../models/formation')



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





// get data findOne
module.exports = {getemploye}