const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

async function getAll(req, res) {
    // #swagger.description = 'Get all the recipes'
    const result = await mongodb.getDb().db('recipies').collection(req.baseUrl.substring(1)).find();
    result.toArray().then((lists) => {
        if(lists) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        } else {
            res.status(500).json(result || 'Something went wrong');
        }
    });

}

async function getSingle(req, res) {
    // #swagger.description = 'Get one recipe'
    const id = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('recipies').collection(req.baseUrl.substring(1)).find({_id:id});
    result.toArray().then((lists) => {
        if(lists.empty) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        } else {
            res.status(500).json(result || 'Something went wrong');
        }
    });
}

async function deleteSingle(req, res){
    const id = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('recipies').collection(req.baseUrl.substring(1)).deleteOne({_id:id});
    if(result) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } else {
        res.status(500).json(result || 'Something went wrong');
    }
};





module.exports = {getAll, getSingle, deleteSingle}