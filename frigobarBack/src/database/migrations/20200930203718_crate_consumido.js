
exports.up = function(knex) {
    return knex.schema.createTable('consumidos', function(table){
        table.increments();
        table.integer('quantidadeConsumida').notNullable();
        table.date('dataConsumido').notNullable();

        //foreignKeys
        table.integer('apartamento_id').notNullable();
        table.integer('item_id').notNullable();

        table.foreign('item_id').references('id').inTable('itens');
        table.foreign('apartamento_id').references('id').inTable('apartamentos');
    })
  
};

exports.down = function(knex) {
    knex.schema.dropTable('consumidos');
};
