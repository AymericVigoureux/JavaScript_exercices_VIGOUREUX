/**
 * 
 * @param {char} char 
 * @param {string} str 
 * @param {number} quantity 
 */

function PadLeft(char, str, quantity){
  if(str.length > quantity){
    return("erreur")
  }
  if(str.length === quantity){
    return str
  }
  let resul = [];
  for(let i = 0; i < quantity - str.length; i++){
    resul+= char;
  }
  resul+= str; 
  return resul
}

console.log(PadLeft('a', "aymeric",  6))