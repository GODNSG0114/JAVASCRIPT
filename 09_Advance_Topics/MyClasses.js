class user {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return (`${this.password}NSG`)
    }
    changeUsername() {
        return (`${this.username}`.toUpperCase())
    }
}

const gaurav = new user("gaurav", "gaurav@gmail.com", 123);
console.log(gaurav.encryptPassword())
console.log(gaurav.changeUsername())

//   Behind the scene of classes 

/*

function user(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}NSG`
}
user.prototype.changeUsername = function(){
    return `${this.username}`.toUpperCase();
}

const gaurav  = new  user("gaurav" , "gaurav@gamil.com" , 123)
console.log(gaurav.encryptPassword())
console.log(gaurav.changeUsername())

*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// inheritance

class NewUser {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username} `);
    }
}

class Teacher extends NewUser{

    constructor(username , email , password){
        super(username);
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`course is added by ${this.username}` )
    }
}

const nikhil = new Teacher("nikhil" , "nsg@gamil.com" , 123)
console.log(nikhil.username)
nikhil.logMe()
nikhil.addCourse()
