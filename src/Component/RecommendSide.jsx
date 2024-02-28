import React, { useEffect, useState } from 'react';
import { apiKey, value_converter } from '../Data';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';

const RecommendSide = () => {
  const {cgId} = useParams()
  const [rcVideo, setRcVideo] = useState()


  const fetchVideo = async ()=>{
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=1000&videoCategoryId=${cgId}&key=${apiKey}`;
    await fetch(url)
    .then((res)=>res.json())
    .then((data)=>setRcVideo(data.items))
  };

  useEffect(()=>{
    fetchVideo()
  },[cgId])




  return (
    <div className='sm:basis-[25%] basis-full mt-10 sm:mt-0'>
      {
        rcVideo &&
        rcVideo.map((item)=>{
          return(
        <Link to={`/play/${item.snippet.categoryId}/${item.id}`} onClick={()=>window.reload()} 
        className='sm:flex items-start gap-x-1.5 sm:mb-3 mb-6 block' key={item.id}>
        <img src={item.snippet.thumbnails.medium.url} alt="Thumbnail" className='sm:w-1/2 w-full object-cover rounded-lg' />
        <div className='sm:w-1/2 w-full'>
            <h3 className='line-clamp-2 text-[15px] font-medium mb-1 sm:mt-0.5 mt-2'>
              {item.snippet.title}
            </h3>
            <h5 className='sm:text-[12px] text-sm text-gray-600'>{item.snippet.channelTitle}</h5>
            <p className='sm:text-[12px] text-sm text-gray-600 text-normal'>{value_converter(item.statistics.viewCount)} views 
            &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </div>
    </Link>
          )
        })
      }
    </div>
  )
}
export default RecommendSide;