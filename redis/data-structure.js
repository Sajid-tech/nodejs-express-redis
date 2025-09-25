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

async function redisDataStructure(){
    try {
        await client.connect()
        //String -> SET , GET , MSET(multiple set value), MGET(multiple get value)

        await client.set("username","Sajid hussain")
        const name = await client.get('username')
        console.log(name)

        // MSET 
        await client.mSet(['user:email','sajid@gmail.com','user:age','10','user:country','India'])
        //MGet
       const [email,age,country] = await client.mGet(['user:email','user:age','user:country'])
       console.log(email)
       console.log(age)
       console.log(country)







       
    } catch (error) {
        console.error(error)
        
    }finally{
        await client.quit()
    }
}

redisDataStructure()