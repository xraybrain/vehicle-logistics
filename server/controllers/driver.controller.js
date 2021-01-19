const BaseModel = require('../db/models');
const Pager = require('../lib/Pager');
const Feedback = require('../lib/Feedback');
const Sanitizer = require('../lib/Sanitizer');
const Validator = require('../lib/Validator');
const { emailExists, mobileExists } = require('../lib/helpers');
const pageSize = 3;

exports.saveDriver = async (req, res, next) => {
  let driverData = Sanitizer.sanitize(req.body);
  let errors = {},
    feedback;

  if (!Validator.isRealName(driverData.lastName)) {
    errors.lastName = 'please provide a valid last name.';
  }
  if (!Validator.isRealName(driverData.firstName)) {
    errors.firstName = 'please provide a valid first name.';
  }
  if (!Validator.isMobile(driverData.mobile)) {
    errors.mobile = 'please provide a valid mobile number.';
  }
  if (!Validator.isEmail(driverData.email)) {
    errors.email = 'please provide a valid email address.';
  }
  if (Validator.isEmpty(driverData.maritalStatus)) {
    errors.maritalStatus = 'please provide a valid marital status.';
  }

  if (Object.keys(errors).length === 0) {
    // no errors
    try {
      /** checks if either email or mobile number already exists. */
      if (await emailExists(driverData.email, 'Driver')) {
        feedback = new Feedback(null, false, 'email address already exists.');
        return res.json(feedback);
      }
      if (await mobileExists(driverData.mobile, 'Driver')) {
        feedback = new Feedback(null, false, 'mobile number already exists.');
        return res.json(feedback);
      }

      /** Everthing is good submit data. */
      let driver = await BaseModel.Driver.create(driverData);
      driver.id = driver.null;
      feedback = new Feedback(driver, true, 'saved successfully.');
      res.json(feedback);
    } catch (error) {
      console.log(error);
      feedback = new Feedback(null, false, 'failed to save user data.');
    }
  } else {
    // errors
    feedback = new Feedback(errors, false, 'this form has errors.');
    res.json(feedback);
  }
};

exports.getDrivers = async (req, res, next) => {
  let page = Number(req.query.page) || 1;
  let paginate = req.query.paginate || true;
  let searchquery = req.query.searchquery;
  let filter = {};
  if (searchquery) {
    filter[BaseModel.Sequelize.Op.or] = [
      { lastName: { [BaseModel.Sequelize.Op.like]: `%${searchquery}%` } },
      { firstName: { [BaseModel.Sequelize.Op.like]: `%${searchquery}%` } },
      { email: { [BaseModel.Sequelize.Op.like]: `%${searchquery}%` } },
      { maritalStatus: { [BaseModel.Sequelize.Op.like]: `%${searchquery}%` } },
    ];
  }
  let pager = new Pager('Driver', pageSize, page);
  let feedback = await pager.getData(
    filter,
    null,
    [['lastName', 'ASC']],
    paginate
  );
  res.json(feedback);
};

exports.getDriver = async (req, res, next) => {
  let { id, email } = Sanitizer.sanitize(req.query);
  let feedback;

  try {
    let driver;
    if (id) {
      driver = await BaseModel.Driver.findByPk(id);
    } else if (email) {
      driver = await BaseModel.Driver.findOne({ where: { email } });
    } else {
      driver = null;
    }
    if (driver) {
      feedback = new Feedback(driver, true, 'success');
    } else {
      feedback = new Feedback(
        null,
        false,
        'operation failed, no driver found.'
      );
    }
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      null,
      false,
      'we encountered a problem while reteiving data.'
    );
  }
  res.json(feedback);
};

exports.updateDriver = async (req, res, next) => {
  let updateData = Sanitizer.sanitize(req.body);
  let id = updateData.id;
  delete updateData.id;
  updateData.deletedAt = null;

  let feedback;
  //TODO: run validation
  try {
    let result = await BaseModel.Driver.update(updateData, { where: { id } });
    feedback = new Feedback(
      result,
      true,
      'driver profile updated successfully.'
    );
  } catch (error) {
    console.log(error);
    feedback = new Feedback(null, false, 'failed to update user data.');
  }
  res.json(feedback);
};

exports.deleteDriver = async (req, res, next) => {
  let { id } = Sanitizer.sanitize(req.body);
  let feedback;

  try {
    let driver = await BaseModel.Driver.findByPk(id);
    let result = await BaseModel.Driver.destroy({ where: { id } });
    if (result == 1) {
      feedback = new Feedback(
        result,
        true,
        `${driver.lastName} ${driver.firstName}'s data was deleted successfully.`
      );
    } else {
      feedback = new Feedback(result, false, 'no data found to delete.');
    }
  } catch (error) {
    feedback = new Feedback(null, false, 'failed to delete driver data.');
  }
  res.json(feedback);
};
