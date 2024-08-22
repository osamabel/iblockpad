import Image from 'next/image'
import React from 'react'

function Nav() {
  return (
    <div className='min-h-[100px] w-full flex items-center justify-center'>
      <div className='font-medium text-[14px] w-[126px] flex justify-end'>English</div>
      <div className='w-[1128px] flex items-center justify-center gap-x-[40px] text-[16px] font-medium'>
          <div>من نحن</div>
          <div>خدماتنا</div>
          <div>فريقنا</div>
          <div>تواصل معنا</div>
      </div>
      <div>
      <Image
        src="/Logo.svg"
        width={176}
        height={0}
        alt="Picture of the author"
      />
      </div>
    </div>
  )
}

export default Nav