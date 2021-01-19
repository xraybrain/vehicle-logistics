const bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(12);
let hash = bcrypt.hashSync('admin', salt);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        lastName: 'admin',
        firstName: 'admin',
        email: 'admin@gmail.com',
        password: hash,
        mobile: '08160534088',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
