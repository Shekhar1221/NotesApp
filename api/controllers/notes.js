const asyncHandler=require('express-async-handler');
const Note=require('../models/notes');
const { default: mongoose } = require('mongoose');


// add a note
const addNote=asyncHandler(async(req,res)=>{
     try{
         const note={
            title:req.body.title,
            description:req.body.description,
            userId:req.data.id
         }

         const addedNote=await Note.create(note);
         res.status(201).json({status:"success",data:addedNote})

     }catch(err){
        res.status(500).json({status:"error","msg":"error in adding note"})
     }
})


// get all notes
const getNotes=asyncHandler(async(req,res)=>{
    try{
        // console.log(req.data.id)
          const fetchedNotes=await Note.find({userId:req.data.id}).sort({"createdAt":-1})
        // const fetchedNotes=await Note.find({userId:"655c844719101f14df6d9d5d"}).sort({"createdAt":-1})
        
         res.status(200).json({"status":"success",data:fetchedNotes})
    }catch(err){
        console.log(err)
        res.status(500).json({"staus":"error",msg:"error in fetching the notes"})
    }
})

// get a single note

const getSingleNote=asyncHandler(async(req,res)=>{
    try{
         const {id}=req.params
         const fetchedNote=await Note.findById(id)
         res.status(200).json({"status":"success",data:fetchedNote})
    }catch(err){
        res.status(500).json({"staus":"error",msg:"error in fetching the notes"})
    }
})


const deleteANote=asyncHandler(async(req,res)=>{
    try{
       const {id}=req.params
       const deletedNote=await Note.findByIdAndDelete(id)
       res.status(200).json({"status":"success","msg":"deleted successfully",deletedData:deletedNote})
    }catch(err){
        res.status(500).json({"status":"error",msg:"error in deletion"})
    }
})


const updateNote=asyncHandler(async(req,res)=>{
    try{
         const {id}=req.params;
         const {title,description}=req.body;
         const editedNote=await Note.findByIdAndUpdate(id,{title,description},{new:true})
         res.status(200).json({"status":"success",data:editedNote})
    }catch(err){
        res.status(500).json({"status":"error","msg":"error in updating the note"})
    }
})



module.exports={addNote,getNotes,getSingleNote,deleteANote,updateNote}