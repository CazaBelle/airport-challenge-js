'use strict'

const { Weather } = require('../src/weather.js')

class Airport {
  constructor(name, capacity){
    this.name = name 
    this.capacity = capacity 
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
    this.hanger.pop(plane)
  }

  isFull(){
    return(this.hanger.length === this.capacity ? true : false)
  }

}

module.exports = { Airport }