import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './style.css'
import { useNavigate, useParams } from 'react-router-dom'
import { getNotesById } from '../../store/notesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../../store/notesSlice'
import { updateNote } from '../../store/notesSlice'

const Details = () => {

    const [updateMode,setUpdateMode]=useState(false)
   

  const params=useParams()
  const navigate=useNavigate()
  const id=params.id
  console.log(window.location.href)
  const dispatch=useDispatch()
  const {singleNoteData}=useSelector(state=>state.notes)
  const [title,setTitle]=useState(singleNoteData?.data?.title)
  const [description,setDescription]=useState(singleNoteData?.data?.description)
  useEffect(()=>{
     setTitle(singleNoteData?.data?.title)
     setDescription(singleNoteData?.data?.description)
  },[singleNoteData])
  const createdAt=singleNoteData?.data?.createdAt
  const date=new Date(createdAt)
  const formatedDate=date.getDate() +  " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear()


   const {updatedNoteData}=useSelector(state=>state.notes)

   useEffect(()=>{
     dispatch(getNotesById({id}))
   },[params.id])

   useEffect(()=>{
    if(updatedNoteData.status==='success'){
      navigate('/notes')
    }
  },[updatedNoteData.status,navigate])

   const handleClick=(e)=>{
      dispatch(deleteNote(id))
      navigate('/notes')
   }

   const handleUpdate=()=>{
    dispatch(updateNote({id,title,description}))
     setUpdateMode(!updateMode)
   }

   console.log(updateMode)

  return (
    <div>
      <Navbar />
      {!updateMode ?
      <div className='outer'>
        <div className='detailContainer'>
        <div className='titleContainer'>{singleNoteData?.data?.title}</div>
        <div className='descriptionContainer'>
          {singleNoteData?.data?.description}
        </div>
        <div className='btnAndDate'>
        <div className='dateContainer'>{formatedDate}</div>
        <div className='btnsContainer'>
            <button className='btnnn' onClick={()=>setUpdateMode(!updateMode)}>Edit</button>
            <button className='btnnn' onClick={handleClick}>Delete</button>
        </div>
        </div>
      </div>
      </div>:
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
             <button className='addBtn' onClick={handleUpdate}>Update</button>
             </div>
         </div>
          
       </div>
     </div>
      }
    </div>
  )
}

export default Details
