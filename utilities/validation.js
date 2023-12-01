const { check } = require('express-validator');
const { validationResult } = require('express-validator');

exports.newRecipe = [
    check('ingredients', 'Ingredients must be a string').isString().notEmpty(),
    check('recipeTitle', 'Recipe Title must be a string').isString().notEmpty(),
    check('prepTimeorbakingTime', 'Prep time must be a email').isString().notEmpty(),
    check('comments', 'Comments must be a string').isString().notEmpty(),
    check('instructions', 'Instructions must be a string').isString().notEmpty(),
    check('utensils', 'Utensils must be a string').isString().notEmpty()
]

exports.checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.errors[0].msg });
    }
    next()
}