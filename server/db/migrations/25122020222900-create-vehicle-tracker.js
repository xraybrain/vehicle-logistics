module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vehicleTrackers', {
      id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      vehicleId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'vehicles',
          key: 'id',
        },
      },
      driverId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'drivers',
          key: 'id',
        },
      },
      routeId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'routes',
          key: 'id',
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('vehicleTrackers');
  },
};
