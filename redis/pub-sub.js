//pub-sub.js 

// -> publisher  -> send  -> channel  -> subscriber will consume these message 

// publisher will send a message to a chanel and subscriber will consume these message 


const redis = require('redis')

const client = redis.createClient({
    host:"localhost",
    port:6379,
})

client.on("error", (error) => console.log("Redis client error occured",error));



async function testAdditionlFeatures() {
    try {
        await client.connect()
        
{/*
        const subscriber = client.duplicate()  // create a new client -> share the same connection
        await subscriber.connect()  // connect to redis server for the subscriber
        await subscriber.subscribe('dummy-channel',(message,channel)=> console.log(`received mesage from ${channel}: ${message}`))
         

        // publish message to the dummy channel 
        await client.publish('dummy-channel','some dummy data from publisher')
        await client.publish('dummy-channel','some new message from publisher')


        await new Promise((resolve)=> setTimeout(resolve,5000))  // it will wait for that time perod thann close the connection
        await subscriber.unsubscribe('dummy-channel')
        await subscriber.quit()  // close the subscriber connection
 */}
// Pipelining & Transactions in Redis

// Pipelining in Redis is a technique where multiple commands 
// are sent to the Redis server in a single batch, without 
// waiting for individual responses. 
// This reduces network round-trips and improves performance. 

// Transactions in Redis allow executing multiple commands 
// as a single unit of work. 
// A transaction is started with MULTI, commands are queued, 
// and then executed atomically with EXEC. 
// If needed, DISCARD can cancel the transaction. 

//  Pipelining = performance optimization (batch network calls).
//  Transactions = atomic execution (all-or-nothing).



// transction -> multi()  + exec()
const multi = client.multi()

multi.set('key-transaction1','value1')
multi.set('key-transaction2','value2')
multi.get('key-transaction1')
multi.get('key-transaction2')


const result = await multi.exec()




console.log(result)




//pieline 


const pipelineResult = await client
  .multi() // still multi() in v4 
  .set('key-pipeline1', 'value1')
  .set('key-pipeline2', 'value2')
  .get('key-pipeline1')
  .get('key-pipeline2')
  .exec();

console.log('Pipeline Result:', pipelineResult);


//bacth data operation for pipeline 

// example 1 
const pipeline = client.multi()


for(let i=0 ; i<100; i++){
    pipeline.set(`user:${i}:action`,`Action ${i}`)

}

await pipeline.exec()


// example 2 
const dummyExample = client.multi()
multi.decrBy('account:1234:balance',100)
multi.incr('account:1234:balance',100)
const finalResult = await multi.exec()


    const cartExample = client.multi()
       multi.hIncrBy('cart:1234', 'item_count', 1)
       multi.hIncrBy('cart:1234', 'total_price', 10)

       await multi.exec()

        console.log("Performance test");
    console.time("without pipelining");

    for (let i = 0; i < 1000; i++) {
      await client.set(`user${i}`, `user_value${i}`);
    }

    console.timeEnd("without pipelining");

    console.time("with pipelining");
    const bigPipeline = client.multi();

    for (let i = 0; i < 1000; i++) {
      bigPipeline.set(`user_pipeline_key${i}`, `user_pipeline_value${i}`);
    }

    await bigPipeline.exec();

    console.timeEnd("with pipelining");
    } catch (error) {
        console.log(error)
        
    }finally{
        await client.quit()
    }
    4
}

testAdditionlFeatures()