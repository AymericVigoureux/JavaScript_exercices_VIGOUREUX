/**
 * 
 * @param {string} haystack 
 * @param {string} needle 
 * @param {number} startIndex 
 */

function contains(haystack, needle, startIndex = 0){

  for (let i = startIndex -1; i< haystack.length; i++){
    let save = true;
    if(haystack[i] === needle[0] && haystack.length - i >= needle.length){
      for(let j = 0; j < needle.length; j++){
        if (haystack[i+j] !== needle[j]){
          break
        }
        else if(j === needle.length -1){
          return i + 1;
        }
      }
    }
  }
  return -1;
}

console.log(contains("aymericVigoureux", "Vigoureux", 5))
console.log(contains("aymericVigoureux", "Vigoureux"))
console.log(contains("aymericVigoureux", "Vigoureux", 9))