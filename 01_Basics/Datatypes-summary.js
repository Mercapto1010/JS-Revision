// Primitive
// 7 Types:- String Number Boolean Symbol Null Undefined BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('234')
// const anotherId = Symbol('234')
// console.log(id === anotherId);

// const bigNumber = 345234354654n

// Reference(Non-Primitive)
// Array Objects Functions

// const heroes = ["Shaktiman", "Sabu" ,"nagraj"]
 
// const myObj= {
//     name: "Yash",
//     age: 20,
// }

// const myFunction = function (){
//     console.log("YoYo Bantai");
// }

// console.log(typeof bigNumber);





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let firstname =  "Prateek"

let anothername = firstname
anothername = "Yash"

console.log(firstname);
console.log(anothername);

let userOne = {
    email : "user@ymail.com",
    username : "Yash"
}
let userTwo = userOne
userTwo.email = "yash@ymail.com"

console.log(userOne);
console.log(userTwo);
