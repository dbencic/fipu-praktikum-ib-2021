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
    it("function should throw error if argument is not a number", 
            function(){
        //assert.ifError();
        //assert.ifError(fizzBuzz("1"));
    });
    it("function should accept number as an argument", function(){
        fizzBuzz(1);
    });
    it("should return Fizz if number is dividible by 3", function() {
        expect(fizzBuzz(3)).to.equal("Fizz");
        expect(fizzBuzz(6)).to.equal("Fizz");
    });
    it("should return Buzz if number is dividible by 5", function() {
        expect(fizzBuzz(5)).to.equal("Buzz");
    });
    it("should return FizzBuzz if number is dividible by 3 & 5", function() {
        expect(fizzBuzz(30)).to.equal("FizzBuzz");
    });
    it("If number is not divisible by 3 or 5 should return empty string", function() {
        expect(fizzBuzz(4)).to.equal("");
    });
});

//R-G-R