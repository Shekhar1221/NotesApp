import React from 'react'
import './style.css'
import { Link, NavLink } from 'react-router-dom'
const Note = ({data}) => {
  return (
    <div>
      <div className='noteContainer'>
        <div className='titleContainer'>
            <Link to={`/notes/${data._id}`} >
               <div className='title'>{data.title}</div>
            </Link>
        </div>
        <div className='shortDesc'>
          {data.description}
        </div>
      </div>
    </div>
  )
}

export default Note
