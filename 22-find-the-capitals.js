var capitals = function (word) {
	// Write your code here
  let capital = []
  for(let i = 0; i < word.length; i++){
    if(word[i] === word[i].toUpperCase()){
      capital.push(i)
    }
  }
  return capital;
};

console.log(capitals('aAbB'))