exports.up = (knex, Promise) => {
  return knex.schema.createTable('employeecompanydata', (table) => {
    table.increments();
    table.integer('id').notNullable().unique();
    table.string('salarydetails').notNullable();
    table.string('joiningdate').notNullable();
    table.string('document').notNullable();
  });
};


exports.down = (knex, Promise) => {
  return knex.schema.dropTable('employeecompanydata');
};
