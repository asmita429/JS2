// Everything in JS is true or false(in boolean context).
// This doesnot mean their value is false or true,
// but they are treated as false or true if taken in boolean context.
// falsy values : false, 0, -0, On(BigInt value), ""(empty string), null, undefined, NaN.
// truthy values: everything else

// falsy value eg:
if (0) {
    console.log("it has true value");
} else {
    console.log("it has false value");  //
}

// truthy value eg:
let str = " ";
if (str) {
    console.log("string is not empty"); //
} else {
    console.log("string is empty");
}