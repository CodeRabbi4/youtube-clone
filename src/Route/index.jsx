import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Video from '../Pages/Video';
import Navbar from '../Component/Navbar';
import Error from '../Pages/Error';

const Index = () => {
  const [sideMenu, setSideMenu] = useState(true);
  const [categories, setCategories] = useState(0)
 
  return (
   <BrowserRouter>
   <Navbar setSideMenu={setSideMenu}/>
   <Routes>
    <Route path='/' element={<Home sideMenu={sideMenu} categories={categories} setCategories={setCategories}/>}/>
    <Route path='/play/:cgId/:videoId' element={<Video categories={categories}/>}/>
    <Route path='/:title' element={<Error/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Index;