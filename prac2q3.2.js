var intervalRef = setInterval(()=>{
    console.log("Hello")
},500)
setTimeout(()=>{
    console.log("Executed 10 times, now clearing timout")
    clearInterval(intervalRef)
},5000)