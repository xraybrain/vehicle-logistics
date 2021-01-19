module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      lastName: { type: DataTypes.STRING },
      firstName: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      mobile: { type: DataTypes.STRING },
      imageURL: { type: DataTypes.STRING },
    },
    {
      paranoid: true,
    }
  );

  return User;
};
