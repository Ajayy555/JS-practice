let arr=[15,25,37,23,15,19,37,66,15];


console.log("array => : ",...arr);
let uniqueArray = [];
for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
    }
}

console.log(`Unique Values fetched using Loops : ${uniqueArray}`);



unique_set_array=[...new Set(arr)];
console.log(`Unique values fetched using Set :${unique_set_array}  `);
