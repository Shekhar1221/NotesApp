import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup';
import Reset from './pages/reset/Reset';
import Notes from './pages/notes/Notes';
import Details from './pages/details/Details';
import Create from './pages/create/Create';
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react';

function App() {

   
  

  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/reset' element={<Reset></Reset>}></Route>
        <Route path='/notes' element={<Notes></Notes>}></Route>
        <Route path='/notes/:id' element={<Details></Details>}></Route>
        <Route path='/notes/create' element={<Create></Create>}></Route>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
