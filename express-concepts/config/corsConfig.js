const cors = require('cors')


const configureCors =()=>{
    return cors({
        //origin -> this will tell that which origins u want user can access your api 

        origin: (origin,callback)=>{
            const allowedOrigins =[
                'http://localhost:3000', // local dev
                'https://sajid-dev.com'  // production url
            ]
            
            if(!origin  || allowedOrigins.indexOf(origin) !== -1){
                callback(null , true)  // giving permission so taht req can be allowed
            }else{
                callback(new Error('Not allowed by cors'))
            }
        },

        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Accept-Version'
        ],
        exposedHeaders:[
            'X-Total-Count','Content-Range'
        ],
        credentials:true,  // enable support for cookies
        preflightContinue:false,
        maxAge:600,  // cache pre flight responses for  10 min (600 sec)  -> help you to avoid sending option request  multiple time 
        optionsSuccessStatus:204
    })
}


module.exports = {configureCors}