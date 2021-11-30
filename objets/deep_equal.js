const { expect } = require( 'chai');



function deepEqual(tab1, tab2) {
  if(tab1.length !== tab2.length){return false;}
  for(let i = 0; i < tab1.length; i++){
    if(tab1[i] instanceof Array && tab2[i] instanceof Array){
      if (!deepEqual(tab1[i], tab2[i])){return false}
    }
    else if(tab1[i] !== tab2[i]) {return false;}
  }
  return true;
}


let a1 = [1, 2, [3, 4], 5,"hello", [9, 8, 5, 7]];
const a2 = JSON.parse(JSON.stringify(a1)); // Deep copy
expect( a1 === a2).to.deep.equal(false); // => false
expect( deepEqual(a1, a2)).to.deep.equal(true); // => true
