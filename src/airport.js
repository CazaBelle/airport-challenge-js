'use strict'

class Airport {
  constructor(hanger){
    this.hanger = []
  }

  land(plane){
    this.hanger.push(plane)
  }

  takeoff(plane){
    this.hanger.pop(plane)
  }



}



module.exports = { Airport }