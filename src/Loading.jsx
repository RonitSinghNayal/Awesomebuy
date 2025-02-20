import React from 'react'
import { PiSpinnerGapBold } from "react-icons/pi";
function Loading() {
  return (
    <div className='flex h-screen'>
    <div className='flex-grow text-6xl flex items-center justify-center'>
      <PiSpinnerGapBold className='animate-spin'/>
    </div>
    </div>
    
  );
}


export default Loading
