// custome error class 

class APIError extends Error {
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
        this.name = 'APIError'  // set the error type to the api error
    }
}


const asyncHandler = (fn) =>(req,res,next)=>{
    
}