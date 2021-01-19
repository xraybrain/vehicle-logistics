module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define(
    'Driver',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      lastName: { type: DataTypes.STRING },
      firstName: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      mobile: { type: DataTypes.STRING },
      imageURL: { type: DataTypes.STRING },
      maritalStatus: { type: DataTypes.STRING },
    },
    {
      paranoid: true,
    }
  );

  return Driver;
};
