const bcrypt=require('bcrypt');
const User=require('../models/user')
const asyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')


// Creete a user
const createUser=asyncHandler(async(req,res)=>{
  try{
    const saltRounds=10;
    const salt=await bcrypt.genSalt(saltRounds)
    const hashedPassword=await bcrypt.hash(req.body.password,salt)
  const user={
    email:req.body.email,
    password:hashedPassword
  }
  const responseUser=await User.create(user)
  const{password,...others}=responseUser._doc
  res.status(201).json({message:"success",...others})
  }catch(err){
    res.status(500).json(err)
  }
})

// Login
const login=asyncHandler(async(req,res)=>{
  const {email,password}=req.body;
  try{
      const user=await User.findOne({email})
  if(user){
      const id=user._id;
      const normalPassword=await bcrypt.compare(password,user.password)
     if(normalPassword){
        const token=jwt.sign({id,email},process.env.SECRET,{expiresIn:"1d"})
        const{password,...others}=user._doc;
        res.cookie("token",token)
        res.status(200).json({status:"success",...others})
     }else{
        res.status(401).json({"status":"error","msg":"wrong credentials"})
     }
  }else{
        res.status(401).json({"status":"error","msg":"user not found"})
  }
 }catch(err){
   res.status(500).json({"status":"error","msg":"error in fetching data"})
}
})

// LOGOUT

 const logout=asyncHandler(async(req,res)=>{ 
   try{
     res.clearCookie("token");
     res.json('logged out successfully')
   }catch(err){
    res.status(500).json({"status":"error","msg":"error in logging out"})
}
 })

 const resetPassword=asyncHandler(async(req,res)=>{
  try{
     const {email,password}=req.body;
     const user=User.findOne({email});
     if(user){
      const id=user._id
      const userDetails=await User.findByIdAndUpdate(id,{password},{new:true});
      res.status(200).json({"status":"success",data:userDetails})
     }else{
    res.status(400).json({"status":"error","msg":"please enter a valid emailid"})
       
     }
  }catch(err){
    res.status(500).json({"status":"error","msg":"error in password reseting"})
  }
 })
 


module.exports={createUser,login,logout}