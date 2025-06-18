
Youtube video link - https://www.youtube.com/watch?v=ZRS485LxX0s&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=51

**** How array are optimised in V8 engine and ulmost all engines

**** array => two types 

1) continuos (packed)<br>
     -> 1) packed_SMI  (small integer) <br>
              -> 2) packed_double  
              -> 3) packed  

2) holey array <br>
     -> 1) holey_SMI  (small integer) <br>
     -> 2) holey_double  
     -> 3) holey_packed  

**** optimization hierarchy=>   
        packed_SMI > packed_double > packed  > holey_SMI > holey_double > holey_packed    <br> <br>

**** Examples ------------------  <br> 
 let arrZero = []          // treated as packed_SMI  <br>
let arrOne = [1, 2, 3, 4, 5]          // packed_SMI              <br>
let arrTwo = [1, 2, 3, 6.0, 5 ]       //packed_double           <br>
let arrThree = [1, 2, 3, 5 , "less" ] //packed                  <br>

 let arrayFour = new Arr(3)            // there are three empty spaces. i.e holes are there, so it is "holley array"   <br>
 let arrayFive = [1,2,3 , , 4,5]       // holey_SMI                <br>
 let arrSix = [1, 2, 3, 6.0 ,  , 5 ]  // holey_double              <br>
 let arrSix =[1, 2, 3,"less",  , 5 ]  // holey_packed             <br>   <br>
    


****How Optimization is decided by 4 steps by engines    <br>
  //bound check                                           <br>
  //hasOwnProperty(arr , 9)                                    <br>
  //hasOwnProperty(arrTwo.prototype , 10)                     <br>
  //hasOwnProperty(Object.prototype , 10)                  <br>  <br>  <br>

NOTE: if array is a "continues array" then it took only first two step                                               <br>
NOTE: hasOwnProperty decrease the optimization                                                                      <br>
NOTE: that's why 4 steps are required at a time of "holey array",so this type of array decrease optimization         <br>
NOTE: ones array goes to lower optimization then it will not optimized in upper level                                 <br>
