function sayMyName(){
    console.log("N")
    console.log("I")
    console.log("K")
    console.log("H")
    console.log("I")
    console.log("L")
}

// sayMyName()

function add_Two_numbers(num1 , num2){
   const res = num1 + num2
   console.log(res);
   return res;
}
const result = add_Two_numbers(2,3);
console.log("result: " , result);

/////////////////   Rest Operator    ///////////////

function calculateCartPrice( ...num1){     // ... => rest operator
    return num1;
}
console.log("Rest operator use: " , calculateCartPrice(200,400, 500 , 2000));

////////////////  Object  handling  In function  /////////////

const user = {
    useraname: "Nikhil" , 
    price: 199
}

function handleObject(anyboject){
    console.log(`Username is ${anyboject.useraname} and price is ${anyboject.price}`)
}
// handleObject(user)
handleObject({
    useraname:"sam",     // Direct Array passing  
    price: 999
})