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

    {
      /*
        set->
        1.SADD ( this will add one or more member to a set )
        2.SMEMBERS ( return all member of set)
        3. SISMEMBER( will check is particular member is exist or not in set)
        4.SREM( remove one or more member from the set)
        
        */
    }

    // await client.sAdd('user:nickname',['jhon','deepa','xyz'])

    // const extractUserNickname = await client.sMembers('user:nickname')
    // console.log(extractUserNickname)

    // check if deepa is present in this member or not 

    // const isDeepaIsOneOfUserNickname = await client.sIsMember('user:nickname','deepa')
    // console.log(isDeepaIsOneOfUserNickname)

    // await client.SREM('user:nickname','xyz')
    // const getUpdatedUserNickname = await client.sMembers('user:nickname')
    // console.log(getUpdatedUserNickname)





    {/*
        
        sorted sets->
     between set and sorted set , diff is in sorted set  elements u are having each element has a sorted set associated with that
     
     the score descide the order of elements inside the set

     think of it like a ranking system(leaderboards , top scores , priority queues)


     1.ZADD (add element with score)
     2.ZRANGE ( reterive the element)
     3.ZRANk ( rank or give u the position of the lement)
     4.ZREM (  remove one or more element)
        

        */}

        {/*
        await client.zAdd('cart',[
            {
                score:100, value:'Cart 1'
            },
            {
                score:150, value:'Cart 2'
            },
            {
                score:10, value:'Cart 3'
            },
        ])

    

        const getZSortedList = await client.zRange('cart',0,-1)
        console.log(getZSortedList) // get in asc order


        exctractAllCartItemWithScore = await client.zRangeWithScores('cart',0,-1)

        console.log(exctractAllCartItemWithScore)



        const cartTwoRank = await client.zRank('cart','Cart 2')

        console.log(cartTwoRank) // give u the position

        await client.zRem('cart', 'Cart 2')

        const getUpdateCart = await client.zRange('cart',0,-1)
        console.log(getUpdateCart)
 */}

 {/*
    hashes ->hashes are like maps/dictonaries where you can store field value pairs under a single key
    
    useful for representing an object(like a user profile , product etc)




    1. HSET (set a field in a hash to a value)
    2. HGET (get the value of specific field)
    3. HGETALL (get all fields and value in a hash)
    4. HDEL (delete one or more field from a hash)
    */}
  } catch (error) {
    console.error(error);
  } finally {
    await client.quit();
  }
}

redisDataStructure();
