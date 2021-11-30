/**
 * 
 * @param {char} char 
 * @param {string} str 
 * @param {number} quantity 
 */

 function PadRight(char, str, quantity){
  if(str.length > quantity){
    return("erreur")
  }
  if(str.length === quantity){
    return str
  }
  let resul = [];
  resul = str; 
  for(let i = 0; i < quantity - str.length; i++){
    resul+= char;
  }
  return resul
}

console.log(PadRight('a', "aymeric",  10))