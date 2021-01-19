const bcrypt = require('bcryptjs');
const BaseModel = require('../db/models');
const Feedback = require('../lib/Feedback');
const Pager = require('../lib/Pager');
const pageSize = 10;
const Sanitizer = require('../lib/Sanitizer');
const Validator = require('../lib/Validator');
const {
  emailExists,
  mobileExists,
  encryptPassword,
} = require('../lib/helpers');

exports.saveUser = async (req, res, next) => {
  let userData = Sanitizer.sanitize(req.body);
  let errors = {},
    feedback;
  if (!Validator.isRealName(userData.lastName)) {
    errors.lastName = 'please provide a valid last name.';
  }
  if (!Validator.isRealName(userData.firstName)) {
    errors.firstName = 'please provide a valid first name.';
  }
  if (!Validator.isMobile(userData.mobile)) {
    errors.mobile = 'please provide a valid mobile number.';
  }
  if (!Validator.isEmail(userData.email)) {
    errors.email = 'please provide a valid email address.';
  }
  if (Validator.isEmpty(userData.password)) {
    errors.password = 'password field is required.';
  }

  if (Object.keys(errors).length === 0) {
    // no errors
    try {
      /** checks if either email or mobile number already exists. */
      if (await emailExists(userData.email, 'User')) {
        feedback = new Feedback(null, false, 'email address already exists.');
        return res.json(feedback);
      }
      if (await mobileExists(userData.mobile, 'User')) {
        feedback = new Feedback(null, false, 'mobile number already exists.');
        return res.json(feedback);
      }

      /** Everthing is good submit data. */
      userData.password = encryptPassword(userData.password);
      let user = await BaseModel.User.create(userData);
      user.id = user.null;
      feedback = new Feedback(user, true, 'saved successfully.');
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

exports.getUsers = async (req, res, next) => {
  let page = Number(req.query.page) || 1;
  let pager = new Pager('User', pageSize, page);
  let feedback = await pager.getData();
  res.json(feedback);
};

exports.getUser = async (req, res, next) => {
  let { email } = req.query;
  let feedback;

  try {
    let user = await BaseModel.User.findOne({ where: { email } });
    if (user) {
      feedback = new Feedback(user, true, 'success');
    } else {
      feedback = new Feedback(null, false, 'Unknown email address.');
    }
  } catch (error) {
    console.log(error);
    feedback = new Feedback(null, false, 'we were unable to process request');
  }

  res.json(feedback);
};

exports.updateUser = async (req, res, next) => {
  let updateData = Sanitizer.sanitize(req.body);
  let id = updateData.id;
  delete updateData.id;
  updateData.deletedAt = null;
  let feedback;
  //TODO: run validation
  try {
    if (updateData.password) {
      console.warn('ENCRYPTING PASSWORD');
      updateData.password = encryptPassword(updateData.password);
    }
    let result = await BaseModel.User.update(updateData, { where: { id } });
    feedback = new Feedback(result, true, 'user profile updated successfully.');
  } catch (error) {
    console.log(error);
    feedback = new Feedback(null, false, 'failed to update user data.');
  }
  res.json(feedback);
};

exports.deleteUser = async (req, res, next) => {
  let { id } = Sanitizer.sanitize(req.body);
  let feedback;

  try {
    let result = await BaseModel.User.destroy({ where: { id } });
    if (result == 1) {
      feedback = new Feedback(result, true, 'user data deleted successfully.');
    } else {
      feedback = new Feedback(result, true, 'no data found to delete.');
    }
  } catch (error) {
    feedback = new Feedback(null, false, 'failed to delete user data.');
  }
  res.json(feedback);
};

exports.dashboardSummary = async (req, res, next) => {
  let feedback;

  try {
    let vehicles = await BaseModel.Vehicle.count({ paranoid: true });
    let drivers = await BaseModel.Driver.count({ paranoid: true });
    let routes = await BaseModel.Route.count({ paranoid: true });
    let trackers = await BaseModel.Vehicle.count();
    feedback = new Feedback(
      {
        totalVehicles: vehicles,
        totalDrivers: drivers,
        totalRoutes: routes,
        totalTrackers: trackers,
      },
      true,
      'success'
    );
  } catch (error) {
    feedback = new Feedback(null, false, 'failed to fetch dashboard summary.');
  }
  res.json(feedback);
};
