const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

async function getAll(req, res) {
    // #swagger.description = 'Get all the accounts'
    const result = await mongodb.getDb().db('recipies').collection('breakfast').find();
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
    // #swagger.description = 'Get all the accounts'
    const result = await mongodb.getDb().db('recipies').collection('breakfast').find();
    result.toArray().then((lists) => {
        if(lists) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        } else {
            res.status(500).json(result || 'Something went wrong');
        }
    });
}




module.exports = {getAll, getSingle}