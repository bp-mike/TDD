const assert = require('chai').assert;
const fact = require('../factorial');

describe('testing for factorial', function() {
    let factorial = fact;
    
    it('check if factorial result is a number',function(){
        assert.isNumber(factorial(24), Number);
    });

    it('check of factorial of zero and 1',function(){
        assert.equal(factorial(0),1, '0! should be 1');
        assert.equal(factorial(1),1,'1! should be 1');
    });

    it('check if factorial funtion works correctly',function(){
        assert.equal(factorial(5),120);
    });   
});

// group members
// Mike Otieno
// Eva Mirembe
// Biko Jeremy Biteete
// leslie

