//redis - remote dictionary server -in-memory data structure store often used as a database, cache, and message broker.

// ioredis - redis client for nodejs 

const redis = require('redis')

// createclinet used to interact with the redis server 
const client = redis.createClient({
    host:"localhost",
    port:6379
})

// event listener

client.on('error',(error)=>console.log('Redis client error occured'));


async function testRedisConnection(){
    try {
        await client.connect()
        console.log('Connected to redis')

        //set & get
        await client.set("name","sajid") //key ,value
        const extractValue = await client.get('name')
        console.log(extractValue)


        //delete operation
        const deleteCount = await client.del('name')
        console.log(deleteCount)
        const extractUpdatedValue = await client.get('name')
        console.log(extractUpdatedValue)

        // incremnet and decremnet count
        await client.set('count',100)
        const incrementCount = await client.incr('count')
        console.log(incrementCount)
        const descrementCount = await client.decr('count')
        console.log(descrementCount)

        await client.decr('count')
        await client.decr('count')
        await client.decr('count')
        await client.decr('count')
        await client.decr('count')
        await client.decr('count')

        console.log(await client.get('count'))
    } catch (error) {
        console.error(error)
    }finally{
        await client.quit()
    }
}

testRedisConnection()