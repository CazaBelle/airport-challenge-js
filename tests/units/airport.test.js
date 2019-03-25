
const { Airport } = require('../../src/airport')

describe('Airport', () => {
  let airport 

  beforeEach(() => {
    airport = new Airport()
  });

  it('should land a plane', () => {
    expect(airport.land()).not.tobeUndefined
  });
 
  it('should allow a plane to takeoff', () => {
    expect(airport.takeoff()).not.tobeUndefined
  });

});