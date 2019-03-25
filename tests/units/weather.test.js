const { WeatherReport } = require('../../src/weather.js')

describe('WeatherReport', () => {
  beforeEach(() => {
   report = new WeatherReport()
  });

  it('can be stormy', () => {
    report.getForecast = jest.fn();
    report.getForecast
      .mockReturnValueOnce(4)
    expect(report.getForcast).toBeTruthy
  });

  it('can be clear', () => {
    report.getForecast = jest.fn();
    report.getForecast
      .mockReturnValueOnce(1)
      expect(report.getForcast).toBeFalsy
  });
  
});