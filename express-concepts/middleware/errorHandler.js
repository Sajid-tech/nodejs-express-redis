// custome error class 

class APIError extends Error {
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
        this.name = 'APIError'  // set the error type to the api error
    }
}


// receive a function
const asyncHandler = (fn) =>(req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(next)
}


const globalErrorhandler = (err,req,res,next)=>{
    console.error(err.stack)    // log the error stack

    if(err instanceof APIError){
        return res.status(err.statusCode).json({
            status:"Error",
            message:err.message
        })
    }


    // handle mongoose validation

    else if(err.name === 'validationError'){
        return res.status(400).json({
            status:"Error",
            message:"Validation Error"
        })
    }else {
        return res.status(500).json({
            status:"error",
            message:"An unexpected error occured"
        })
    }
}

module.exports = {APIError,asyncHandler,globalErrorhandler}