const arr=[44,55,66,77,88,99];
let reverseArr=[];

for(let i=arr.length-1;i>=0;i--)
{
    reverseArr.push(arr[i])
}

console.log(`revered Array using Loop => ${reverseArr}`);

reverseArr=arr.reverse();                                       // original array changed deep copy created
console.log(`reverse Array using reverse() => ${reverseArr}`);

reverseArr[5]=101;                                              // same reflect in original array
console.log(`original array => ${arr}`);
