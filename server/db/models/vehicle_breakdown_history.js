module.exports = (sequelize, DataTypes) => {
  const VehicleBreakdownHistory = sequelize.define(
    'VehicleBreakdownHistory',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      vehicleId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'vehicles',
          key: 'id',
        },
      },
      driverId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drivers',
          key: 'id',
        },
      },
      description: {
        type: DataTypes.STRING,
      },
      repairDate: {
        type: DataTypes.DATE,
      },
      breakdownDate: {
        type: DataTypes.DATE,
      },
    },
    {
      paranoid: false,
    }
  );

  VehicleBreakdownHistory.associate = (models) => {
    models.VehicleBreakdownHistory.belongsTo(models.Vehicle, {
      model: 'vehicles',
      foreignKey: 'vehicleId',
    });
    models.VehicleBreakdownHistory.belongsTo(models.Driver, {
      model: 'drivers',
      foreignKey: 'driverId',
    });
  };

  return VehicleBreakdownHistory;
};
