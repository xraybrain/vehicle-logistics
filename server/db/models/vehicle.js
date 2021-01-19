module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define(
    'Vehicle',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      engineNo: { type: DataTypes.STRING },
      capacity: { type: DataTypes.INTEGER },
      isFunctional: { type: DataTypes.BOOLEAN },
      fuelId: {
        type: DataTypes.STRING,
        references: {
          model: 'fuels',
          key: 'id',
        },
      },
    },
    { paranoid: true }
  );

  Vehicle.associate = (models) => {
    models.Vehicle.belongsTo(models.Fuel, {
      model: 'fuels',
      foreignKey: 'fuelId',
    });
  };

  return Vehicle;
};
