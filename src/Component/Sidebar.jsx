import React from 'react';
import home from '../assets/home.png';
import game from '../assets/game_icon.png';
import entertainment from '../assets/entertainment.png';
import sports from '../assets/sports.png';
import music from '../assets/music.png';
import blog from '../assets/blogs.png';
import news from '../assets/news.png';
import tech from '../assets/tech.png';
import lws from '../assets/lws.jpg';
import anisul from '../assets/anisul.jpg';
import procoder from '../assets/procoder.jpg';
import ps from '../assets/ps.jpg';
import stackLearner from '../assets/sl.jpg';

const Sidebar = ({sideMenu, setCategories, categories}) => {

  return (
    <div className={`${sideMenu ? "sm:w-[15%] w-[10%]":"sm:w-[8%] w-0 hidden sm:block sm:pl-4 short-menu"} pt-3 sm:pl-8 pl-2  h-screen fixed z-40 bg-white overflow-y-auto`}>
      <div className='shortcut-list'>
      <div className={`sb-flex ${categories === 0 ?"active":""}`} onClick={()=> setCategories(0)}>
        <img src={home} alt="home" />
        <p>Home</p>
      </div>
      <div className={`sb-flex ${categories === 20 ?"active":""}`} onClick={()=> setCategories(20)}>
        <img src={game} alt="home" />
        <p>Gaming</p>
      </div>
      <div className={`sb-flex ${categories === 24 ?"active":""}`} onClick={()=> setCategories(24)}>
        <img src={entertainment} alt="home" />
        <p>Entertainment</p>
      </div>
      <div className={`sb-flex ${categories === 17 ?"active":""}`} onClick={()=> setCategories(17)}>
        <img src={sports} alt="home" />
        <p>Sports</p>
      </div>
      <div className={`sb-flex ${categories === 28 ?"active":""}`} onClick={()=> setCategories(28)}>
        <img src={tech} alt="home" />
        <p>Technology</p>
      </div>
      <div className={`sb-flex ${categories === 10 ?"active":""}`} onClick={()=> setCategories(10)}>
        <img src={music} alt="home" />
        <p>Music</p>
      </div>
      <div className={`sb-flex ${categories === 22 ?"active":""}`} onClick={()=> setCategories(22)}>
        <img src={blog} alt="home" />
        <p>Blog</p>
      </div>
      <div className={`sb-flex ${categories === 25 ?"active":""}`} onClick={()=> setCategories(25)}>
        <img src={news} alt="home" />
        <p>News</p>
      </div>
      <hr  className='w-10/12 my-4 outline-none'/>
    </div>

      <div className='sub-list'>

      <h3 className='font-medium text-lg sm:block hidden text-gray-600'>Subcriptions</h3>

      <div className='sb-flex'>
        <img src={lws} alt="Lws" />
        <p>Learn with Sumit</p>
      </div>
      <div className='sb-flex'>
        <img src={anisul} alt="Lws" />
        <p>Anisul Islam</p>
      </div>
      <div className='sb-flex'>
        <img src={procoder} alt="Lws" />
        <p>Procoder</p>
      </div>
      <div className='sb-flex'>
        <img src={stackLearner} alt="Lws" />
        <p>Stack Learner</p>
      </div>

      <div className='sb-flex'>
        <img src={ps} alt="Lws" />
        <p>Programming Shikhbo</p>
      </div>
      </div>

    </div>
  )
}

export default Sidebar;