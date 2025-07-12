import React from 'react'
import Image from 'next/image'

const Look = () => {
    const img = "/hall.webP"
    const title = "About University & colleges"
    const para = "The colleges aims to be a pioneer in promoting employment opportunities and sustainable development, excelling in research and innovation by preparing qualified graduates to drive community development. It also offers training and continuing education services for its graduates and others to enhance their competencies and keep pace with scientific and practical advancements."
  return (
    <section className='flex flex-col md:flex-row p-1 sm:p-4 gap-4 items-center bg-gray-300'>
        <Image
        alt=''
        src={img}
        width={100}
        height={100}
        className='w-full  '
        />
        <div className='font-medium text-center md:w-full'>
            <h3 className='header'> {title}</h3>
            <p className='para text-gray-700 font-bold'>{para}</p>
        </div>
        
    </section>
  )
}

export default Look