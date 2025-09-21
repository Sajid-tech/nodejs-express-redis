require('dotenv').config()
const express = require('express')

const {configureCors} = require('./config/corsConfig')
const { requestLogger, addTimeStamp } = require('./middleware/customeMiddleware')

const app = express()
const PORT = process.env.PORT || 3000


//midleware
app.use(requestLogger)
app.use(addTimeStamp)

app.use(configureCors())
app.use(express.json())




app.get('/',(req,res)=>{
     res.status(200).json({
        data:"api is working perfectly"
        
    })
})

app.listen(PORT,()=>{
    console.log(`Server is now runnig on port ${PORT}`)
})