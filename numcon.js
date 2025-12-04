console.log("1"+2);
console.log("10"-2);
console.log("10"*2);
console.log("10"/2);

console.log(true + 1);
console.log(false + 1);

console.log(Number("123")); //EXPLICIT TYPE conversion
console.log(Number("abc")); //NaN
console.log(String(123)); // "123"
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false  

console.log(5=="5");//true
console.log(5=="meow");//ture
console.log(5==="meow");//false
console.log(5==="5");//fale

let age = "25";
age = 30;
console.log(age);

var age1 = 25;//redeclaration not allowed with let
var age1 = 30;
console.log(age1);

const age2 = 40;
console.log(age2);
