const coding = ["js", "python", "ruby", "cpp", "java"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item){
//      console.log(item)
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//            console.log(item, index, arr);
// } )



const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },

    {
        languageName: "python",
        languageFile: "py"
    },

    {
        languageName: "java",
        languageFile: "java"
    },
]

myCoding.forEach( (item) => {
         console.log(item.languageName);
} )