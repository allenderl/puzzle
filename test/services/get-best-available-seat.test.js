const app = require('../../src/app');

describe('\'getBestAvailableSeat\' service', () => {
  it('registered the service', () => {
    const service = app.service('get-best-available-seat');
    expect(service).toBeTruthy();
  });
});
