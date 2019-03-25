const { Airport } = require('../../src/airport.js')
const { Plane } = require('../../src/plane.js')
const { WeatherReport } = require('../../src/weather.js')

describe('features', () => {

  beforeEach(() => {
    airport = new Airport('Luton', 5);
    plane = new Plane();
    weather = new WeatherReport();
  });

  it('should be able to land a plane at an airport', () => {
    airport.land(plane)
      expect(airport.hanger).toContain(plane)
  });

  it('should instruct a plane to take off from the airport', () => {
    airport.isStormy = jest.fn();
    airport.isStormy
      .mockReturnValueOnce(false)
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

  it('should prevent takeoff if weather is stormy', () => {
    //need to mock stormy here
    airport.isStormy = jest.fn();
    airport.isStormy
      .mockReturnValueOnce(true)
      expect(function() { airport.takeoff(plane) }).toThrow('Weather Stormy Takeoff Prevented')
  });

  it('should prevent landing when the weather is stormy', () => {
    airport.isStormy = jest.fn();
    airport.isStormy
      .mockReturnValueOnce(false)
      expect(function() { airport.takeoff(plane) }).not.toThrow('Weather Stormy Takeoff Prevented')
      expect(airport.hanger).not.toContain(plane)
  });

});