// formular
// n×(n-1)!
// _______________ recursive
function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}

let n = 4;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);

// answer = factorial(3);
// console.log(answer);
// module.export = factorial;


// ____________ interative
// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);

function addNumbers(value1, value2){
  return value1 + value2
}


module.exports = factorial;
module.exports = addNumbers;