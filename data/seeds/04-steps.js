
exports.seed = function(knex) {
  return knex('steps').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('steps').insert([
          {step_description:"Get bread, peanut butter, and jam", step_number: 1, recipe_id:1 },
          {step_description:"Put it all together", step_number: 2, recipe_id: 1 },
          {step_description:"Get bread; slice unless already sliced", step_number: 1, recipe_id:2  },
          {step_description:"Put bread slices together", step_number: 1, recipe_id: 2 }
      ]);
    });
};
