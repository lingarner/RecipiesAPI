import { check } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationError } from 'express-validator';

export const newRecipe = [
    check('ingredients', 'Ingredients must be a string').isString().notEmpty(),
    check('recipeTitle', 'Recipe Title must be a string').isString().notEmpty(),
    check('prepTimeorbakingTime', 'Prep time must be a string').isString().notEmpty(),
    check('comments', 'Comments must be a string').isString().notEmpty(),
    check('instructions', 'Instructions must be a string').isString().notEmpty(),
    check('utensils', 'Utensils must be a string').isString().notEmpty()
];

export const checkValidation = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const firstError: ValidationError = errors.array()[0];
        return res.status(400).json({ errors: firstError.msg });
    }

    next();
};
