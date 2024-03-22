// alert displays an alert message on the page.
// prompt displays a dialog box that asks user for some input.

// values output

// alert("Something went wrong!");
console.log("this is a simple log");

// error message -> red color
console.error("this is an error message");

// warning message -> yellow color
console.warn("this is a warning message");

// values input

// let firstName = prompt("enter your name");
// console.log("Welcome", name);

//
// Practice Qs
// Q.1

let num = 1000;
if (num % 10 == 0) {
  console.log("good");
} else {
  console.log("bad");
}

// Qs.2

// let name = prompt("enter name");
// let age = prompt("age");
// alert(`${name} is ${age} years old.`);

// Qs.3

let quarter = 2;
switch(quarter) {
  case 1:
    console.log("Quarter1 : January, February, March");
    break;
  case 2:
    console.log("Quarter2 : April, May, June");
    break;
  case 3:
    console.log("Quarter4 : July, August, September");
    break;
  case 4:
    console.log("Quarter4 : October, November, December");
    break;
  default:
    console.log("Not a quarter");
}

// Qs.4

let str = "apples";
if ((str[0] == 'A' || str[0] == 'a') && (str.length > 5)) {
    console.log("string is golden string");
} else {
    console.log("string is not a golden string");
}

// Qs.5 Greatest of three numbers.

let a = 2;
let b = 3;
let c = 5;

if (a > b) {
    if (a > c) {
        console.log("Greatest :", a);
    } else {
        console.log("Greatest :", c);
    }
} else {
    if (b > c) {
        console.log("Greatest :", b);
    } else {
        console.log("Greatest :", c);
    }
}

// Alternative 

if (a > b && a > c) {
    console.log("a is greatest");
} else if (b > c ) {
    console.log("b is greatest");
} else {
    console.log("c is greatest");
}

// Qs.6

let num1 = 32;
let num2 = 47852;
if ((num1 % 10) == (num2 % 10)) {
    console.log("Same last digits ->", num1 % 10);
}

