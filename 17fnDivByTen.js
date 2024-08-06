// const divByTen =(number) => number%10 ==0 ? console.log("divisible by 10 ") : console.log("divisible by 10 ");

const divByTen =(number) =>{
    if (number%10 ==0)
        return true;
    else
        return false;

}

console.log(divByTen(100))