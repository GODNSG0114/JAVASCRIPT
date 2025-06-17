let myHeros = ["thor" , "spiderman"]

let heroPower = {
    "thor" : "hammer",
    "spiderman" : "swing",
    getSpidyPower : function (){
        // console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.nikhil = function (){                 //  prototyping on Object
    //  console.log("object prototype is worked")
}
heroPower.nikhil()   //  due to prototyping on Object , as heropower is also object so "nikhil" prototype can be accessible for objects  
myHeros.nikhil();    //   myHeros is a array but is also object so it can be defenetly access th nikhil prototype

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// inheritance

const User = {
    name: "nikhil",
    email: "nikhil@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// QUESTION :  By making new prototype delete the extra spaces from string 
let personName = "Nikhil   "
console.log(`before: ${personName.length}`)

String.prototype.truelength = function(){
      console.log(this)
     console.log(this.trim().length)
}
personName.truelength()
