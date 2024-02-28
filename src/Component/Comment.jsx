import React from 'react'
import { value_converter } from '../Data'
import moment from 'moment'
import { PiThumbsUpThin } from 'react-icons/pi'

const Comment = ({comment, apiData}) => {
  return (
    <><div className='mt-6 mb-3'>
    <h2 className='sm:text-[22px] text-lg font-semibold'>
        {apiData?value_converter(apiData.statistics.commentCount):"1k"} Comments</h2>
    {
        comment &&
        comment.map((cmData)=>{
            const item = cmData.snippet.topLevelComment.snippet
            return(
                <div className='flex items-start sm:gap-5 gap-3 mt-6' key={cmData.id}>
        <img src={item.authorProfileImageUrl} alt="Profile" 
        className='sm:w-10 sm:h-10 w-9 h-9 rounded-full object-cover cursor-pointer' />
        <div>
            <h3 className='text-sm font-medium mb-1.5 cursor-pointer'>
                {item.authorDisplayName}
             <span className='text-sm font-normal text-gray-600 ml-2'>
                {moment(item.publishedAt).fromNow()}
                </span></h3>
            <p className='sm:text-[15px] text-sm text-gray-700 whitespace-pre-wrap'>
                {item.textOriginal}
            </p>

            <div className='flex items-center gap-5 mt-3'>
              <div className='flex items-center'>
                <span className='sm:text-[22px] text-[20px] cursor-pointer'>
                    <PiThumbsUpThin/>
                </span>
                <p className='ml-1.5 text-sm'>
                    {value_converter(item.likeCount)}
                </p>
              </div>
              <span className='sm:text-[22px] text-[20px] -rotate-180 cursor-pointer'>
                <PiThumbsUpThin/>
              </span>
            </div>
            
        </div>

    </div>
            )
        })
    }
</div></>
  )
}
export default Comment;