const userEmail = []

// if (userEmail) {
//     console.log("Got User Email");
// }
// else{
//     console.log("Dont have userEmail");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined

// truthy values
// "0", 'flase', " ", [], {}, function(){}

// if (userEmail.length=== 0) {
//     console.log("Array is empty");
// }

 const emptyObj = {}

 if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
 }

//   Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false


const KinderJoyPrice = 40
KinderJoyPrice <= 80 ? console.log("Sasta") : console.log("Mehanga")