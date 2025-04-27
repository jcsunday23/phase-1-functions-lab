// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
  const scuberHeadQuaters=42
  const blockDistance = pickUpLocation - scuberHeadQuaters
  if (blockDistance < 0){
      return blockDistance * -1
  }
  else {
      return blockDistance
  }
}
console.log(distanceFromHqInBlocks(43))
console.log(distanceFromHqInBlocks(50))
console.log(distanceFromHqInBlocks(34))

function distanceFromHqInFeet(pickUpLocation){
  const feetDistance = (pickUpLocation-42) * 264
  if (feetDistance < 0){
      return feetDistance * -1
  }
  else {
      return feetDistance
  }
}
console.log(distanceFromHqInFeet(43))
console.log(distanceFromHqInFeet(50))
console.log(distanceFromHqInFeet(34))

function distanceTravelledInFeet(a, b){
  const distanceInFeet = (b - a) * 264
  if (distanceInFeet < 0){
      return distanceInFeet * -1
  }
  else {
      return distanceInFeet
  }
}
console.log(distanceTravelledInFeet(43, 48))
console.log(distanceTravelledInFeet(50, 60))
console.log(distanceTravelledInFeet(34, 28))


function calculatesFarePrice (start, destination){
  const feetPerBlock = 264
  const distanceTravelled = Math.abs(destination - start) * feetPerBlock

  if (distanceTravelled > 2500){
      return "cannot travel that far"
  }
  else if (distanceTravelled > 2000){
      return 25
  }
  else if (distanceTravelled <= 400){
      const fare = 0
      return fare
  }
  else {
      return ((distanceTravelled - 400) * 0.02)
  }
}
console.log(calculatesFarePrice(43, 44))





























