// string interpolation
let name = "Nikhil";
let repo = 20;
console.log(`my name is ${name} and my repo count is ${repo}`);


const anotherName = new String("gaurav"); // another way to declare string

// string methods / Function
  console.log(name.length);

  console.log(name.toUpperCase());

  console.log(name.charAt(2));

  console.log(name.indexOf('k'));

  console.log(name.substring(0,4));  // 0 1 2 3 value captured
  
  console.log(name.slice(-5 ,4));   //  start from (last index + (-5)) to 4 index 

  const newstring  = "  Nikhil   ";
  console.log(newstring)
  console.log(newstring.trim());    // ignore start and end spaces

  const url = "https://nikhilgod.com/nikhilGithub%20repository"
  console.log(url.replace('%20' , '__'));
  console.log(url.includes('nikhil'));
  console.log(url.includes('gaurav'));

  const splitname = "Nikhil-god-CSE"
  console.log(splitname.split('-'));
