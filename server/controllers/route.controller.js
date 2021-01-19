const BaseModel = require('../db/models');
const Feedback = require('../lib/Feedback');
const Pager = require('../lib/Pager');
const Sanitizer = require('../lib/Sanitizer');
const Validator = require('../lib/Validator');
const { route } = require('../routes/routes.route');
const pageSize = 10;

exports.saveRoute = async (req, res, next) => {
  const routeData = Sanitizer.sanitize(req.body);
  let errors = {},
    feedback;

  if (Validator.isEmpty(routeData.departure)) {
    errors.departure = 'departure field is required.';
  }
  if (Validator.isEmpty(routeData.destination)) {
    errors.destination = 'destination field is required.';
  }
  if (Validator.isEmpty(routeData.scheduledAt)) {
    errors.scheduledAt = 'travel schedule field is required.';
  }

  if (Object.keys(errors).length === 0) {
    // no errors
    let routeExists = await BaseModel.Route.findOne({
      where: {
        departure: routeData.departure,
        destination: routeData.destination,
        scheduledAt: routeData.scheduledAt,
      },
    });

    if (routeExists) {
      feedback = new Feedback(null, false, 'travel route already exists');
      return res.json(feedback);
    }

    // everything is good
    try {
      let route = await BaseModel.Route.create(routeData);
      route.id = route.null;
      feedback = new Feedback(route, true, 'route saved successfully.');
    } catch (error) {
      console.log(error);
      feedback = new Feedback(
        null,
        false,
        'operation failed, route was not saved.'
      );
    }
  } else {
    // errors
    feedback = new Feedback(errors, false, 'This form has errors.');
  }
  res.json(feedback);
};

exports.getRoutes = async (req, res, next) => {
  let page = Number(req.query.page) || 1;
  let paginate = req.query.paginate === 'false' ? false : true;
  let searchquery = req.query.searchquery;
  let filter = {};
  if (searchquery) {
    filter[BaseModel.Sequelize.Op.or] = [
      { destination: { [BaseModel.Sequelize.Op.like]: `%${searchquery}%` } },
      { departure: { [BaseModel.Sequelize.Op.like]: `%${searchquery}%` } },
    ];
  }
  let pager = new Pager('Route', pageSize, page);
  let feedback = await pager.getData(
    filter,
    null,
    [['departure', 'ASC']],
    paginate
  );
  res.json(feedback);
};

exports.getRoute = (req, res, next) => {};

exports.updateRoute = async (req, res, next) => {
  let updateData = Sanitizer.sanitize(req.body);
  let { id } = updateData,
    feedback;
  delete updateData.id;

  try {
    let result = (
      await BaseModel.Route.update(updateData, { where: { id } })
    )[0];
    if (result > 0) {
      feedback = new Feedback(result, true, 'route updated successfully.');
    } else {
      feedback = new Feedback(result, false, 'no data found to update.');
    }
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      null,
      false,
      'opearion failed, unable to update route.'
    );
  }

  res.json(feedback);
};

exports.deleteRoute = async (req, res, next) => {
  let { id } = Sanitizer.sanitize(req.body);
  let feedback;

  try {
    let result = await BaseModel.Route.destroy({ where: { id } });
    if (result > 0) {
      feedback = new Feedback(result, true, 'route was deleted successfully.');
    } else {
      feedback = new Feedback(
        result,
        false,
        'no data was found to be deleted.'
      );
    }
  } catch (error) {
    console.log(error);
    feedback = new Feedback(
      null,
      false,
      'operation failed, unable to delete route.'
    );
  }
  res.json(feedback);
};
