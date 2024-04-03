const user = {
    username: "prateek",
    price: 6969,

    welcomeMessage: function(){
        console.log(`${this.username} , swaagat hai apkaa`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Yash"
// user.welcomeMessage()

// console.log(this);

 // this works only in object not in function
//  function chai(){
//     let username = "Prateek"
//     console.log(this.username);   
//  }
//  chai()

// const chai = function(){
//     let username = "Prateek"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "Prateek"
//     console.log(this);
// }
// chai()

// const addtwo = (num1,num2)=>{
//         return num1+num2
// }
// console.log(addtwo(55,25))


// const addtwo = (num1,num2)=> num1+num2

// const addtwo = (num1,num2)=> (num1+num2)


const addtwo = (num1,num2)=> ({username:"yash"})


console.log(addtwo(55,25))
 
