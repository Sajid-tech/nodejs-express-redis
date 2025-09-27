const Redis = require('ioredis')
//redis client libraray for nodejs   -> give u auto-pipelining


const redis = new Redis()

async function ioRedisDemo() {
    try {
        await redis.set('key','value')
        const val = await redis.get('key')
        console.log(val)
    } catch (error) {
        console.error
        
    }finally{
        redis.quit()
    }
    
}


ioRedisDemo()