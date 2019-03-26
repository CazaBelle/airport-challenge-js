class WeatherReport {

  getForcast(){
    //greater then 4 it will be stormy
    Math.floor((Math.random() * 5) + 1) > 4;
  }
}

module.exports = { WeatherReport }