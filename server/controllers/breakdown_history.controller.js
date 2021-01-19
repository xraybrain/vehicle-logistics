const BaseModel = require('../db/models');
const Feedback = require('../lib/Feedback');
const Pager = require('../lib/Pager');
const Sanitizer = require('../lib/Sanitizer');
const Validator = require('../lib/Validator');
const pageSize = 10;

exports.saveBreakdownHistory = async (req, res, next) => {
  let breakdownData = Sanitizer.sanitize(req.body);
  let errors = {};
  let feedback;

  if (Validator.isEmpty(breakdownData.vehicleId)) {
    errors.vehicleId = 'vehicle field is required.';
  }
  if (Validator.isEmpty(breakdownData.driverId)) {
    errors.driverId = 'driver field is required.';
  }
  if (Validator.isEmpty(breakdownData.description)) {
    errors.description = 'description field is required.';
  }
  if (Validator.isEmpty(breakdownData.breakdownDate)) {
    errors.breakdownDate = 'breakdown date field is required.';
  }

  if (Object.keys(errors).length == 0) {
    // no error
    let notRepaired = await BaseModel.VehicleBreakdownHistory.findOne({
      where: {
        repairDate: {
          [BaseModel.Sequelize.Op.is]: null,
        },
      },
    });
    if (notRepaired) {
      feedback = new Feedback(
        null,
        false,
        'this vehicle is yet to be repaired.'
      );
      return res.json(feedback);
    }

    // good
    try {
      let breakdownHistory = await BaseModel.VehicleBreakdownHistory.create(
        breakdownData
      );
      breakdownHistory = await BaseModel.VehicleBreakdownHistory.findOne({
        where: { id: breakdownHistory.null },
        include: [{ model: BaseModel.Driver }, { model: BaseModel.Vehicle }],
      });

      await BaseModel.Vehicle.update(
        { isFunctional: false },
        { where: { id: breakdownData.vehicleId } }
      );

      feedback = new Feedback(
        breakdownHistory,
        true,
        'vehicle breakdown saved successfully.'
      );
    } catch (error) {
      console.log(error);
      feedback = new Feedback(
        null,
        false,
        'operation failed, unable to save vehicle breakdown data.'
      );
    }
  } else {
    // error
    feedback = new Feedback(errors, false, 'This form has errors.');
  }

  res.json(feedback);
};

exports.getBreakdownHistories = async (req, res, next) => {
  let page = Number(req.query.page) || 1;
  let { engineno, searchquery } = req.query;
  let vehicleFilter = {};
  let driverFilter = {};

  if (searchquery) {
    // driverFilter[BaseModel.Sequelize.Op.or] = [
    //   { lastName: { [BaseModel.Sequelize.Op.like]: `%${searchquery}%` } },
    //   { firstName: { [BaseModel.Sequelize.Op.like]: `%${searchquery}%` } },
    // ];
    vehicleFilter.engineNo = searchquery;
  }

  if(engineno){
    vehicleFilter.engineNo = engineno;
  }

  let include = [
    {
      model: BaseModel.Vehicle,
      where: vehicleFilter,
      paranoid: false,
    },
    {
      model: BaseModel.Driver,
      where: driverFilter,
      paranoid: false,
    },
  ];
  let pager = new Pager('VehicleBreakdownHistory', pageSize, page);
  let feedback = await pager.getData({}, include);
  res.json(feedback);
};

exports.getBreakdownHistory = (req, res, next) => {};

exports.updateBreakdownHistory = async (req, res, next) => {
  let updateData = Sanitizer.sanitize(req.body);
  let { id } = updateData,
    feedback;
  delete updateData.id;

  try {
    if (updateData.repairDate) {
      await BaseModel.Vehicle.update(
        { isFunctional: true },
        { where: { id: updateData.vehicleId } }
      );
    }
    let result = (
      await BaseModel.VehicleBreakdownHistory.update(updateData, {
        where: { id },
      })
    )[0];
    feedback = new Feedback(
      result,
      true,
      'vehicle breakdown history updated successfully.'
    );
    if (result == 0) feedback.message = 'no vehicle data was updated.';
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      null,
      false,
      'operation failed, unable to update breakdown history.'
    );
  }

  res.json(feedback);
};

exports.deleteBreakdownHistory = async (req, res, next) => {
  const { id } = Sanitizer.sanitize(req.body);
  let feedback;

  try {
    let result = await BaseModel.VehicleBreakdownHistory.destroy({
      where: { id },
    });
    feedback = new Feedback(
      result,
      true,
      'vehicle breakdown history deleted successfully.'
    );
    if (result === 0)
      feedback.message = 'no vehicle breakdown history was deleted.';
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      null,
      false,
      'operation failed, unable to delete vehicle history.'
    );
  }

  res.json(feedback);
};
