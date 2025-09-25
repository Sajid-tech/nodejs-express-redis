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

        await client.set("key","sajid")

        const extractValue = await client.get('key')
        console.log(extractValue)
    } catch (error) {
        console.error(error)
    }finally{
        await client.quit()
    }
}

testRedisConnection()