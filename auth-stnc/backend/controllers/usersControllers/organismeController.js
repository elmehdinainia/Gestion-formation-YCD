
const Organisme = require('../../models/organisme')
//les package de file(images)
const fs = require('fs');          
const path = require('path');

const addorganisme = async(req,res)=>{
  
            const {name,ville,address,phone} = req.body
            const dataorgaisme = {
                name:name, 
                ville:ville,
                address:address,
                phone:phone
             }
              try {
               await Organisme.create(dataorgaisme)
                res.status(200).json(dataorgaisme)
              } catch (error) {
                throw Error("product is not added");
              }
            
  }

const deletorganisme = async (req, res) => {
          const {id} = req.params
          const findid = await Organisme.findById(id)
          if(findid){
            await findid.remove()
            res.status(200).json({ code: 200, message: "deleted organisme" });
   }
}

const updateorganisme = async (req, res) => {

              const {id} = req.params
              const {name,ville,address,phone} = req.body
              const dataorgaisme = {
                  name:name, 
                  ville:ville,
                  address:address,
                  phone:phone
              }
              try {
                await Organisme.findByIdAndUpdate({_id:id},dataorgaisme)
                res.status(200).json({ code: 200, message: "update organisme succesfuly",dataorgaisme });

              } catch (error) {
                throw Error("product is not added");

              }
}

const getOrganisme = async(req,res) => {

          const getdata = await Organisme.find()
          if(getdata){
          res.status(200).json({ code: 200, message: "Get Formation",getdata });
          }else{
        
          throw Error("product is not added");}

  }







module.exports = {addorganisme,deletorganisme,updateorganisme,getOrganisme}