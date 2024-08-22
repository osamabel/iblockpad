import React from 'react'
import Programmig from './services/Programmig'

function Services() {
  return (
    <div className="w-[1128px] flex pt-[250px] relative z-[1]">
        <div className=" absolute right-[36px] top-0 flex items-end text-primary z-[2]">
            <img className="" src="/title.svg" alt="" />
            <h1 className="text-[33.75px] ">خدماتنا</h1>
        </div>
      <div className='w-full flex flex-col relative  gap-y-[50px]'>
        <div className='pr-[34px] flex flex-col gap-y-[10px]'>
          <div className="flex items-start text-white z-[2] gap-x-[20px]">
            <img className="mt-[20px]" src="/subTitle.svg" alt="" />
            <h1 className="text-[33.75px] ">التطوير والبرمجيات</h1>
          </div>
          <div className="flex items-start text-white z-[2] mr-[70px]">
            <p className='text-[20.86px] font-medium w-[600px]'>تطوير برمجيات مخصصة باستخدام أحدث تقنيات البرمجة.<br/>
تكامل الأنظمة وقواعد البيانات لتعزيز كفاءة العمليات.</p>
          </div>

        </div>
        <div className=''>
            <Programmig />
        </div>
      </div>
  </div>
  )
}

export default Services