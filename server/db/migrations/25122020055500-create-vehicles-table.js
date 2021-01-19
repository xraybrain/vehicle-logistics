module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vehicles', {
      id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      fuelId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'fuel',
          key: 'id',
        },
      },
      engineNo: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      capacity: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      isFunctional: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    return queryInterface.dropTable('vehicles');
  },
};
