import React from 'react';
import PlayVideo from '../Component/PlayVideo';
import RecommendSide from '../Component/RecommendSide';

const Video = ({categories}) => {
  return (
    <section className='pt-2 sm:pl-5 pl-3 sm:pr-12 pr-3 sm:flex gap-5'>
      <PlayVideo/>
     <RecommendSide categories={categories}/>
    
    </section>
  )
}
export default Video;