//redis - remote dictionary server -in-memory data structure store often used as a database, cache, and message broker.

// ioredis - redis client for nodejs

const redis = require("redis");

// createclinet used to interact with the redis server
const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

// event listener

client.on("error", (error) => console.log("Redis client error occured"));

async function redisDataStructure() {
  try {
    await client.connect();

    {
      /*
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
 */
    }

    {
      /*
    list -> 
    1. LPUSH( insert the element at the begining of the list)
    2. RPUSH (insert the element at the end of the list)
    3. LRANGE (reterive the element on the specific range of the list)
    4. LPOP (remove and return the begining of the element of the list)
    5.ROP ( remove and return the last element on the list of the right side)

 */
    }
    // await client.del("notes");
    // await client.lPush("notes", ["note 1", "note 2", "note 3"]);
    // const extractAllNotes = await client.lRange("notes", 0, -1);
    // console.log(extractAllNotes);

    // const firstNote = await client.lPop('notes')
    // console.log(firstNote)

    // const remaingNotes = await client.lRange('notes',0,-1)
    // console.log(remaingNotes)

    
  } catch (error) {
    console.error(error);
  } finally {
    await client.quit();
  }
}

redisDataStructure();
