const asyncHandler = require('express-async-handler')
const jwt=require('jsonwebtoken')

 const verification=asyncHandler(async(req,res,next)=>{
    try{
        const token=req.cookies.token
        const data=await jwt.verify(token,process.env.SECRET)
        // console.log(data)
        req.data=data;
        if(data){
        next()
        }
    }catch(err){
        console.log(err,'is error')
            res.json("token is not valid")
    } 
 })

 module.exports={verification}
