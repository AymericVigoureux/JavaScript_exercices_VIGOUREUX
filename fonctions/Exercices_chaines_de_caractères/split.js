
/**
 * 
 * @param {string} str 
 * @param {string} sep 
 */

function split(str, sep) {
  let resul =[];
  for (let i =0; i< str.length; i++){
    let save = true;
    if(str[i] === sep[0] && str.length - i >= sep.length){
      for(let j = 0; j < sep.length; j++){
        if (str[i+j] !== sep[j]){
          break
        }
        else if(j === sep.length -1){
          i = i+j;
          save = false;
        }
      }
    }
    if (save){
      resul = resul + str[i];
    }
  }
  return resul;

}


console.log(split("aymericVigoureux", "reux"))