//  code mechanism in nodejs that will allow to perform non blocking i/o operation 

// loop 
// timer -> pending callbacks -> idle -> prepare (internally hanlde by nodejs)  ->  poll --> check -> close callback 

// micro task 
 
// process.nextTick , promises 

// macro task 

// setTimeout , setInterval  , setImmediate

const fs = require('fs')
const crypto = require('crypto')


console.log('1. script start')

setTimeout(()=>{
 console.log('2. settimeout 0 sec callback (macrotask)')
},0)


setTimeout(()=>{
 console.log('3. settimeout 0 sec callback (macrotask)')
},0)

setImmediate(()=>{
    console.log('4. setImmediate callback(check) ')
})

Promise.resolve().then(()=>{
    console.log('5. promises resolved (microtask)')
})

process.nextTick(()=>{
    console.log('6. process,nexttick callnback (microtask')
})

fs.readFile(__filename,()=>{
    console.log('7. file read operation (i/o callback)')
})

crypto.pbkdf2('secret','salt',10000,64,'sha512',(err,key)=>{
    if(err) throw err
    console.log('8. pbkdf operation completed (cpu intensive task)')
})

console.log('9. script ended')