function areYouPlayingBanjo(name) {
    if(name.startsWith("R") || name.startsWith("r")) {
        return name + " does play banjo"
    } else {
        return name + " does not playing banjo"
    }
}

console.log(areYouPlayingBanjo("ringo"))