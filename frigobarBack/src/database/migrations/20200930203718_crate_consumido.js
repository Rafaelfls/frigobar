
exports.up = function(knex) {
    return knex.schema.createTable('consumidos', function(table){
        table.increments();
        table.integer('apartamento').notNullable();
        table.integer('quantidadeConsumida').notNullable();
        table.boolean('pagou').notNullable().defaultTo(false);

        //foreignKeys
        table.integer('item_id').notNullable();

        table.foreign('item_id').references('id').inTable('itens');
    })
  
};

exports.down = function(knex) {
    knex.schema.dropTable('consumidos');
};
