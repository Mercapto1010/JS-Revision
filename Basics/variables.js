const accountId = 12456
let accountEmail = "yash@google.com"
var accoountPassword = "12345"
accountCity = "Jaunpur"
let accountState;

//accountId = 2 not allowed to make changes in constant
accountEmail = "yoyo@gmail.com"
accoountPassword = "2324"
accountCity = "Varanasi"
console.log(accountId);
/*
prefer not to use var 
because of issue in block scope and fucntional scope
*/ 
console.table([accountId,accountEmail,accoountPassword,accountCity,accountState]);