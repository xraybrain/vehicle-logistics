module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('fuel', [
      {
        type: 'diesel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'gas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'petrol',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('fuel', null, {});
  },
};
