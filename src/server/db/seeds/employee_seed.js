exports.seed = (knex, Promise) => {
  return knex('employeeuserdata').del()
  .then(() => {
    return knex('employeeuserdata').insert({
      name: 'Sourabh Lodha',
      birthday: '02-12-1992',
      designation: 'Senior Full Stack Developer',
      employeeid: 08
    });
  })
  .then(() => {
    return knex('employeeuserdata').insert({
      name: 'SourabhJain',
      birthday: '02-12-1993',
      designation: 'Software Developer',
      employeeid: 09
    });
  })
  .then(() => {
    return knex('employeeuserdata').insert({
      name: 'Sourabh Bafna',
      birthday: '02-12-1994',
      designation: ' Full Stack Developer',
      employeeid: 10
    });
  });
};
