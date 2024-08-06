const cartVal=[99,55,99];

const cartTotal=cartVal.reduce((prev,next)=>{
    return prev+next
})

console.log(cartTotal);
