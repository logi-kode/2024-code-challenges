function bmi(weight, height) {
    let calculateBmi = weight / (height * height)
    
    if(calculateBmi <= 18.5) {
      return 'Underweight'
    } else if(calculateBmi <= 25.0) {
      return 'Normal'
    } else if(calculateBmi <= 30.0) {
      return 'Overweight'
    } else if (calculateBmi > 30) {
      return 'Obese'
    }
    return `For weight = ${weight} and height = ${height}`;
  }
  
console.log(bmi(100, 1.80))