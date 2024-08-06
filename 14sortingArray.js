const arr=[33,99,15,77,7,54,41,3]
// console.log(`original Array => ${arr}`);
let temp;
for(let i=0;i<=arr.length-1;i++)
{
    for(let j=i+1;j<=arr.length-1;j++)
    {   
        // console.log(arr[i] , "<= i  : j => ",arr[j]);
        
        if(arr[i]>arr[j])
        {  
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
        continue;
        
    }

}


console.log(`Sorted Array using Loop => ${arr}`);


console.log(`Sorted Array using sort() => ${arr.sort()}`);                  // sort orignal value


console.log("original array after sort () => ",arr);
