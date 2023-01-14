const User = require("../../models/employe");
const bcrypt = require('bcryptjs')
const Historique = require("../../models/historique");

// add employees
const addemploye = async (req, res) => {
  const { firstname, lastname, email, phone, organisme, password } = req.body;
  // check les input
  if (
    firstname === "" ||
    lastname === "" ||
    email === "" ||
    phone === "" ||
    organisme === "" ||

    password == ""
  ) {
    res.status(404).send("enter len info please");
  }
  //find model User
  const emailexist = await User.findOne({ email });
  // phone

  if (emailexist) res.status(400).send("the email already exist");

  // hash password
  const slat = await bcrypt.genSalt(10);
  const password_Hash = await bcrypt.hash(password, slat);
  // insere role par defaut employe
  const role = "63b42f94f9bbeb1d0a78c969";
  // create new user
  const user = await User.create({
    firstname,
    lastname,
    phone,
    email,
    organisme,
    password: password_Hash,
    role,
  });
  if (user) res.status(200).json({ msg: "user created", user });
  if (!user) throw Error("user not created");
};




const editemploye = async (req, res) => {
  const { id } = req.params;
  const { organisme, formation } = req.body;
  if (formation == "" || organisme == "") throw Error("Please your file");

  const updatedata = {
    organisme: organisme,
    formation: formation,
  };

  const User_Updated = await User.findByIdAndUpdate(
    { _id: id },
    { $set: updatedata }
  );
  if (User_Updated) {
    const Ajoute_data_historique = {
      Users: id,
      organisme: organisme,
      formation: formation,
    };
    // sauvgarder les chngement dans un tableau historique
    const getHistorique = await Historique.findOne({
      Users: Ajoute_data_historique.Users,
      organisme: Ajoute_data_historique.organisme,
      formation: Ajoute_data_historique.formation,
    });
    if (!getHistorique) {
      const Save_data_historique = await Historique.create({
        Users: Ajoute_data_historique.Users,
        organisme: Ajoute_data_historique.organisme,
        formation: Ajoute_data_historique.formation,
      });
      if (Save_data_historique) {
        res.send(Save_data_historique);
      } else {
        throw Error("update no successfuly");
      }
    } else {
      res.send("deja existe");
    }

  }
};

const deleteemploye = async(req, res) => {
  const {id} =req.params

  const findclient = await User.findByIdAndDelete({_id:id})
  if(findclient){
    await findclient.remove()
    res.send("Delete_")
  }else{
    res.send("error");
  }
  

}

module.exports = { editemploye, addemploye ,deleteemploye};
