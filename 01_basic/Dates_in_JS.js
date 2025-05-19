// date

let mydate = new Date()
console.log(mydate);
console.log(mydate.toString);
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

let createDate = new Date('01-23-2023')
console.log(createDate.toLocaleString());

//   timestamp   
 let mytimestamp = Date.now()

 console.log(mytimestamp)
 console.log(createDate.getTime())

 let newdate = new Date()
 console.log(newdate)
 console.log(newdate.getMonth())
 console.log(newdate.getDay())

 newdate.toLocaleDateString('default' , {
    weekday:"long"
 })


