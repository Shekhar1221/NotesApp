import React, { useState } from 'react'
import './style.css'

import { postNotes } from '../../store/notesSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  const navigate=useNavigate()
  const dispatch=useDispatch()

 const [title,setTitle]=useState("");
 const [description,setDescription]=useState("");

 console.log(title,description)

  const handleClick=()=>{
    dispatch(postNotes({title,description}))
    navigate('/notes')
  }

  return (
    <div>
      <div className='createContainer'>
        <div className='titleContainer'>
          <label className='label'>title</label>
            <input type='text' className='text' placeholder='write title' value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className='descriptionContainer'>
            <label className='label'>Description</label>
            <div className='txtArAndBtn'>
            <textarea className='textArea' rows={5} value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            <button className='addBtn' onClick={handleClick}>Add Note</button>
            </div>
        </div>
         
      </div>
    </div>
  )
}

export default Create
