const { expect } = require( 'chai');

/**
 * 
 * @param {obejc} source 
 * @param {object} propertyNames 
 */

function diff(source, propertyNames){
  for(const value in propertyNames){
    delete source[value];
  }  
}



let o1 = { r: 0, g: 0, b: 0, a: 0 };
let withoutOpacity = { a: null };
let objectWithoutOpacity = diff(o1, withoutOpacity); // => { r: 0, g: 0, b: 0 }
expect(o1 === objectWithoutOpacity).to.equal(false) ; // => false