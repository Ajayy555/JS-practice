//factorial 
let fact = 5;
let factorialVal = 1;
for (let i = fact; i > 0; i--) {
    factorialVal = factorialVal * i;
}

console.log(`Factorial of ${fact} is => ${factorialVal}`);


//first 10 odd numbers
let arr = [];
let i = 1;
while (true) {

    if (i % 2 == 0) {
        i++;
        continue;
    } else {
        arr.push(i);
    }

    i++;

    if (arr.length == 10) {
        break;
    }
}

console.log(`First 10 odd Numbers => ${arr}`);


// prime number 

function checkPrime(num)
{
    let arr=[];
    while(true){
    for(i=2;i<=num;i++)
    {
        if(num%i==0)
        {
            return console.log(`${num} is not a prime Number`);
        }else{
            return console.log(`${num} is a prime Number`);
        }
    }

 }
}

checkPrime(15)

