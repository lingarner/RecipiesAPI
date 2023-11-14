const model = require('../model/index.js')
const controller = {}

// this route goes to the model and lists the contents of a 
controller.listAllFood =  async function(req, res) {
    try{
      // gets all the trails and info from db
      const foodList = await model.getFood();
      if(gearList){
        res.status(200).send(foodList)
      }else{
        throw new Error("Food Not Found")
      }
    } catch (error) {
        res.status(500)
    }
  }

module.exports = controller;