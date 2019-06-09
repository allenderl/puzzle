const getBestAvailableSeat = require('./get-best-available-seat/get-best-available-seat.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(getBestAvailableSeat);
};
