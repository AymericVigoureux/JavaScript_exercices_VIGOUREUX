/**
 * 
 * @param {string} str 
 * @param {string} start 
 */

function StartsWith(str, start) {
  for (let i =0; i< str.length; i++){

    if(str[i] === start[0] && str.length - i >= start.length){
      for(let j = 0; j < start.length; j++){
        if (str[i+j] !== start[j]){
          break
        }
        else if(j === start.length -1){
          return true
        }
      }
    }
  }
  return false
}

console.log(StartsWith("aymericVigoureux", "Vigureux"))