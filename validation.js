const { body, param, validationResult } = require('express-validator');
const validate = {}

validate.postNew = () => {
    return [
    body('name').notEmpty()
        .withMessage('Please provide a name.'),
        body('cuisine').notEmpty().isString().withMessage('Please provide a valid.'),
        body('address').isLength({min: 5}).withMessage('Please provide a valid address.'),
        body('rating').notEmpty().isString().withMessage('Please provide a valid rating.'),
        body('hours').notEmpty().isString().withMessage('Please provide valid open hours.')

]
}

validate.checkNewData = async(req, res, next) => {
    let errors = []
    errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    next()
}

validate.checkId = () => {
    return [
        param('id').isString().isLength({min: 15}).withMessage('Invalid id')
    ]
}
 
validate.updatePlace = () => {
    return [
        body('name').notEmpty()
        .withMessage('Please provide a name.'),
        body('cuisine').notEmpty().isString().withMessage('Please provide a valid.'),
        body('address').isLength({min: 5}).withMessage('Please provide a valid address.'),
        body('rating').notEmpty().isString().withMessage('Please provide a valid rating.'),
        body('hours').notEmpty().isString().withMessage('Please provide valid open hours.'),
    ]
} 




// Recipes

validate.postNewRecipe = () => {
    return [
    body('name').notEmpty()
        .withMessage('Please provide a name.'),
        body('ingredients').isLength({min: 5}).withMessage('Please provide ingredients.'),
        body('instructions').notEmpty().isString().withMessage('Please provide instructions.'),
        body('time').notEmpty().isString().withMessage('Please provide time.')
]
}

validate.checkNewRecipe = async(req, res, next) => {
    let errors = []
    errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    next()
}
    
validate.checkRecipeId = () => {
    return [
        param('id').isString().isLength({min: 15}).withMessage('Invalid id')
    ]
}
 
validate.updateRecipe = () => {
    return [
        body('name').notEmpty()
        .withMessage('Please provide a name.'),
        body('ingredients').isLength({min: 5}).withMessage('Please provide ingredients.'),
        body('instructions').notEmpty().isString().withMessage('Please provide instructions.'),
        body('time').notEmpty().isString().withMessage('Please provide time.')
    ]
} 

module.exports = validate;