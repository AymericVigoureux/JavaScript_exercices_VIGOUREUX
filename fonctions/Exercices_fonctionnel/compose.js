/**
 * 
 * @param {function} func1 
 * @param {function} func2 
 * @returns 
 */

function compose(func1, func2){
  return function(value){
    return(func1(func2(value)))
  }
}

const increment = x => x + 1;
const double = y => y * 2;
const timesTwoPlusOne = compose(increment, double);
console.log(timesTwoPlusOne(5)) 

//console.log(compose(x => x*2, y => y+2)(4))