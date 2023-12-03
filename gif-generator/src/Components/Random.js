import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';



const Random = () => {
 

  const {gif,loading,fetchData}=useGif();
  function clickHandler(){
      fetchData();
  }
  return (
    <div className='w-1/2  bg-green-500 rounded flex flex-col items-center gap-y-5 mt-[15px]' >
      <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>A Random gif</h1>
      {
        loading ?(<Spinner/>):(<img src={gif} width="450"/>)
      }
     
      <button className='bg-yellow-500 w-10/12 text-l py-2 rounded mb-[20px]' onClick={clickHandler}>
        Generate
      </button>
    </div>
  )
}

export default Random
