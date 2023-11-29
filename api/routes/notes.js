const express=require('express');

const router=express.Router();

const {addNote, getNotes, getSingleNote, deleteANote, updateNote}=require('../controllers/notes')

router.post('/addNote',addNote)
router.get('/',getNotes)
router.get('/:id',getSingleNote)
router.put('/:id',updateNote)
router.delete('/:id',deleteANote)

module.exports=router;