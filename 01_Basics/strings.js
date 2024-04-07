const realname = "Prateek"
const age = 20

//console.log(realname + age + "Value");

//console.log(`Hello my name is ${realname} and my age is ${age}`);

const gameName = new String('Maha-bharat')
 
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

//console.log(gameName.charAt(3));
//console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,5)
//console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

const newStringOne = "   YAsh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/yash%20pathak"
console.log(url.replace('%20','+')); 
console.log(url.includes('prateek'));

console.log(gameName.split('-'));