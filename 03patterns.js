// 1 pattern 

 pattern = ''
for(let i=1;i<=5;i++){ // rows

    for(j=1;j<=i;j++){ // stars
        pattern += j
    }

    pattern += '\n' // next line
}

console.log(pattern);
//OUTPUT
// 1
// 12
// 123
// 1234
// 12345


//pattern 2
 pattern='';

for(let i=5;i>0;i--)
{
    for(let j=i;j>0;j--){
        pattern+=j
    }
    pattern += '\n'    
}

console.log(pattern);
// output
// 54321
// 4321
// 321
// 21
// 1


// pattern 3
pattern =" ";

for(let i=1;i<=5;i++){
    for(let j=10;j>i;j--){
        pattern +=' '
    }
    for(let l=1;l<=i;l++){
        pattern +=l;
    }
    if(i==1){pattern +="\n";continue;}
    for(let m=i;m>=1;m--){
        
        pattern +=m;
    }

    pattern +="\n";
}
console.log(pattern);
//output
//          1
          1221 
         123321
        12344321
       1234554321



//patern 4


// pattern ="";
// for( let i=1; i<=5; i++)
// {
//     for(let j=10;j>=i;j--)
//     {
//         pattern+=" ";
//     }
//     for(let k=i;k<=5;k++)
//     {
//          pattern+=k;
//     }
//     for(let s=5;s>=i;s--){
//         pattern+=s;
//     }

//     pattern +="\n";
// }

// console.log(pattern);
// //         


pattern ="";
for( let i=1; i<=5; i++)
{
    pattern +="*";
    for(let j=10;j>=1;j--)
    {   
        pattern +="*";
    }
    pattern +="\n";
}

console.log(pattern);


pattern="*";
space= " ";
for(let i=0;i<=5;i++)
{
    console.log(pattern.repeat(i)); 
}