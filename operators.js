//Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//Unary operators
console.log(a++); //10
console.log(++a); //12

//Assignment operators
b = a;
console.log(b); //12
a += b;
console.log(a); //24

//Comparison operator
let age = 18;
console.log(age < 18);  //false
console.log(0 > -2);    //true

console.log(5 == 4);    //false
console.log(5 != 4);    //true

let n = 5;
let str = '5';
console.log(typeof str);    //string
console.log(n == str);  //true,      string -> number

console.log(n === str); //false, compares type & value.

// == compare values not type.
console.log(0 == '');   //true
console.log(0 == false);    //true
console.log(null == undefined); //true

//  === strict comparision
console.log(0 === '');  //false
console.log(0 === false);   //false
console.log(null === undefined);    //false

// comparision for non-numbers
console.log('a' > 'A'); //true,  a -> 61, A -> 41, unicode character
console.log('a' < 'b'); //true, b-> 62
console.log('*' > '&'); //true
