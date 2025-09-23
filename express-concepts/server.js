// major release -> API (api versioning ) -> V1, V2,V3


require('dotenv').config()
const express = require('express')

const {configureCors} = require('./config/corsConfig')
const { requestLogger, addTimeStamp } = require('./middleware/customeMiddleware')
const { globalErrorhandler } = require('./middleware/errorHandler')
const { urlVersioning } = require('./middleware/apiVerioning')
const { createBasicRateLimiter } = require('./middleware/rateLimiting')
const itemRoutes = require('./routes/item-routes')
const app = express()
const PORT = process.env.PORT || 3000


//midleware
app.use(requestLogger)
app.use(addTimeStamp)

app.use(configureCors())
// use here rate limiter
app.use(createBasicRateLimiter(100,15*60*1000))  // 100 req, per 15 minutes
app.use(express.json())


// app.use(urlVersioning('v2'))
app.use(urlVersioning('v1'))

app.use('/api/v1',itemRoutes)
app.use(globalErrorhandler)

app.listen(PORT,()=>{
    console.log(`Server is now runnig on port ${PORT}`)
})