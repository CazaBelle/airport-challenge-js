'use strict'

const { WeatherReport } = require('../src/weather.js')

class Airport {
  constructor(name, capacity, weather = new WeatherReport()){
    this.name = name 
    this.capacity = capacity 
    this.weather = weather
    this.hanger = []
  }

  land(plane){
    if(this.isFull()){
      throw 'Airport Full'
    }else{
      this.hanger.push(plane) 
    }
  }

  takeoff(plane){
    if(this.isStormy()){
      throw 'Weather Stormy Takeoff Prevented'
    }else{
      this.hanger.pop(plane)
    }
  }

  isFull(){
    return(this.hanger.length === this.capacity)
  }

  isStormy(){
    return(this.weather.getForcast())
  }

}

module.exports = { Airport }