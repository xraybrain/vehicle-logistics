module.exports = (sequelize, DataTypes) => {
  const VehicleTracker = sequelize.define('VehicleTracker', {
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
    routeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'routes',
        key: 'id',
      },
    },
  });

  VehicleTracker.associate = (models) => {
    models.VehicleTracker.belongsTo(models.Vehicle, {
      model: 'vehicles',
      foreignKey: 'vehicleId',
    });
    models.VehicleTracker.belongsTo(models.Driver, {
      model: 'drivers',
      foreignKey: 'driverId',
    });
    models.VehicleTracker.belongsTo(models.Route, {
      model: 'routes',
      foreignKey: 'routeId',
    });
  };

  return VehicleTracker;
};
