// const reverseSeq = (n) => {
//     const result = []
    
//     for (let i = n; i >= 1; i--){
//         result.push(i)
//     }

//     return result
// }

// console.log(reverseSeq(5))

const reverseSeq = (n) => {
    return Array(n).fill().map((element, i) => i + 1).reverse()
}

console.log(reverseSeq(5))