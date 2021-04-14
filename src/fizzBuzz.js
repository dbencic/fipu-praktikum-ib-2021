//R-G-R
//napraviti proširenje funkcionalnosti da za brojeve djeljive sa 7
//program vraća "Suzz",
//za brojeve djeljive sa 5 i 7 vraća BuzzSuzz
//za brojeve djeljive sa 3 i 7 vraća FizzSuzz
function fizzBuzz(num) {
    // throw Error();
    let result = "";
    if(!(num % 3)) result += "Fizz";
    if(!(num % 5)) result += "Buzz";
    return result;
}

module.exports = fizzBuzz;