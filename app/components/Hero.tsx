import React from 'react'

function Hero() {
  return (
    <div className='w-[1128px] flex flex-col items-end gap-y-[40px] pt-[100px]' >
        <div className='w-full flex justify-start'>
          <img src="/INVEST.svg" alt="" />
        </div>
        <div className='w-full flex justify-start pr-[265px]'>
          <img src="/INCUBATE.svg" alt="" />
        </div>
        <div className='w-full flex justify-strat pr-[168px]'>
          <img src="/pargph.svg" alt="" />
        </div>
        {/* <h1 className='font-graphik-arabic font-semibold text-[190.92px] leading-[11.75rem] text-white'>،نستثمر</h1> */}
        {/* <h1 className='font-graphik-arabic font-semibold text-[190.92px] text-primary leading-[11.75rem]'>نحتضن</h1> */}
        {/* <p className='font-graphik-arabic font-medium text-[45.08px] w-[500px] !rtl text-white'>ونسَرع المشاريع الناشئة في مجال البلوكشين</p> */}
        {/* <button className='text-[17.22px] border-[1px] border-primary px-[30px] py-[15px] rounded-[10px] mt-[40px]'>ابدأ بصنع حل تقني لمشروعك القادم</button> */}
    </div>
  )
}

export default Hero