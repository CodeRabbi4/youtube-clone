import React, { useEffect, useState } from 'react';

import { PiThumbsUpThin } from "react-icons/pi";
import { PiShareFatThin } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { MdPlaylistAdd} from "react-icons/md";
import {useParams } from 'react-router-dom';
import { apiKey, value_converter } from '../Data';
import moment from 'moment';
import Comment from './Comment';

const PlayVideo = () => {
    const {videoId} = useParams();   
    const [toggle, setToggle] = useState(false);
    const [apiData, setApiData]= useState();
    const [channelData, setChannelData] = useState();
    const [comment, setComment]= useState();
    const [subscibe, setSubscribe] = useState(false);

    const fetchVideoData = async ()=>{
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;

        await fetch(url)
        .then((res)=> res.json())
        .then((data)=> setApiData(data.items[0]))
    };
    const channelId = apiData && apiData.snippet.channelId;
    const fetchChannelData = async ()=>{
        const url =`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${apiKey}`;
        await fetch(url)
        .then((res)=> res.json())
        .then((data)=> setChannelData(data.items[0]))
    };

    const fetchCommentData = async ()=>{
        const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${apiKey}`;
        await fetch(url)
        .then((res)=> res.json())
        .then((data)=> setComment(data.items))
    }
    
    useEffect(()=>{
        fetchVideoData()
    },[])
    
    useEffect(()=>{
        fetchCommentData()
        fetchChannelData()
    },[apiData])


  return (
    <div className='sm:basis-[74%] basis-full w-full' >

        <iframe className='sm:h-[35vw] h-[70vw] w-full rounded-2xl border-none' src={`https://www.youtube.com/embed/${videoId}?rel=0&;&autoplay=1`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
       <h2 className='sm:text-xl text-base text-black font-medium mt-3'>
        {apiData? apiData.snippet.title :"Video Title"}
        </h2>

        <div className='mt-3 sm:flex items-center justify-between'>

            <div className='flex items-center justify-between  gap-4 mb-4 sm:mb-0'>
            <img src={channelData? channelData.snippet.thumbnails.default.url:""} alt="Channel"
             className='w-12 h-12  rounded-full object-cover' />
            <div>
                <h3 className='font-medium sm:text-lg text-base'>
                    {apiData? apiData.snippet.channelTitle : "Channel Name"}
                </h3>
                <p className='text-gray-600 text-[13px] font-normal'>{channelData? value_converter(channelData.statistics.subscriberCount):"999k"} Subscribers</p>
            </div>
            <button className={`${subscibe? "bg-gray-200 text-black":"bg-slate-900 text-white"} sm:ml-4 ml-1 px-5 sm:px-6 py-2 sm:py-2.5 sm:tracking-wide rounded-full select-none
            outline-none  sm:text-sm text-[13px] font-medium`}
            onClick={()=> setSubscribe((prev)=> prev === false? true : false)}
            >{subscibe ?"Subscribed":"Subscribe"}</button>
            </div>
      
        <div className='flex items-center gap-2 sm:gap-2.5 sm:text-[22px] text-base'>
           <div className='flex item-center justify-between bg-gray-100 sm:py-2 py-1.5 px-2 w-28 sm:w-36 rounded-full cursor-pointer'>
           <div className='flex items-center p-0'>
           <span>
                <PiThumbsUpThin/>
            </span>
            <p className='sm:text-[15px] text-[13px] font-medium p-0 w-fit ml-1'>
                {apiData?value_converter(apiData.statistics.likeCount):"199k"}
            </p>
           </div>
           <div className='w-[0.8px] h-6 border-none outline-none bg-slate-300 p-0'></div>
            <span className='flex items-center p-0 -rotate-180'>
                <PiThumbsUpThin/>
            </span>
           </div>
          <div className='flex item-center justify-between bg-gray-100 sm:py-2 py-1.5 px-2 sm:w-[90px]
           rounded-full cursor-pointer'>
          <span className='mt-0.5'>
                <PiShareFatThin/>
            </span>
            <p className='sm:text-[15px] text-[13px] font-medium p-0 w-fit sm:ml-2 ml-1'>Share</p>
          </div>
           <div className='flex item-center justify-between bg-gray-100 sm:p-2 p-1.5 sm:w-28 w-24 rounded-full cursor-pointer'>
           <span className='text-lg mt-1 opacity-80'>
                <TfiDownload/>
            </span>
            <p className='sm:text-[15px] text-[13px] font-medium p-0 w-fit sm:ml-2 ml-0.5'>Download</p>
           </div>
           <div className='flex item-center justify-between bg-gray-100 sm:p-2 p-1.5 w-auto rounded-full cursor-pointer'>
            <span className='opacity-75 text-2xl'>
                <MdPlaylistAdd/>
            </span>
            <p className='sm:text-[15px] text-[13px] font-medium p-0 w-fit sm:ml-2 ml-1'>Save</p>
           </div>
        </div>
        </div>
        {/* Description */}
        <div className='my-4 w-full h-auto py-2 px-3 rounded-xl bg-gray-100 cursor-pointer' onClick={()=>
            setToggle((prev)=> prev===false? true : false)}>
            <h5 className='text-[15px] font-medium mb-2'>{apiData?`${value_converter(apiData.statistics.viewCount)}`:"1M"} views  &bull; {apiData? moment(apiData.snippet.publishedAt).fromNow():"1 days ago"}</h5>

            <p className={`${toggle? "":"line-clamp-2"} text-[15px] whitespace-pre-wrap`}>
                {apiData ? apiData.snippet.description:"Descriptions"}
            </p>
        </div>
        {/* Description */}

        {/* Comments */}
        <Comment comment={comment} apiData={apiData}/>
        {/* Comments */}
    </div>
    
  )
}

export default PlayVideo;