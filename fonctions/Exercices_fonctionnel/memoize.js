const { expect } = require( 'chai');


function memoize(fnc){
  const cache =[0,1]
  return function fibonacci_m(value) {
    if (!cache[value]){
      cache[value] = fnc(value)
    }
    return cache[value]
  }
}

/**
 * 
 * @param {number} fibo 
 */

function fibonacci(fibo){
  if(fibo < 2){return fibo}
  else{
    return (fibonacci(fibo-1) + fibonacci(fibo-2))
  }
}

const fibonacci_m = memoize(function (n) {
  if (n === 0 || n === 1) return n;
  else return fibonacci_m(n - 1) + fibonacci_m(n - 2);
});



expect(fibonacci(16)).to.equal(987);
expect(fibonacci_m(16)).to.equal(987);
