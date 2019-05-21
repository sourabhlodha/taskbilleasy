const Router = require('koa-router');
const queries = require('../db/queries/employee');

const router = new Router();
const BASE_URL = `/api/v1/employee`;

router.get(BASE_URL, async (ctx) => {
  try {
    const employees = await queries.getAllemployeeuserdata();
    ctx.body = {
      status: 'success',
      data: employees
    };
  } catch (err) {
    console.log(err)
  }
})

router.get(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const employee = await queries.getSingleEmployeeData(ctx.params.id);
    if (employee.length) {
      ctx.body = {
        status: 'success',
        data: employee
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That employee does not exist.'
      };
    }
  } catch (err) {
    console.log(err)
  }
})

router.post(`${BASE_URL}`, async (ctx) => {
  try {
    const employee = await queries.addEmployeeData(ctx.request.body);
    if (employee.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        data: employee
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})

router.put(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const employee = await queries.updateEmployeeData(ctx.params.id, ctx.request.body);
    if (employee.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: employee
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That employee does not exist.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})

router.delete(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const employee = await queries.deleteEmployeeData(ctx.params.id);
    if (employee.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: employee
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That employee does not exist.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})

module.exports = router;
