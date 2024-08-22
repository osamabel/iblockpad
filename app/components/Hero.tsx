import React from 'react'

function Hero() {
  return (
    <div className='w-[1128px] flex flex-col items-end gap-y-[40px] z-[1]' >
        <div className='w-full flex justify-start'>
          <img src="/INVEST.svg" alt="" className='animate-img ' />
        </div>
        <div className='w-full flex justify-start pr-[265px]'>
          <img src="/INCUBATE.svg" alt=""  className='animate-img delay-2'/>
        </div>
        <div className='w-full flex justify-strat pr-[168px]'>
          <img src="/pargph.svg" alt=""  className='animate-img delay-3'/>
        </div>
    </div>
  )
}

export default Hero