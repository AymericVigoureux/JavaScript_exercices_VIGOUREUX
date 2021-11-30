const { expect } = require( 'chai');

/**
 * 
 * @param {object} obj 
 */

function dump(obj){

  let result = "{";
  for(property in obj){
    if (typeof obj[property]  === "string" ){ //instanceof
      result+= property + ":\"" + obj[property] + "\","
    }
    else if(typeof obj[property] === "object") {
      if( obj[property] instanceof Array )
      result+= property + ":[" + obj[property] + "],"
    }
    else{
      result+= property + ":" + obj[property] + ","
    }
  }
  result = result.substring(0, result.length -1);
  result+= "}";
  return result;
}

let obj = {};
obj.firstname = "Alan";
obj.lastname = "Turing";
obj.birthday = [1921, 6, 23];
expect( dump(obj)).to.equal("{firstname:\"Alan\",lastname:\"Turing\",birthday:[1921,6,23]}") // => {firstname:"Alan",lastname:"Turing",birthday:[1921,6,23]}