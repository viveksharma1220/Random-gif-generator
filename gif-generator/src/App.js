import './App.css';
import Random from './Components/Random'
import Tag from './Components/Tag'

import React from 'react'

const App = () => {
  return (
    <div className=' w-full h-screen flex flex-col background relative overflow-x-hidden items-center'>
     <h1 className='text-3xl  bg-white rounded-sm w-full text-center mt-[40px] font-bold '>Random Gif</h1>
     <div className=' w-full flex flex-col items-center gap-y-10 mt-[30px] '>
      <Random/>
      <Tag/>
     </div>
    </div>

  )
}

export default App

