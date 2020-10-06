const assert = require('chai').assert;
const fib = require('../fibonacci');
const fib2 = require('../clark')

// ______ testint ../fibonnacci 
describe('fibonocci tests', function(){

    let fibonacci = fib
    let m = new fib(8);

    it('check if fibonacci funtion works correctly', function(){
        assert.deepEqual(fibonacci(8), ([ 0, 1, 1, 2, 3, 5, 8, 13, 21 ]));
    })

    it('check if fibonacci funtion works correctly', function(){
        assert.deepEqual(fibonacci(5), [ 0, 1, 1, 2, 3, 5 ]);
    })

    // . What is the largest number you might accept as a parameter?
    // . What should you do if the parameter is out of range?
    it.skip('check scenarial when parameter is out of range', function(){
        assert.deepEqual(fibonacci(30),
    [
            0,      1,      1,       2,
            3,      5,      8,      13,
           21,     34,     55,      89,
          144,    233,    377,     610,
          987,   1597,   2584,    4181,
         6765,  10946,  17711,   28657,
        46368,  75025, 121393,  196418,
       317811, 514229, 832040, 1346269
     ],
     'The parameter is out of range' );
    })
    // . Negative integers? . Is zero valid?
    it.skip('check if zero and negative intagers are allowed', function(){
        assert.equal(fibonacci(0), NAN,'start from 1 and above')
        assert.equal(fibonacci(-1), NAN,'start from 1 and above')
    }); 

     it('should show the position of the number 13 in the sequence', function(){
        // let m = new fib(8);
        assert.equal(7, m.indexOf(13))
    })

    it('should show 0 comes first in the fibonacci sequence', function(){
        let n = m.indexOf(0) + 1;
        assert.equal(1, n)
    })

    it('Should be an array returned', function(){
        assert.isArray(m)

    })
})

// _________ testing ../clark
describe('fibonocci tests', function(){

    let f = fib2

    it('check if fibonacci funtion works correctly', function(){
        assert.equal(f(8), (21));
    })

    it('check if fibonacci funtion works correctly', function(){
        assert.equal(f(5), 5);
    })

    
})

