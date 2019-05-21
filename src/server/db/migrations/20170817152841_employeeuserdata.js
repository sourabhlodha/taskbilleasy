exports.up = (knex, Promise) => {
  return knex.schema.createTable('employeeuserdata', (table) => {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('birthday').notNullable();
    table.string('designation').notNullable();
    table.integer('employeeid').notNullable();
  });
};


exports.down = (knex, Promise) => {
  return knex.schema.dropTable('employeeuserdata ');
};
