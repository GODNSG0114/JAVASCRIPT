// Immediately Invoked Function Expression  ( IIFE )
// Note :-  1) run ones at a time 
//          2) immediately execute no need to call the function
//          3) used when we want to do task for one time 
//          4) used in fetching , inital  setup  


(function message(){
    console.log(`DB CONNECTED through normal function`);
})();   // ; is mendatory to run next IIFE function otherwise next IIFE can't run

( (name) => {
   console.log(`DB CONNECTED through arrow function ${name}`)
})("Nikhil");
