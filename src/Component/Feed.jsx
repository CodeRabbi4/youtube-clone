import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiKey, value_converter } from '../Data';
import moment from 'moment';



const Feed = ({categories}) => {
   

    const [data, setData]= useState(null);


    const fetchData = async () =>{
         const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=1000&videoCategoryId=${categories}&key=${apiKey}`;
    
        await fetch(url)
        .then((res)=> res.json())
        .then((data)=>setData(data.items))
    }
   
    useEffect(()=>{
        fetchData()
    },[categories])



  return (
    <>
    <div className='feed-section'>
        {
            data &&
            data.map((item)=>{
                return(
            <Link to={`/play/${item.snippet.categoryId}/${item.id}`} key={item.id}  className='group'>
                <img src={item.snippet.thumbnails.medium.url} 
                alt="Thumbnail"  className='w-full rounded-lg group-hover:rounded-none transition-all duration-200 object-cover' />

                <h4 className='line-clamp-2 font-medium mt-3 mb-1 text-base text-black/90'>
                    {item.snippet.title}
                </h4>
                <h4 className='text-gray-600 text-sm font-medium'>
                    {item.snippet.channelTitle}
                </h4>
                <p className='text-gray-600 text-[15px]'>{value_converter(item.statistics.viewCount)} view &bull;     
                  <span className='ml-1'>{moment(item.snippet.publishedAt).fromNow()} </span></p>
            </Link>)
            })
        }
       
    

    </div>
    
    
    </>
  )
}

export default Feed;