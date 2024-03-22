// Logical operators : evaluates combined expressions.

// && logical AND
console.log("T && T ", true && true);
console.log("T && F ", true && false);
console.log("F && T ", false && true);
console.log("F && F ", false && false);

let marks = 90;
if (marks >= 33 && marks >= 80) {
    console.log("Pass");
    console.log("Grade : A+");
}


// || logical OR
console.log("T || T ", true || true);
console.log("T || F ", true || false);
console.log("F || T ", false || true);
console.log("F || F ", false || false);

if (marks >= 33 || marks >= 80) {
    console.log("Pass");
    console.log("Grade : A+");
}


// ! Logical NOT
console.log("!true ->", !true);
console.log("!false ->", !false);

if ( !(marks < 33)) {
    console.log("Pass");
}

if ((marks > 33 && marks <= 80) || !true) {
    console.log("Pass");
}


// Practice Qs 
let string = "asmita";

if ((string[0] === 'a') && (string.length > 3)) {
    console.log("Good string");
} else {
    console.log("not a good string.");
}

// JS is dynamic type. if we use == sign, then JS can automatically covert number -> string or vice versa.

let num = 12;
if ((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))) {
    console.log("safe");
} else {
    console.log("unsafe");
}

