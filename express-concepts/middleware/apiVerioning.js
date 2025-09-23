// 1st way 

const urlVersioning = (version)=>(req,res,next)=>{
    // checck if teh request started with particular version or not 
    if(req.path.startWith(`/api/${version}`)){
        next()
    }else{
        res.status(404).json({
            success:false,
            error:"Api version is not supported",
        })
    }
}

// 2nd way 
const headerVersioning =(version)=>(req,res,next)=>{
if(req.get('Accept-Version')  === version){
    next
}else{
     res.status(404).json({
            success:false,
            error:"Api version is not supported",
        })
}
}


// instead of 

// application/json -> application/vnd.api.v1+json 

// 3rd way 
const contentTypeVersioning = (version)=>(req,res,next)=>{
    const contentType = req.get('Content-Type')
    if(contentType && contentType.includes(`application/vnd.api.${version}+json`)){
        next()
    }else {
         res.status(404).json({
            success:false,
            error:"Api version is not supported",
        })
    }
}

module.exports ={
    urlVersioning,headerVersioning,contentTypeVersioning
}