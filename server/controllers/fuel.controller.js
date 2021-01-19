const BaseModel = require('../db/models');
const Feedback = require('../lib/Feedback');
const Pager = require('../lib/Pager');
const Sanitizer = require('../lib/Sanitizer');
const Validator = require('../lib/Validator');
const pageSize = 10;

exports.saveFuel = async (req, res, next) => {
  let fuelData = Sanitizer.sanitize(req.body);
  let errors = {},
    feedback;

  if (Validator.isEmpty(fuelData.type)) {
    errors.type = 'Fuel type is required.';
  }

  if (Object.keys(errors).length == 0) {
    let fuelTypeExists = await BaseModel.Fuel.findOne({
      where: { type: fuelData.type },
    });

    if (fuelTypeExists) {
      feedback = new Feedback(null, false, 'fuel type already exists.');
      return res.json(feedback);
    }

    // Everything is good
    let fuel = await BaseModel.Fuel.create(fuelData);
    fuel.id = fuel.null;
    feedback = new Feedback(fuel, true, 'fuel data saved successfully.');
  } else {
    feedback = new Feedback(errors, false, 'this form has errors.');
  }
  res.json(feedback);
};

exports.getFuels = async (req, res, next) => {
  let page = Number(req.query.page) || 1;
  let searchquery = req.query.searchquery;
  let filter = {};
  if (searchquery) {
    filter[BaseModel.Sequelize.Op.or] = [
      { lastName: { [BaseModel.Sequelize.Op.like]: `%${searchquery}%` } },
      { firstName: { [BaseModel.Sequelize.Op.like]: `%${searchquery}%` } },
      { maritalStatus: { [BaseModel.Sequelize.Op.like]: `%${searchquery}%` } },
    ];
  }
  let pager = new Pager('Fuel', pageSize, page);
  let feedback = await pager.getData(filter);
  res.json(feedback);
};

exports.getFuel = (req, res, next) => {};

exports.updateFuel = async (req, res, next) => {
  let updateData = Sanitizer.sanitize(req.body);
  let id = updateData.id,
    feedback,
    errors = {};
  delete updateData.id;

  if (Validator.isEmpty(updateData.type)) {
    errors.type = 'Fuel type is required.';
  }

  if (Object.keys(errors) == 0) {
    try {
      let result = BaseModel.Fuel.update(updateData, { where: { id } });
      feedback = new Feedback(result, true, 'fuel data updated successfully.');
    } catch (error) {
      console.log(error);
      feedback = new Feedback(null, false, 'fuel data was not updated.');
    }
  } else {
    feedback = new Feedback(
      errors,
      false,
      'fuel data was not updated due to errors.'
    );
  }
  res.json(feedback);
};

exports.deleteFuel = async (req, res, next) => {
  let { id } = Sanitizer.sanitize(req.body);
  let feedback;
  try {
    let fuel = await BaseModel.Fuel.findByPk(id);
    let result = await BaseModel.Fuel.destroy({ where: { id } });
    if (result > 0) {
      feedback = new Feedback(
        result,
        true,
        `${fuel.type} has been deleted successfully.`
      );
    } else {
      feedback = new Feedback(result, false, `no data found to delete.`);
    }
  } catch (error) {
    console.log(error);
    feedback = new Feedback(null, true, `operation failed.`);
  }
  res.json(feedback);
};
