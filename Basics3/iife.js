// Immediately Invoked Function Expression(IIFE) used to avoid global scope's pollutions(variables etc.)

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //unamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})('Yash')