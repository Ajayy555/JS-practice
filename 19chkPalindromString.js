const ChkPalindromString= (str)=>{

let temp = str;
let rev = '';

for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];

}

if (rev == str) {
    console.log(`${str} is a palindrom String`);

} else {
    console.log(`${str} is not a palindrom String`);
}
}

ChkPalindromString("123454321")