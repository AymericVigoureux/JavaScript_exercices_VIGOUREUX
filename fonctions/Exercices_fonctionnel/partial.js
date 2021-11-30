const { expect } = require( 'chai');

/**
 * 
 * @param {function} func1 
 * @param {number} value 
 */

function partial(func1, value){
  return function(...arguments){
    return func1(value, ...arguments)
  }
}

const f = (x, y, z, w) => x * (y - z + w);
expect(partial(f, 2)(3, 4, 9)).to.equal(16) // => 16   <=> (2 * (3 - 4 + 9))

expect(partial(((x, y, z) => x * (y - z)), 2)(3,4)).to.equal(-2)  // => -2   <=> (2 * (3 - 4))