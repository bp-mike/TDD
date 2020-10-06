// formular
// n×(n-1)!
// _______________ recursive
function factorial(n){
 
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}

let n = 50;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);


// ____________ interative
function factorial2(m){
    let result = 1;
    if (m == 0 || m == 1){
      return result;
    }else{
      for(var i = m; i >= 1; i--){
        result = result * i;
      }
      return result;
    }  
  }
  let m = 50;
  result = factorial2(m)
  console.log("The factorial of " + m + " is " + result);

  module.exports = factorial;
  module.exports = factorial2;