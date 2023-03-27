// this is how to comment in js
// 3 different ways to declare a variable: var (error prone, should be avoided; no longer best practice to use) / let (keyword that replaced var; let vs. const: let is used if you need to change the value of the variable; i.e. let myName = "James" [value]; / myName = "Tom" [the variable has been assigned a new value that has the string "Tom"; const denotes a variable that cannot be changed]) / const (javascript keywords)

let myName = "James";
console.log(myName)

let myAge = 26;
console.log(myAge)

const name = "Hello, my name is " + myName
console.log(myName)

const age = "I am " + myAge
console.log(age)

let x = 5
const y = "5"

let number = x + y;
console.log(typeof number)
// variable assigned value is a number

let myDogsName;

myDogsName = "Rocky"

const h1 = document.getElementById("h1");

// console: located in developer tools / methods: in-built functions in java, such as console.log; links to console in inspect mode, allowing developers to debug easier)
// data types: string (always in quotes, written sequence of numbers or letters), number (different from string, not in quotation marks), boolean (true/false statement), array (stores multiple values and elements in one variable (marked out with []) object (a standalone object with its own properties and type)

const yourName = "Bill";
// variable assigned value is a string 

let arsenalFan = true;
isAlive = false;
// variable assigned value is a boolean

const myPets = ["Dog", "Cat", "Goldfish"]
// variable assigned value is an array
// cannot change a const, but can if its an array; there can be an array of objects

const locations = {
    heading: "",
    location: "",
    highlyRated: "",
    price: 48
}
// variable assigned value is an object

// operates: arithmetic (+, -, *, /, ++ [incrementing], -- [decrement]),

// logs as a string in the console; string cannot be added to a number, rather it concatenates 

// <h2 id="demo" <!-- <script> docuent.write(message); </script> --> js: document.getElementById("demo").innerHTML - message;