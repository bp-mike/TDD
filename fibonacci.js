// f(n) = f(n-1) + f(n-2)

function fibonacci(n){
  if (n===1){
    return [0, 1];
  } 

  else if(n < 1){
    return 'start from 1 and above'
  
  }else if(n > 30){
      return 'donot go above 30'
  
    }else{
    var s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  
  }

};
s = []

 console.log(fibonacci(8));
 
 module.exports = fibonacci;
