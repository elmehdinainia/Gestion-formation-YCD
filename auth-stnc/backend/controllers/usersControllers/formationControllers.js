
 const Formation = require('../../models/formation')
 //les package de file(images)
const fs = require('fs');          
const path = require('path');

 const CreatFormation = async(req,res)=>{
              const { name, description,datedebut,datefin} = req.body;
              const newFormation = {
                name: name,
                description: description,
                datedebut: datedebut,
                datefin:datefin,
                images: req.file.filename
            
              }
              // console.log(newProduct);
              //validation des field
              const isformfield = Object.values(newFormation).every((value) => {
                if (value) {
                  return true;
                }
                else {
                  return false;
                }
              })
            
              console.log(isformfield);
            
            
              await Formation.create(newFormation);
            
            
              try {
                res.json("formation is created")
            
              } catch (error) {
                throw Error("product is not added");
            
              }

 }
 const deletformation = async (req, res) => {

                  const id = req.params.id;
                  try {
                    const result = await Formation.findById(id);

                  console.log(result);

                  try {
                    fs.unlinkSync(path.join(process.cwd(), "public/images/", result.images[0]));
                    console.log();
                    console.log('deleted from fs file');
              
                  } catch (err) {
                    console.log(err)
                  }
                  await Formation.findOneAndDelete({ _id: id });
                  res.status(200).json({ code: 200, message: "deleted Formation" });
                } catch (error) {
                  throw new Error(error);
                }
  
 }
 const updateformation = async (req, res) => {
                const {id} = req.params;
                const { name, description,datedebut,datefin} = req.body;
                const newFormation = {
                  name: name,
                  description: description,
                  datedebut: datedebut,
                  datefin:datefin,
                  images: req.file.filename

                }

                try {
                  const data = await Formation.findByIdAndUpdate({ _id: id},newFormation )
                  res.status(200).json({ code: 200, message: "updated Formation" });
                } catch (error) {
                  throw new Error(error);

                }

  
}
const getFormation = async(req,res) => {





}





 module.exports = {CreatFormation,deletformation,updateformation,getFormation}