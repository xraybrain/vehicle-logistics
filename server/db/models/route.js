module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    departure: { type: DataTypes.STRING },
    destination: { type: DataTypes.STRING },
    scheduledAt: { type: DataTypes.STRING },
  });

  return Route;
};
