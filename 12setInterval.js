

const timeInterval=setInterval(()=>{
    // const dt=new Date().toLocaleTimeString();
    console.log(`hey its : ${new Date().toLocaleTimeString()}`);  
},1000)


const stopInterval=()=>{
    clearInterval(timeInterval);
}

setTimeout(()=>{
    console.log('timer stoped after 10 sec');
    
    stopInterval();
},10000)