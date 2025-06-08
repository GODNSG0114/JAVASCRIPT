const marvel_heros = ["thor" , "spiderman" , "ironman"]
const DC_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(DC_heros);   // DC_heros whole array is included in marvel array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // to access the element form DC_heros

// const all_heros = marvel_heros.concat(DC_heros);  //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// // console.log(marvel_heros)
// console.log(all_heros)

                     // Spread technique //        (Best technique)
    
// const All_new_heros = [...marvel_heros , ...DC_heros];
// console.log(All_new_heros)

//                     // Flat technique // 
                    
// const another_array = [1, 2, 3 ,[4 ,5 ,6] , 7,[6, 7, [4 , 5]]] 
// console.log(another_array);
// const flated_another_array =  another_array.flat(Infinity);
// console.log(flated_another_array);


console.log(Array.isArray("Nikhil")) 
console.log(Array.from("Nikhil")) 
console.log(Array.from({name: "Nikhil"}))   // important

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2 , score3))
console.log(Array.of(score1))
console.log(Array.from(score1))

