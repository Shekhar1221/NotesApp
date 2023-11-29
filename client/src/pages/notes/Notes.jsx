import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Note from '../../components/note/Note'
import { getNotes } from '../../store/notesSlice'

import './style.css'
import { useDispatch, useSelector } from 'react-redux'
const Notes = () => {

useEffect(()=>{
  dispatch(getNotes())
},[])

  const dispatch=useDispatch();
  const {notesData}=useSelector(state=>state.notes);
  const data=notesData.data

  return (
    <div>
      <Navbar />
      <div className='allNotesContainer'>
        {data?.map((d)=>
        <Note data={d} key={d.id} /> 
        )}
         

      </div>
    </div>
  )
}

export default Notes
