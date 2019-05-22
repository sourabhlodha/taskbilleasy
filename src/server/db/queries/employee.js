const knex = require('../connection');

function getAllemployeeuserdata() {
  return knex('employeeuserdata')
  .select('*');
}

function getEmployeeDataAndCompanyData() {
  return knex('employeeuserdata')
  .join('employeecompanydata', 'employeeuserdata.id', 'employeecompanydata.user_id')
  .select('employeeuserdata.name as employee', 'employeecompanydata.salarydetails as salary');
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
  getEmployeeDataAndCompanyData,
  deleteEmployeeData
};
