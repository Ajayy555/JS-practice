const student={
    name:"ajay",
    class:"BCA",
    rollno:4012
}

console.log(student);

student.name="vishal";

console.log(student.class);   //object .key to fetch key value of obj

// Object.freeze(student);

student.name="rahul";      // freeze object disable modification

console.log(student);

student.greet=function(){
    console.log(`Hey Mr. ${this.name} Welcome to the School library`);   //declare function usig obj and use its properties
    
}

student.greet();


const fbUser={                      
    username:{                          //nested obj
        firstName:"Vikram",
        lastName:"Singh"
    },
    age:18,
    gender:"male"
}

console.log(fbUser.username.firstName);     


const teamAus={
    1:"Steve Smith",
    2:"Mitchel Starc",
    3:"josh Hazalwood"
}

const teamInd={
    4:"Rohit Sharma",
    5:"Virat Kohli",                           
    6:"Jasprit Bumrah"
}

const teamIpl={...teamAus,...teamInd}           //key must be unique while merging thru spread
console.log(teamIpl);

// console.log(`merge thru spread operator = > ${teamIpl}`);

 const teamIplthruAssign=Object.assign({},teamAus,teamInd)
// console.log(`merge thru spread operator = > ${teamIplthruAssign}`);
console.log(teamIplthruAssign);

console.log("object keys ",Object.keys(teamInd));

console.log("object values ",Object.values(teamInd));

console.log("object entries ",Object.entries(teamInd));
