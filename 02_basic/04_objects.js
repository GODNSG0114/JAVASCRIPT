// PART 02 => OBJECT CONSTRUCTOR

 const tinderuser = new Object() ;

 console.log(tinderuser);
 tinderuser.id = "123abc" ;
 tinderuser.name = "Nikhil" ;
  console.log(tinderuser);

  const regularUser = {
    email : "some@gmail.com",
    fullname :{
        userFullName: {
            firstName : "Nikhil",    // Nested Objects
            lastName : "God" 
        }
    }
  }
  console.log(regularUser.fullname.userFullName);

     //  Mergeing Two Objects   //

const obj1 = {1: "a"  , 2: "b"}
const obj2 = {3: "c"  , 4: "d"}

const obj3 = {...obj1 , ...obj2}
console.log(obj3);

     // To ACCESS THE KEYS OF OBJECTS 
  console.log(Object.keys(tinderuser));
  console.log(Object.values(tinderuser));
  console.log(Object.entries(tinderuser));

  // IF value is not present but we are accesing it to avoid this error 
  console.log(tinderuser.hasOwnProperty('isLoggedIn'))


  // de - structuring 

  const course = {
    coursename : "JS in hindi" , 
    price : "999" ,
    courseInstructore : "Nikhil"
  }

console.log(course.courseInstructore)
const {courseInstructore : instructore} = course 
console.log(instructore)