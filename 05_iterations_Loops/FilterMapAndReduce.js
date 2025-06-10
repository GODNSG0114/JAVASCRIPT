// Filter , map and reduce in javascript

// Note : filter want condition so it will return the values to varible but foreach and map are used to traverse and edit the array
const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const newMyNums = myNums.filter( (num) =>{
    return num > 4 
})
// console.log(newMyNums)  
// NOTE: Filter is same as foreach but we can return values in Filter

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//    example 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //  query => get a book having genre = history
  const genreHistory = books.filter(  (book)=> {
          return book.genre =="History"
  } )
//   console.log(genreHistory)

  //  query => get a book having edition greater than equal 2000 or having publish greater than 2000
  const edition_Publish_Foreach_loop  = []
   books.forEach( (book) => {
         if(book.edition >= 2000 || book.publish >= 2000){
         edition_Publish_Foreach_loop.push(book)
         }
  } )
//   console.log("by foreach loop: ")
//   console.log(edition_Publish_Foreach_loop)
   
  //      or      ////

const edition_Publish_filter = books.filter( (book)=> {
    return book.edition >= 2000 || book.publish >= 2000
} )
// console.log("by filter: ")
// console.log( edition_Publish_filter)
 
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// map
const myNumbers = [1,2,3,4,5,6,7,8,9,10];
const number = myNumbers.map( (num) => {
    return num + 1
})
// console.log(number)

 
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// reduce 

const myNum = [1,2,3]
// const myTotal = myNum.reduce(function (acc , currvalue) {
//     console.log(`accumulator ${acc} , currvalue ${currvalue}`)      
//     return acc + currvalue
// } ,0)
// console.log(myTotal)

// by arrow function -> 
const myTotal = myNum.reduce( (acc , currentvalue)=>{
   return acc + currentvalue 
},0)
 console.log(myTotal)

