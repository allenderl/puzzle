// Initializes the `getBestAvailableSeat` service on path `/get-best-available-seat`
const createService = require('feathers-memory');
const hooks = require('./get-best-available-seat.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/get-best-available-seat', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('get-best-available-seat');

  service.hooks(hooks);
};
