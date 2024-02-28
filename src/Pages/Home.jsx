import React from 'react'
import Sidebar from '../Component/Sidebar';
import Feed from '../Component/Feed';

const Home = ({sideMenu,setCategories,categories}) => {

  return (
    <section>
        <Sidebar sideMenu={sideMenu} setCategories={setCategories} categories={categories}/>
        <div className={`${sideMenu ? "sm:pl-[17%] pl-[15%]":"sm:pl-[9%] pl-[3%]"} pt-4 pe-3 pb-8`}>
        <Feed categories={categories}/>
        </div>
    </section>
  )
}
export default Home;