const os = require('os')
const process = require('process')
console.log("os.arch() = ",os.arch())
console.log("os.endianness() = ",os.endianness())
console.log("os.freemem() = ",os.freemem())
console.log("os.hostname() = ",os.hostname())
console.log("os.networkInterfaces() = ",os.networkInterfaces())
console.log("os.platform() = ",os.platform())
console.log("os.uptime() = ",os.uptime())
console.log("os.release() = ",os.release())
console.log("os.tmpdir() = ",os.tmpdir())
console.log("os.totalmem() = ",os.totalmem())
console.log("os.type() = ",os.type())
console.log("os.userInfo() = ",os.userInfo())


setTimeout(() =>{
    console.log("making sure program runs 60 seconds")
},60000)

setImmediate(()=>{
    console.log("Immediate")
})
setTimeout(()=>{
    console.log("timeout running after 5 seconds")
    console.log("creating a timeout for 10 seconds which will be cleared with a timeout that will execute in 5 seconds after this")
    var timeout = setTimeout(()=>{
        console.log("timeout that won't execute")
    },10000)
    setTimeout(()=>{
        console.log("Clearing timeout that won't execute")
        clearTimeout(timeout)
    },5000)
},5000)

var intervalRef = setInterval(()=>{
    console.log("I am running every 1.5 seconds")
},1500)
setTimeout(()=>{
    clearInterval(intervalRef)
    console.log("Clearing interval")
},15000)