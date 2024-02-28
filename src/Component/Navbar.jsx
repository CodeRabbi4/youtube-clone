import React from 'react';
import logo from "../assets/logo1.png";
import  menu from "../assets/menu.png";
import search from "../assets/search.png";
import upload from '../assets/video-camera.png'
import more from '../assets/more.png'
import noti from '../assets/notification.png'
import profile from '../assets/profile.png'
import { Link } from 'react-router-dom';

const Navbar = ({setSideMenu}) => {
  return (
    <nav className='w-full h-auto px-5 sm:px-8 py-2 shadow flex items-center justify-between top-0 sticky z-50 bg-white'>
        <div className='flex items-center justify-center sm:gap-5 gap-3'>
            <img src={menu} alt="menu" className='sm:w-6 w-4 cursor-pointer'
            onClick={()=>{setSideMenu((prev)=> prev === false ? true :  false)}} />
        <Link to='/'>
            <div className='flex items-center justify-center'>
                <img src={logo} alt="logo" className='w-6 sm:w-10' />
                <span className='sm:text-2xl text-lg font-semibold'> Tube</span>
            </div>
        </Link>
        </div>
{/*  */}
        <div className='border border-slate-300 py-1 px-3 rounded-full'>
            <div className='flex items-center justify-between'>
                <input type="text" name="search" placeholder='Search' 
                className='outline-none px-1 placeholder:text-sm w-28 sm:w-96 sm:h-7' />
                <img src={search} alt="Search" className='sm:w-4 sm:ml-2 ml-0.5 w-3' />
            </div>
        </div>
 {/*  */}

    <div className='flex items-center justify-between gap-5' >
        <img src={upload} alt="Video-Upload"  className='w-6 cursor-pointer hidden  sm:block'/>
        <img src={more} alt="more"  className='w-6 cursor-pointer hidden  sm:block'/>
        <img src={noti} alt="Notification" className='w-6 cursor-pointer hidden sm:block' />
        <Link to='/'><img src={profile} alt="Profile"  className='w-6 h-6 sm:w-9 sm:h-9 rounded-full object-cover cursor-pointer'/></Link>
    </div>
    </nav>
  )
}

export default Navbar;