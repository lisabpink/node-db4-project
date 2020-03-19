
exports.seed = function(knex) {
      return knex('ingredients').insert([
        { ingredient_name: 'strawberry' },
      { ingredient_name: 'pineapple' },
      { ingredient_name: 'peanut butter' },
      { ingredient_name: 'jelly' }
      ]);

};
