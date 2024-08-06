 // for loop
 for(let j=0;j<=4;j++)
    {
        
       console.log(`for Loop -> value of j : ${j}`);
    }

console.log("\n\n");
    //while loop
    let i=1;
    while(i<5)
{
    console.log(`While loop -> value of i :${i}`);
    i++;
}

console.log("\n\n");

// do while loop 
let k=10;
do{
    console.log(`do while -> value of K (false condtion) ${k}`);
}while(k<5);


// for of loop 
let company="WebPaint technology ";

for (const el of company) {
    console.log(el);
}

// for in loop

const student={
    name:"Vishal",
    class:"BCA",
    rollno:4024
}

for (const key in student) {
    
        console.log(key ,":", student[key]);
    }


``