// controllers/baseController.ts

import { Request, Response } from 'express';
import { ObjectId, InsertOneResult, UpdateResult, DeleteResult } from 'mongodb';
import { getDb } from '../db/connection';

export async function getAll(req: Request, res: Response): Promise<void> {
    try {
        const collection = getDb().collection('recipies');
        const result = await collection.find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json(error.message || 'Something went wrong');
    }
}

export async function getSingle(req: Request, res: Response): Promise<void> {
    try {
        if (!ObjectId.isValid(req.params.id)) {
            res.status(400).json('Must use a valid id to find a recipe.');
            return;
        }

        const id = new ObjectId(req.params.id);
        const collection = getDb().collection('recipies');
        const result = await collection.findOne({ _id: id });

        if (result) {
            res.status(200).send(result);
        } else {
            throw new Error('Recipe not found.');
        }
    } catch (error: any) {
        res.status(500).json(error.message || 'Something went wrong');
    }
}

export async function deleteSingle(req: Request, res: Response): Promise<void> {
    try {
        if (!ObjectId.isValid(req.params.id)) {
            res.status(400).json('Must use a valid id to delete a recipe.');
            return;
        }

        const id = new ObjectId(req.params.id);
        const result = await getDb().collection('recipies').deleteOne({ _id: id });

        if (result.deletedCount === 1) {
            res.status(200).json({ message: 'Recipe deleted successfully.' });
        } else {
            throw new Error('Recipe not found.');
        }
    } catch (error: any) {
        res.status(500).json(error.message || 'Something went wrong');
    }
}

export async function addSingle(req: Request, res: Response): Promise<void> {
    try {
        const recipe = {
            ingredients: req.body.ingredients,
            recipeTitle: req.body.recipeTitle,
            prepTimeorbakingTime: req.body.prepTimeorbakingTime,
            comments: req.body.comments,
            instructions: req.body.instructions,
            utensils: req.body.utensils
        };

        const result = await getDb().collection('recipies').insertOne(recipe);

        if (result.acknowledged) {
            res.status(200).json({ message: 'Recipe added successfully.' });
        } else {
            throw new Error('Failed to add recipe.');
        }
    } catch (error: any) {
        res.status(500).json(error.message || 'Something went wrong');
    }
}

export async function editSingle(req: Request, res: Response): Promise<void> {
    try {
        if (!ObjectId.isValid(req.params.id)) {
            res.status(400).json('Must use a valid id to edit a recipe.');
            return;
        }

        const recipe = {
            ingredients: req.body.ingredients,
            recipeTitle: req.body.recipeTitle,
            prepTimeorbakingTime: req.body.prepTimeorbakingTime,
            comments: req.body.comments,
            instructions: req.body.instructions,
            utensils: req.body.utensils
        };

        const id = new ObjectId(req.params.id);
        const result = await getDb().collection('recipies').replaceOne({ _id: id }, recipe);

        if (result.modifiedCount === 1) {
            res.status(200).json({ message: 'Recipe edited successfully.' });
        } else {
            throw new Error('Recipe not found.');
        }
    } catch (error: any) {
        res.status(500).json(error.message || 'Something went wrong');
    }
}
