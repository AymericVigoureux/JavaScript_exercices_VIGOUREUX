const { expect } = require( 'chai');


function initWith(fnc) {
  return function(size, init = 0) {
    let result = []
    for(let i = 0; i < size; i++){
      result.push(fnc(i + init))
    }
    return result;
  }
}

const initWithZeros = initWith(() =>0);
const initFrom = initWith(index => index);

expect( initWithZeros(3)).to.deep.equal([0, 0, 0]); // [0, 0, 0]
expect( initFrom(3, 42)).to.deep.equal([42, 43, 44]); // [42, 43, 44]