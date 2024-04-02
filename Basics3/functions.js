 function sayMyName() {
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
 }

//  sayMyName()

// function addTwoNumbers(num1,num2) {
//     console.log(num1+num2);
    
// }
function addTwoNumbers(num1,num2) {
    // let result = num1+num2
    // return result
    return num1+num2
}

const result =addTwoNumbers(45,55)
// console.log("result:",result);



function loginUserMessage(username="anonymous"){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} has just logged in`
}
// console.log(loginUserMessage("YASH"))
// console.log(loginUserMessage("Yash"));

 function calculateCartPrice(val1,val2,...num1){
         return num1
 }
//  console.log(calculateCartPrice(455,42,46565,1523));

const user = {
    username:"Yash",
    price: 456
}
function handleObject(anyObject){
         console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username:"Prateek",
    price: 610
})



const newArray = [100, 200, 300, 400, 500]

function reutrnSecondValue(getArray){
        return getArray[1]
}
// console.log(reutrnSecondValue(newArray));
console.log(reutrnSecondValue([600, 700, 800, 900]));
