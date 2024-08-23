import React from 'react'
import Technologie from './services/Technologie'

function Services() {
  return (
    <div className="w-[1128px] flex pt-[210px] relative z-[1]">
      <div className="absolute right-[36px] top-0 flex items-end text-primary z-[2]">
          <img className="" src="/title.svg" alt="" />
          <h1 className="text-[33.75px] ">خدماتنا</h1>
      </div>
      <div className='w-full flex flex-col relative '>

        <div className="flex items-start text-white z-[2] gap-x-[20px] relative pr-[34px]">
          <img className="mt-[0px]" src="/subTitle.svg" alt="" />
          <h1 className="text-[33.75px] translate-y-[-10px] ">التطوير والبرمجيات</h1>
        </div>

        {/* <div className='pr-[34px] flex'> */}
          {/* <div className="flex items-start text-white z-[2] mr-[70px]">
            <p className='text-[16px] font-light w-[600px]'
              >تطوير برمجيات مخصصة باستخدام أحدث تقنيات البرمجة.<br/>
            تكامل الأنظمة وقواعد البيانات لتعزيز كفاءة العمليات.
            </p>
          </div> */}


          <div className='relarive'>
              {/* <div className="ShadowCard"></div> */}
              <Technologie />
          </div>
        {/* </div> */}
      </div>
  </div>
  )
}

export default Services