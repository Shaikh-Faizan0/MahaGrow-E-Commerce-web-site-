import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
      <div className='spinner'></div>
      <div className='text-white '>Loading</div>
    </div>
  )
}

export default Spinner
