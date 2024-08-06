let str="Web paint technology";
let str2="Pvt Ltd";


console.log("char at",str.charAt(10));   // return character at index 10
console.log("consat",str.concat(str2));     //concate string
console.log("Spread combine",...str,...str2);   // concate thru spread
console.log("endsWith",str.endsWith("y"));      // retur true false if string end with given char
console.log("includes",str.includes("z"));      // return true false if string includes given char
console.log(str.charAt(10));        
console.log(str.indexOf("n"));                  //return index postion of character in string
console.log(str.repeat(2));                     //repeat string (n) times
console.log(str.split(" "));                    // split string 
console.log("Slice ",str.slice(0,-5));                   // extract charater from given start index to end index may pass negative index retriev from end of string
console.log("substring",str.substring(5,10)); //fetch bw 5 to 10 index
console.log("substr",str.substr(5,10)); // fetch start from 5 and to next 10 indexes
console.log(str.toUpperCase(str));

arr=[1,[2,3],4,5,[6,7],8];
console.log(...arr.flat());

