let arr=[10,5,14,17,9,5,55,43];

const newArr=arr.map((el,index)=>{
    console.log(`Element : ${el} , index : ${index}`);

        return el*10;

})

console.log(...newArr);
console.log(...arr);


const greater_33=arr.filter((el)=> el>33)
console.log(...greater_33);