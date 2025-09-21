require('dotenv').config()
const express = require('express')

const {configureCors} = require('./config/corsConfig')

const app = express()
const PORT = process.env.PORT || 3000

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