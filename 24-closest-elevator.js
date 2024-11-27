function elevator(left, right, call){
    const leftDistance = Math.abs(left - call)
    const rightDistance = Math.abs(right - call)

    if(leftDistance < rightDistance) {
        return "left"
    } else {
        return "right"
    }
}

console.log(elevator(0, 2, 1))