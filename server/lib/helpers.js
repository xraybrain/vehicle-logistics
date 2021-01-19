const bcrypt = require('bcryptjs');
const BaseModel = require('../db/models');
exports.emailExists = async (email, model, field = 'email') => {
  return await BaseModel[model].findOne({
    where: { [field]: email },
  });
};

exports.mobileExists = async (mobile, model, field = 'mobile') => {
  return await BaseModel[model].findOne({
    where: { [field]: mobile },
  });
};

exports.encryptPassword = (password) => {
  let salt = bcrypt.genSaltSync(12);
  let hash = bcrypt.hashSync(password, salt);
  return hash;
};
