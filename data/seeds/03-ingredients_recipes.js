
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients_recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_recipes').insert([
        {recipe_id: 1, ingredient_id: 2, quantity: 5},
        {recipe_id: 2, ingredient_id: 2, quantity: 9},
        {recipe_id: 1, ingredient_id: 1, quantity: 20},
        {recipe_id: 1, ingredient_id: 3, quantity: 2.0}
      ]);
    });
};
