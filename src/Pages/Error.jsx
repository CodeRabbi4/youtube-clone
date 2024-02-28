import React from 'react'
import { useParams } from 'react-router-dom';

const Error = () => {
  const {title} = useParams();
  return (
    <>
    
    <h1 className='text-center mt-60 font-bold text-4xl text-red-600'>{`(${title})`} page not Found ⚠</h1>
    </>
  )
}

export default Error;