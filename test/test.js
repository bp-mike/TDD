const assert = require('chai').assert;
const Factorial = require('../factorial');
const fib = require('../Fibonacci');
const addNumbers = require('../factorial').addNumbers;

//call a method describe
describe('testing for factorial', function() {
    let fact = Factorial;
    
    it('check if factorial result is a number',function(){
        assert.isNumber(fact(24));
    });
    it('check if factorial funtion works correctly',function(){
        assert.equal(fact(5),120);
    });

    it('sum should be above 5', function(){
        let result = addNumbers(3,3);
        assert.isAbove(result,5);
    })

    it('check if fibonacci funtion works correctly', function(){
        let result = fib(8);
        assert.equal(result, [0, 1,  1,  2, 3, 5, 8, 13, 21]);
    })

    
});

// group members
// Mike Otieno
// Eva Mirembe
// Biko Jeremy Biteete
// leslie