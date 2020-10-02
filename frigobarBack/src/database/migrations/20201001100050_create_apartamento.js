
exports.up = function(knex) {
    return knex.schema.createTable('apartamentos', function(table){
        table.increments();
        table.integer('apartamento').notNullable();
        table.boolean('pagou').notNullable();
    })
  };
  
  exports.down = function(knex) {
      knex.schema.dropTable('apartamentos');  
  };
  