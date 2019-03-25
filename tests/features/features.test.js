const { Airport } = require('../../src/airport.js')
const { Plane } = require('../../src/plane.js')
const { Weather } = require('../../src/weather.js')


describe('features', () => {

beforeEach(() => {
  airport = new Airport('Luton', 5);
  plane = new Plane();
  weather = new Weather();
});

  it('should be able to land a plane at an airport', () => {
    airport.land(plane)
    expect(airport.hanger).toContain(plane)
  });

  it('should instruct a plane to take off from the airport', () => {
    airport.land(plane)
    airport.takeoff(plane)
    expect(airport.hanger).not.toContain(plane)
  });

  it('should prevent landing when capacity full', () => {
   for(var i = 1; i <= 5; i++){
    airport.land(plane)
   } 
    expect(function() { airport.land(plane) }).toThrow('Airport Full')

  });

});