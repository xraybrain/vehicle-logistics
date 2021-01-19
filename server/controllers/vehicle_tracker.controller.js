const BaseModel = require('../db/models');
const Feedback = require('../lib/Feedback');
const Pager = require('../lib/Pager');
const Sanitizer = require('../lib/Sanitizer');
const Validator = require('../lib/Validator');
const pageSize = 10;

exports.saveTracker = async (req, res, next) => {
  const trackerData = Sanitizer.sanitize(req.body);
  let errors = {};
  let feedback;
  let now = new Date();
  let date = `${now.getFullYear()}-${now.getMonth}-${now.getDate()}`;

  if (Validator.isEmpty(trackerData.vehicleId)) {
    errors.vehicleId = 'vehicle field is required.';
  }

  if (Validator.isEmpty(trackerData.driverId)) {
    errors.driverId = 'driver field is required.';
  }

  if (Validator.isEmpty(trackerData.routeId)) {
    errors.routeId = 'route field is required.';
  }

  if (Object.keys(errors).length === 0) {
    // no error
    try {
      let vehicleAssigned = await BaseModel.VehicleTracker.findOne({
        where: {
          vehicleId: trackerData.vehicleId,
          createdAt: {
            [BaseModel.Sequelize.Op.gte]: date,
          },
        },
      });

      if (vehicleAssigned) {
        errors.vehicleId = 'this vehicle has been assigned to another driver.';
        feedback = new Feedback(
          errors,
          false,
          'this vehicle has been assigned to another driver.'
        );
        return res.json(feedback);
      }

      let driverAssigned = await BaseModel.VehicleTracker.findOne({
        where: {
          driverId: trackerData.driverId,
          createdAt: {
            [BaseModel.Sequelize.Op.gte]: date,
          },
        },
      });
      if (driverAssigned) {
        errors.driverId = 'this driver has already been assigned a vehicle.';
        feedback = new Feedback(
          errors,
          false,
          'this driver has already been assigned a vehicle.'
        );
        return res.json(feedback);
      }

      // Everything Ok
      let tracker = await BaseModel.VehicleTracker.create(trackerData);
      let id = tracker.null;
      let trackerRecord = await BaseModel.VehicleTracker.findOne({
        where: { id },
        include: [
          { model: BaseModel.Driver },
          { model: BaseModel.Vehicle },
          { model: BaseModel.Route },
        ],
      });
      feedback = new Feedback(trackerRecord, true, 'saved successfully.');
    } catch (error) {
      console.log(error);
      feedback = new Feedback(
        null,
        false,
        'Operation failed, unable to save track data.'
      );
    }
  } else {
    // error
    feedback = new Feedback(errors, false, 'This form has error.');
  }
  res.json(feedback);
};

exports.getTrackers = async (req, res, next) => {
  let page = Number(req.query.page) || 1;
  let { searchquery, engineno } = req.query;

  let vehicleFilter = {};
  let driverFilter = {};
  let filter = {};

  if (searchquery) {
    driverFilter[BaseModel.Sequelize.Op.or] = [
      { lastName: { [BaseModel.Sequelize.Op.like]: `%${searchquery}%` } },
      { firstName: { [BaseModel.Sequelize.Op.like]: `%${searchquery}%` } },
    ];
  }

  if (engineno) {
    vehicleFilter['engineNo'] = engineno;
  }

  let include = [
    {
      model: BaseModel.Vehicle,
      where: vehicleFilter,
    },
    {
      model: BaseModel.Driver,
      where: driverFilter,
    },
    {
      model: BaseModel.Route,
    },
  ];
  let pager = new Pager('VehicleTracker', pageSize, page);
  let feedback = await pager.getData(filter, include);
  res.json(feedback);
};

exports.getTracker = (req, res, next) => {};

exports.updateTracker = async (req, res, next) => {
  let updateData = Sanitizer.sanitize(req.body);
  let { id } = updateData;
  delete updateData.id;
  let feedback;

  try {
    let result = (
      await BaseModel.VehicleTracker.update(updateData, {
        where: { id },
      })
    )[0];
    feedback = new Feedback(result, true, 'updated successfully.');
    if (result === 0) feedback.message = 'no data was updated.';
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      null,
      false,
      'Operation failed, unable to update data'
    );
  }

  res.json(feedback);
};

exports.deleteTracker = async (req, res, next) => {
  let { id } = req.body;
  let feedback;

  try {
    let result = await BaseModel.VehicleTracker.destroy({ where: { id } });
    feedback = new Feedback(result, true, 'deleted successfully.');
    if (result == 0) feedback.message = 'no data was deleted.';
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      null,
      false,
      'Operation failed, unable to delete data.'
    );
  }

  res.json(feedback);
};
