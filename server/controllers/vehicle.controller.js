const BaseModel = require('../db/models');
const Feedback = require('../lib/Feedback');
const Pager = require('../lib/Pager');
const Sanitizer = require('../lib/Sanitizer');
const Validator = require('../lib/Validator');
const pageSize = 10;

exports.saveVehicle = async (req, res, next) => {
  const vehicleData = Sanitizer.sanitize(req.body);
  let errors = {},
    feedback;

  if (Validator.isEmpty(vehicleData.engineNo)) {
    errors.engineNo = 'engine no field is required.';
  }

  if (Validator.isEmpty(vehicleData.capacity)) {
    errors.capacity = 'capacity field is required.';
  }

  if (Validator.isEmpty(vehicleData.fuelId)) {
    errors.fuelId = 'fuel field is required.';
  }

  if (Object.keys(errors).length == 0) {
    // no error
    let engineNoExists = await BaseModel.Vehicle.findOne({
      where: { engineNo: vehicleData.engineNo },
    });

    if (engineNoExists) {
      errors.engineNo = 'engine no already exists.';
      feedback = new Feedback(errors, false, 'engine no already exists.');
      return res.json(feedback);
    }

    // everything is good
    try {
      let vehicle = await BaseModel.Vehicle.create(vehicleData);
      let id = vehicle.null;

      vehicle = await BaseModel.Vehicle.findOne({
        where: { id },
        include: [{ model: BaseModel.Fuel }],
      });
      feedback = new Feedback(vehicle, true, 'vehicle saved successfully.');
    } catch (error) {
      console.log(error);
      feedback = new Feedback(
        null,
        false,
        'operation failed, unable to save vehicle data.'
      );
    }
  } else {
    // error
    feedback = new Feedback(errors, false, 'This form has error.');
  }
  res.json(feedback);
};

exports.getVehicles = async (req, res, next) => {
  let page = Number(req.query.page) || 1;
  let paginate = req.query.paginate === 'false' ? false : true;
  let searchquery = req.query.searchquery;
  let filter = {};
  if (searchquery) {
    filter[BaseModel.Sequelize.Op.or] = [
      { engineNo: { [BaseModel.Sequelize.Op.like]: `%${searchquery}%` } },
    ];
  }
  let pager = new Pager('Vehicle', pageSize, page);
  let feedback = await pager.getData(
    filter,
    [{ model: BaseModel.Fuel }],
    [['engineNo', 'ASC']],
    paginate
  );
  res.json(feedback);
};

exports.getVehicle = (req, res, next) => {};

exports.updateVehicle = async (req, res, next) => {
  const updateData = Sanitizer.sanitize(req.body);
  const { id } = updateData;
  delete updateData.id;
  updateData.deletedAt = null;
  let feedback;

  try {
    let result = (
      await BaseModel.Vehicle.update(updateData, { where: { id } })
    )[0];
    feedback = new Feedback(result, true, 'Vehicle updated successfully.');
    if (result === 0) feedback.message = 'No data was updated.';
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      null,
      false,
      'Operation failed, unable to update vehicle.'
    );
  }
  res.json(feedback);
};

exports.deleteVehicle = async (req, res, next) => {
  const { id } = Sanitizer.sanitize(req.body);
  let feedback;
  try {
    let result = await BaseModel.Vehicle.destroy({ where: { id } });
    feedback = new Feedback(result, true, 'vehicle deleted successfully.');
    if (result === 0) feedback.message = 'no vehicle data was deleted.';
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      null,
      false,
      'operation failed, unable to delete vehicle.'
    );
  }

  res.json(feedback);
};
