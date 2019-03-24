const { Airport } = require('../../src/airport.js')

const { Plane } = require('../../src/plane.js')


describe('features', () => {

beforeEach(() => {
  airport = new Airport();
  plane = new Plane();
});

  it('should be able to land a plane at an airport', () => {
    airport.land(plane)
    expect(airport.hanger).toContain(plane)
  });

});