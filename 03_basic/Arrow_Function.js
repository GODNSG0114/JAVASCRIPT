// const user = {
//     username: "Nikhil",
//     price : 999,

//     welcomeMessage : function(){
//         console.log(`${this.username} , welcome to website`);
//       console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function ThisKeyword(){
//     let username= "Nikhil"
//     console.log(this)
// }
                                     // This keyword is used in object only not in function
// ThisKeyword()


//++++++++++++++++++++++++++++++++++++++++++++++++++   Arrow functions  ++++++++++++++++++++++++++++++++++++++++++++++++++++++//

const ThisKeyword = () => {
       let username= "Nikhil"
       console.log(this)
}
ThisKeyword()

//++++++++++++++++++++++++++++++++++++++++   Arrow functions different methods  ++++++++++++++++++++++++++++++++++++++++++++++//

// method 1:
// const addTwo  = (num1 , num2) =>{
//     return num1 + num2
// }
// console.log( "Arrow function (addTwo ) input {method 1}: ",addTwo( 2 , 4 ))

// method 2:
const addTwo  = (num1 , num2) => (num1 + num2)   // valid for one line function
console.log( "Arrow function (addTwo ) input {method 2}: ",addTwo( 2 , 4 ))

