// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   fetchCoordsByIP(ip, (error, coords) => {
//     if (error) {
//       console.log("It didn't work!" , error);
//       return;
//     }
  
//     console.log('It worked! Returned Coords:' , coords);
//   });

//   console.log('It worked! Returned IP:' , ip);

  
  
// });

// fetchISSFlyOverTimes({latitude: '49.27670', longitude: '-123.13000'}, (error, times) => {
//   if(error){
//     console.log("It did't work", error)
//     return;
//   }
//   console.log("It worked", times)

// })

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});


