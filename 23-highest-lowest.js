function highAndLow(numbers){
    const num = numbers.split(' ')

    const highest = Math.max(...num)
    const lowest = Math.min(...num)

    return `${highest} ${lowest}`
}

console.log(highAndLow('1 4 5 3 -1 6 8 10 9 -9'))