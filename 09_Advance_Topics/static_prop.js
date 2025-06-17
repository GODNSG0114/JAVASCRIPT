class user {
    constructor(username) { 
        this.username = username 
    }
     
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createID(){                                     /// due to "static" keyword this function is not available anymore to use 
        return 123;
    }
}

const nikhil = new user("nikhil")
// console.log(nikhil.createID())    // this will give error 
