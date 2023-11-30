const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

async function getAll(req, res) {
    // #swagger.description = 'Get all the recipes'
    const result = await mongodb.getDb().db('recipies').collection(req.baseUrl.substring(1)).find();
    console.log(result)
    result.toArray().then((lists) => {
        if(lists) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(lists);
        } else {
            res.status(500).send(result || 'Something went wrong');
        }
    });

}

async function getSingle(req, res) {
    // #swagger.description = 'Get one recipe'
    const id = new ObjectId(req.params.id);
    console.log(id)
    const result = await mongodb.getDb().db('recipies').collection(req.baseUrl.substring(1)).findOne({_id:id});
    if(result){
        res.status(200).send(result)
    } else{
        throw new Error('Some error occurred while getting that recipe.')
    }
}

async function deleteSingle(req, res){
    // #swagger.description = 'Delete one recipe'
    try {
        const id = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db('recipies').collection(req.baseUrl.substring(1)).deleteOne({_id:id});
        if(result){
            res.status(200).send(result)
        } else{
            throw new Error('Some error occurred while deleting that recipe.')
        }
    } catch (error){
      res.status(500).json(error.message || 'Some error occurred while deleting that recipe.')
    }
};

async function addSingle(req, res){
    // #swagger.description = 'Add one recipe'
    try {
        const recipe = {
            ingredients: req.body.ingredients, 
            RecipeTitle: req.body.RecipeTitle, 
            prepTimeorbakingTime: req.body.prepTimeorbakingTime, 
            comments: req.body.comments, 
            instructions: req.body.instructions, 
            utensils: req.body.utensils
        }

        const result = await mongodb.getDb().db('recipies').collection(req.baseUrl.substring(1)).insertOne(recipe);
        if(result){
            res.status(200).send(result)
        } else{
            throw new Error('Some error occurred while deleting that recipe.')
        }
    } catch (error){
      res.status(500).json(error.message || 'Some error occurred while deleting that recipe.')
    }
};

async function editSingle(req, res){
    // #swagger.description = 'Edit one recipe'
    try {
        const recipe = {
            ingredients: req.body.ingredients, 
            RecipeTitle: req.body.RecipeTitle, 
            prepTimeorbakingTime: req.body.prepTimeorbakingTime, 
            comments: req.body.comments, 
            instructions: req.body.instructions, 
            utensils: req.body.utensils
        }
        const id = new ObjectId(req.params.id);

        const result = await mongodb.getDb().db('recipies').collection(req.baseUrl.substring(1)).replaceOne({_id:id},recipe);
        if(result){
            res.status(200).send(result)
        } else{
            throw new Error('Some error occurred while editing that recipe.')
        }
    } catch (error){
      res.status(500).json(error.message || 'Some error occurred while editing that recipe.')
    }
};



module.exports = {getAll, getSingle, deleteSingle, addSingle, editSingle}