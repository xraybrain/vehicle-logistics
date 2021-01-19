module.exports = (sequelize, DataTypes) => {
  const Fuel = sequelize.define('Fuel', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    type: { type: DataTypes.STRING },
  });
  return Fuel;
};
