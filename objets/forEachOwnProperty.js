const { expect } = require( 'chai');

Object.prototype.forEachOwnProperty = function(fnc){
  for(let value of Object.keys(this)){
    fnc(value);
  }
}

const o1 = { a: 1 };
const o2 = Object.create(o1);
o2.b = 2;
o2.c = 3;

const props = [];
o2.forEachOwnProperty(prop => props.push(prop));
expect(props).to.deep.equal(['b', 'c']); // => ["b", "c"]; mais pas "a"
