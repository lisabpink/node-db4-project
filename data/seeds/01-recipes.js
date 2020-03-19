exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { recipe_name: "Fruit Smoothie" },
    { recipe_name: "PB&J" }
  ]);
};
