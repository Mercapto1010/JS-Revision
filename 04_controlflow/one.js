// if
const isUserloggedIn = true
const temperature = 25

// if (temperature == 36) {
//     console.log("less than 50");    
// }else{
//     console.log("greater than 50");
// }
// console.log("executed");

// <, >, <=, >=, ==, !=, ===, !==

//  const score = 200

//  if(score>100){
//     let power = "fly"
//     console.log(`User can: ${power}`);
//  }
//  console.log(`User can: ${power}`);


// const balance = 545

// if (balance > 500)  console.log("test"), console.log("test2"); (implicit scope)


// if (balance < 500) {
//          console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const UserloggedIn = true
const debitCard = true
const loggedInFromgoogle = false
const loggedInFromEmail = true

if (UserloggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}


if (loggedInFromEmail || loggedInFromgoogle) {
    console.log("User logged in");
}

