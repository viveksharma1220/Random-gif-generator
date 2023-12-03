import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';



const Tag = () => {
 
  const [tag,setTag]=useState('');
  const {gif,loading,fetchData}=useGif(tag);
  function clickHandler(tag){
      fetchData();
  }
  function changeHandler(event){
   setTag(event.target.value)
  }
  return (
    <div className='w-1/2  bg-blue-500 rounded flex flex-col items-center gap-y-5 mt-[15px]' >
      <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} gif</h1>
      {
        loading ?(<Spinner/>):(<img src={gif} width="450"/>)
      }
     <input
     className='w-10/12 text-l py-2 rounded mb-[20px]'
     onChange={changeHandler}
     value={tag}
     />
      <button className='bg-yellow-500 w-10/12 text-l py-2 rounded mb-[20px]' onClick={clickHandler}>
        Generate
      </button>
    </div>
  )
}

export default Tag
