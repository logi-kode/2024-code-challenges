function countSheeps(sheep) {
    let countSheep = 0

    for(let i = 0; i < sheep.length; i++) {
        if(sheep[i] === true) {
            countSheep += 1
        }
    }

    return countSheep
}

console.log(countSheeps([
    true, true, false, true,
    false, true, true, true,
    false, false, false, true,
    true, true, true, false
]))