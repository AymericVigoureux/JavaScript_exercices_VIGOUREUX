const { expect } = require( 'chai');


function restrict(target, keep){
  for(let value in target){
    let laVerite = false
    for(const val in keep){
      if(value === val){
        laVerite = true
      }
    }
    if(!laVerite){
      delete value
    }
  }
}


const config = { user: "user", pass: "pass" };
const tooMuchConfig = { vars: "LOG=info", user: "user", pass: "pass", env: "prod" };
expect("vars" in tooMuchConfig).to.deep.equal(true); // => true
expect("env" in tooMuchConfig).to.deep.equal(true); // => true

const properConfig = restrict(tooMuchConfig, config);
expect(properConfig === config).to.deep.equal(false); // => false
expect("vars" in properConfig).to.deep.equal(false); // => false
expect("env" in properConfig).to.deep.equal(false); // => false