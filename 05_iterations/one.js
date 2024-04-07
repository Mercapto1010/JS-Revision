// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 6){
        // console.log("6 is best number");
    }
    // console.log(element);

}


for (let i = 0; i <=10; i++) {
    // console.log(`Table of: ${i}`);
    for (let j = 0; j <=10; j++) {
      //  console.log(`Inner loop value: ${j} and inner loop ${i}`);
    //    console.log(i + `*` + j + `=` + i*j); 
    }
    
}

let myArray = ["TradeX", "YourParking", "TradeX.ai"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// for (let index = 1; index <=20; index++) {
//    if (index == 6) {
//     console.log(`6 number detected`);
//     break
//    }
//    console.log(`value of is ${index}`); 
// }


for (let index = 1; index <=20; index++) {
   if (index == 6) {
    console.log(`6 number detected`);
    continue
   }
   console.log(`value of is ${index}`); 
}