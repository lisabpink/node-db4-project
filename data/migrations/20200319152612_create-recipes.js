
exports.up = function(knex) {
    return (knex.schema.createTable('recipes', tbl => {
        tbl.increments('id');
        tbl.string('recipe_name', 128).notNullable().unique();
    })
    .createTable('ingredients', tbl => {
      tbl.increments('id');
      tbl.string('ingredient_name', 128).notNullable();
      })
    )
};

exports.down = function(knex) {
  
};
