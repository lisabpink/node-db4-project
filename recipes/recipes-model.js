const db = require('../data/db-config.js')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db.select('ingredients_recipes.quantity','ingredients.ingredient_name')
    .from('ingredients_recipes')
    .innerJoin('recipes','recipes.id', 'ingredients_recipes.recipe_id')
    .innerjoin('ingredients','ingredients.id','ingredients_recipes.ingredient_id')
    .where({ recipe_id: recipe_id });
}

function getInstructions(recipe_id) {
    return db.select('step_number', 'step_description','recipes.name')
    .from('steps')
    .innerJoin("recipes", "recipes.id", "steps.recipe_id").where( { recipe_id: recipe_id } ).orderBy('steps.step_number');
}