//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "34545@fnjf"
tinderUser.name = "Billu"
tinderUser.isLoggedin = false

//console.log(tinderUser);

const regularUser = {
    email: "yoyo@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Prateek",
            lastname: "Pathak"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

 const obj1 = {1: "a",2: "b",3:"c"}
 const obj2 = {4: "d",5:"e"}
 const obj4 = {6:"f",7:"g"}
 //const obj3 = {obj1,obj2}
 //const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}
 //console.log(obj3);

 const users = [
    {
        id: 1,
        email: "rhggail.com",
    },

    {
        id: 2,
        email: "vgshail.com",
    },
    {
        id: 3,
        email: "jdfjkh.com",
    }
 ]

 users[1].email
 //console.log(tinderUser);
 //console.log(Object.values(tinderUser));
 //console.log(Object.keys(tinderUser));
 //console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedin'));


const course = {
    name: "JS Revision",
    price: 456,
    courseInstructor: "Yash"
}

//  course.courseInstructor

const {courseInstructor: master} = course
// console.log(courseInstructor);
console.log(master);


