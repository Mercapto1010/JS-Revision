// Singleton
// Object.create

// Objects Literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Prateek pathak",
    "nickname": "Yash Pathak",
    [mySym]:"key1",
    age: 20,
    email: "yash@gmail.com",
    location: "Jaunpur",
    isLoggedIn: false,
    LastLoginDay: ["monday","saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["nickname"])
// console.log(JsUser[mySym])

JsUser.email = "prateek@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "prateek@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user kaise ho");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user kaise ho, ${this.name}`);
}

console.log(JsUser.greetingTwo());