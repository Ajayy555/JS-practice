const arr=[55,-55,33,-33,-15,7];

for(let i=0;i<arr.length+1;i++){
    if(arr[i]<0)
        
        arr.splice(i,i);
    
    
}

console.log(arr);
