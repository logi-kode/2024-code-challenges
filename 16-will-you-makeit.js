const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return distanceToPump / mpg <= fuelLeft
}
console.log(zeroFuel(100, 50, 1))