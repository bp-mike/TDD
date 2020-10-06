function f(n){
  if(n < 1){
    return 'should be greater or equal to 1'
  }
  else if(n === 1){
    return 1
  }
  else if(n ===2){
    return 1
  }
  else if( n > 2 && n < 31){
    return f(n-1) + f(n-2)
  }
}
console.log(f(8));

module.exports = f;

// if([1,2,3] != [1,2,3]){
//   console.log(' this is true in js');
// }
// else{
//   console.log('in js arrays are != ')
// }








