const arr=[1,2,3,4,5];
const arr2=['A','B','C']

console.log(arr);
// ouput[ 1, 2, 3, 4, 5 ]
let pushval=arr.push(7) // add array element and return length of array

console.log(pushval);

let popval=arr.pop(); // return last array element

console.log(popval); 

let unshiftval=arr.unshift(8); //add element at starting of array and return lenth of array
console.log(unshiftval);

let join5=arr.join("*")  // join * with all array elements
console.log(join5);  

console.log(arr.length); //retun length of array

let concatedArr=arr.concat(arr2)        // concatination / merge two arrays

console.log(...concatedArr);

console.log(...arr2,...arr);  // concatination using spread
 
const myArr = [[1,2],[3,4],[5,6]];

console.log(myArr.flat());      //flat concatinate nested array


console.log("__________Splice Slice_____________________-");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let splicearr=fruits.splice(0,1,"pineapple","litchi") // pass start index end index and to be replace values if any //return extracted values 
console.log("Original Array",fruits);                    // change original array
                               
console.log("Splice splice(0,1,pineapple,litchi )elements :",splicearr);
console.log("Original Array",fruits);



let sliceArr=fruits.slice(2)                        //slice(2) without changing orignal array
console.log("slice slice(2) : ",sliceArr);  
console.log("Original Array",fruits);






