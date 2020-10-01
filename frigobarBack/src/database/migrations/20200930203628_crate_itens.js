
exports.up = function(knex) {
  return knex.schema.createTable('itens', function(table){
      table.increments();
      table.string('nomeItem').notNullable();
      table.integer('quantidadeTotal').notNullable();
  })
};

exports.down = function(knex) {
    knex.schema.dropTable('itens');  
};
