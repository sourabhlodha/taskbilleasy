const knex = require('../connection');

function getAllemployeeuserdata() {
  return knex('employeeuserdata')
  .select('*');
}

function getSingleEmployeeData(id) {
  return knex('employeeuserdata')
  .select('*')
  .where({ id: parseInt(id) });
}

function addEmployeeData(employee) {
  return knex('employeeuserdata')
  .insert(employee)
  .returning('*');
}

function updateEmployeeData(id, employee) {
  return knex('employeeuserdata')
  .update(employee)
  .where({ id: parseInt(id) })
  .returning('*');
}

function deleteEmployeeData(id) {
  return knex('employeeuserdata')
  .del()
  .where({ id: parseInt(id) })
  .returning('*');
}

module.exports = {
  getAllemployeeuserdata,
  getSingleEmployeeData,
  addEmployeeData,
  updateEmployeeData,
  deleteEmployeeData
};
