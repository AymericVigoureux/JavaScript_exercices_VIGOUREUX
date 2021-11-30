const { expect } = require( 'chai');


/**
 * 
 * @param {number} nbr 
 * @param {function} fnc 
 */

function initWith(nbr, fnc){
  let result = []
  for(let i = 0; i < nbr; i++){
    result.push(fnc(i))
  }
  return result;
}



const withZero = () =>0;
const fromZero = index => index;
const from42 = index => 42 + index;

expect( initWith(5, withZero)).to.deep.equal([ 0, 0, 0, 0, 0 ]); // => [0, 0, 0, 0, 0]
expect( initWith(5, fromZero)).to.deep.equal([ 0, 1, 2, 3, 4 ]); // => [0, 1, 2, 3, 4]
expect( initWith(5, from42)).to.deep.equal([ 42, 43, 44, 45, 46 ]); // => [42, 43, 44, 45, 46]