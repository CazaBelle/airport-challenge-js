class Weather {

  weatherForcast(){
    let stormy = Math.floor((Math.random() * 5) + 1);
    if(stormy === 4 || stormy === 5){
      return true
    }else{
      return false
    } 

  }

}


module.exports = { Weather }