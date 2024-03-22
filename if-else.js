// if statement
console.log("Before my if statement");
let age = 18;
if (age >= 18) {     //if condition is true then code inside {} will execute
    console.log("you can vote!");
    console.log("you can drive!");
}
if (age < 18) {
    console.log("you can not vote!");
}
console.log("After my if statement");


let firstName = "Asmita";
if (firstName == "Asmita") {
    console.log(`You are top 1% Blockchain Developer ${firstName}!`);
}

// Practice Qs Traffic light system
// JS is case sensitive.

// let color = "red";
// if (color === "red") {
//     console.log("Stop! light color is red");
// }
// if (color === "yellow") {
//     console.log("Slow down! light color is yellow.");
// }
// if (color === "green") {
//     console.log("Go! light color is green");
// }


// else - if statement

let Age = 14;
if (Age >= 18) {
    console.log("you can vote1");
} else if (Age <= 18) {
    console.log("you can vote2");
} else if (Age < 18) {
    console.log("you cannot vote3");
}

let marks = 75;

if (marks >= 80) {
    console.log("A");
} else if (marks >= 60) {
    console.log("B");
} else if (marks >= 35) {
    console.log("Pass");
} else if (marks < 35) {
    console.log("Fail");
}


let month = "april";

if (month === "january") {
    console.log("winter is here");
} else if (month === "april") {
    console.log("summer is here");
}


// else statement
let a = 18;
if (a >= 18) {
    console.log("you can vote!");
} else {
    console.log("you cannot vote!");
}


//Traffic light
let color = " ";
if (color === "red") {
    console.log("Stop! light color is red");
}
else if (color === "yellow") {
    console.log("Slow down! light color is yellow.");
}
else if (color === "green") {
    console.log("Go! light color is green");
}
else {
    console.log("Traffic light is broken.")
}


// Practice Question popcorn size
let size = "L";
if (size === "XL") {
    console.log("Price is Rs. 250.");
} else if (size === "L") {
    console.log("Price is Rs. 200.");
} else if (size === "M") {
    console.log("Price is Rs. 150.");
} else if (size === "S") {
    console.log("price is Rs. 100.");
} else {
    console.log("Choose a size.");
}


// Nested if-else
let mark = 45;
if (mark >= 33) {
    if (mark >= 80) {
        console.log("Grade : A");
    } else if (mark >= 60) {
        console.log("Grade : B");
    } else {
        console.log("Grade : C");
    }
} else {
    console.log("Better luck next time!");
}

