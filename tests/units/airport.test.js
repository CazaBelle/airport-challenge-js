
const { Airport } = require('../../src/airport')

describe('Airport', () => {
  let airport 
  let plane

  beforeEach(() => {
    airport = new Airport('Luton', 2)
    plane = {}
  });

  
  it('should land a plane', () => {
    expect(airport.land()).not.tobeUndefined
  });
 
  it('should allow a plane to takeoff', () => {
    airport.isStormy = jest.fn();
    airport.isStormy
      .mockReturnValueOnce(false)
    expect(airport.takeoff()).not.tobeUndefined
  });

  it('should raise an error when full ', () => {
    for(var i = 0; i <= 1; i++){
      airport.land(plane)
     } 
     expect(function() { airport.land(plane) }).toThrow('Airport Full')
  });


});