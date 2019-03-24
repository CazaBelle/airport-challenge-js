
const { Airport } = require('../../src/airport')

describe('Airport', () => {
  beforeEach(() => {
    airport = new Airport
  });
  it('should land a plane', () => {
    expect(airport.land()).not.tobeUndefined
  });
});