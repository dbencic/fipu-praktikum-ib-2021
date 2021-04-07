var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const fizzBuzz = require("../fizzBuzz");
/*
FizzBuzz problem: 
- za broj djeljiv sa 3 funkcija vraća "Fizz"
- za broj djeljiv sa 5 funkcija vraća "Buzz"
- Za broj djeljiv sa 3 i 5 funkcija vraća FizzBuzz
- Za ostale brojeve vratiti undefined
*/
describe('fizz buz problem', function() {
    it('fizzBuzz should be a function', function () {
        fizzBuzz();
    });
});

//R-G-R