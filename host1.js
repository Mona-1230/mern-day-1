console.log(x); // undefined(not an error)
var x = 10;

function example() {
    if (1) {
        var count = 10;
    }
    console.log(count);
}
example(); // 10

function greet() {
    console.log("hello");
}
greet(); // "hello"

sayhello(); // "hello from sayhello"
function sayhello() {
    console.log("hello from sayhello");
}

const greetexpr = function() {
    console.log("hello , this is a function expression");
};
greetexpr(); // "hello , this is a function expression"

const greetname = function() {
    console.log("hello , this is a named function expression");
};
greetname(); // "hello , this is a named function expression"
// greeting(); // Error: greeting is not defined

function process(callback) {
    console.log("Processing...");
    callback();
}

function done() {
    console.log("Task Completed!");
}

process(done);

function higherorderFunction(func) {
    console.log("calling the passed function:");
    func();
}

function sayHi() {
    console.log("Hi from callback");
}

higherorderFunction(sayHi);

//normal function expression
const greetnormal=function(name){
    return "Hello!"+name;
};

//arrow function expression
const greetArrow=(name)=>{
    return "Hello!"+name;
};
console.log(greetnormal("Alice"));
console.log(greetArrow("Bob"));

const add = (a, b) => a + b;
console.log(add(4, 6));//10

const square = x => x * x;
console.log(square(4)); //16

/*const fruits = ['apple', 'banana'];
const newLength = fruits.push('orange');
console.log(fruits);
console.log(newLength); //3
//added at the end of the array (push)*/

/*const fruits = ['apple', 'banana'];
const newLength2 = fruits.unshift('orange');
console.log(fruits);
console.log(newLength2); //3
//added at the front of the array (unshift)*/

/*const fruits = ['apple', 'banana'];
const newLength2 = fruits.shift('orange');
console.log(fruits);
console.log(newLength2); //3
//added at the front of the array (unshift)*/

let fruits = ["apple", "banana", "cherry", "grape", "Kiwi"];

//extract from index 1 to 3 (end not included)];
let sliced = fruits.slice(1, 2);
console.log(sliced); //["banana", "cherry", "grape"]

console.log(fruits); //original array remains unchanged

// Negative indices count fromthe end
let lastTwo = fruits.slice(-2);
console.log(lastTwo); //["grape", "Kiwi"]

let veg = ["apple", "banana", "orange"];
console.log(veg.includes("banana")); // true
console.log(veg.includes("grape")); // false


// Array using numbers
let numbers = [1, 4, 7, 12, 15];

// find the first number greater than 10
/*let found = numbers.find(num => num > 10);

console.log(found); */// 12) {

/*let nums = [3, 5, 7, 8, 10];
let evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums); // [8, 10]*/

let names = ["Raj", "Abi", "Mahesh", "Kumar"];
let longNames = names.filter(name => name.length > 4);
console.log(longNames); // ["Mahesh", "Kumar"]

let nums = [1, 2, 3, 4];
let doubled = nums.map(n=>n*2);
console.log(nums);
console.log(doubled); // [2, 4, 6, 8]

let numbers1 = [1, 4, 9, 12, 16];
let found = numbers1.map(num => num > 10);
console.log(found); // 12

let prices = [100, 200, 300];
let counted = prices.map(price => price + 100);
console.log(counted); // [200, 300, 400]

let persons = ["vishal", "Hari", "Ravi"];
let addMr = persons.map(name => "Mr." + name);
console.log(addMr); // ["Mr. vishal", "Mr. Hari", "Mr. Ravi"]

let numbers2 = [1, 4, 7, 12, 15];

// find the first number greater than 10
let shown = numbers.filter(num => num > 10);

console.log(shown);

let marks = [30,60,70,80,90,95];
let passed = marks.filter(mark => mark >= 50);
console.log(passed); //[60,70,80,90,95]

let college = {
    name: "students",
    id: 1,
    bus: 46,
}
console.log(college.name); // "students"
console.log(college["id"]); // 1
console.log(college.bus); // 46


const students = [
    { name: "Mohana", age: 18, grade: "A+" },
    { name: "Rahul", age: 21, grade: "B" },
    { name: "Priya", age: 19, grade: "A" }
];
const names1 = students.map(student => student.name);

console.log(names1);//prints only the names by using map method



let students1 = [
    { name: "Mohana", marks: 89 },
    { name: "Rahul", marks: 76 }
];
let names2=students1.filter(f=>f.marks>80).map(n=>n.name);
console.log(names2); //prints only the students who scored more than 80 marks

const person = {
    name: "John",
    age: 30,
    city: "New York"
};
 for (let key in person) {
    console.log(key, person[key]);//for..in loop - iterates the keys of the object
 }

let colours = ["red", "green", "blue"];

for (let f of colours)
{
    console.log(f); //for..of loop - iterates the values of the array
}


let names3 = ["Alice", "Bob", "Charlie"];

names3.forEach(n =>  {
    console.log("Hello " + n); //forEach method - executes a provided function once for each array element
});

let nums3 = [10, 20, 30];
let total = nums3.reduce((sum, current) => sum + current, 0);
console.log(total);