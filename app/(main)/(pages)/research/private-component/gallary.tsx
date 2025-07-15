import Image from 'next/image'
import React from 'react'

const Gallary = () => {
    const data = {
        title:"Student Research Activities at Eduma University",
        values:[
            "/research/reseach-gallery-6.webp",
            "/research/reseach-gallery-7.webp",
            "/research/reseach-gallery-8.webp",
            "/research/reseach-gallery-9.webp",
            "/research/reseach-gallery-10.webp",
        ]

    }
  return (
    <section>
       
        
        <h3 className='header text-center'>{data.title}</h3>
        <div className='grid grid-cols-2 grid-rows-5 md:grid-rows-2 md:grid-cols-4 gap-2 p-2 md:gap-6 md:p-7 '>

       <div className=' w-full grid grid-cols-1 row-span-3 md:row-span-1 md:grid-cols-3 gap-2 md:gap-6 md:col-span-3'>
         <Image 
        alt='image'
        src={data.values[0]}
        width={100}
        height={100}
        unoptimized={true}
        className='w-full hover:-translate-y-2 active:-translate-y-2 transition-all duration-300'
        />
        <Image 
        alt='image'
        src={data.values[1]}
        width={100}
        height={100}
        unoptimized={true}
        className='w-full hover:-translate-y-2 active:-translate-y-2 transition-all duration-300'
        />
        <Image 
        alt='image'
        src={data.values[2]}
        width={100}
        height={100}
        unoptimized={true}
        className='w-full hover:-translate-y-2 active:-translate-y-2 transition-all duration-300'
        />
       </div>
        <Image 
        alt='image'
        src={data.values[3]}
        width={100}
        height={100}
        unoptimized={true}
        className='w-full row-span-3 h-full object-cover md:row-span-2 hover:-translate-y-2 active:-translate-y-2 transition-all duration-300'
        />
        <Image 
        alt='image'
        src={data.values[4]}
        width={100}
        height={100}
        unoptimized={true}
        className='w-full relative col-span-2 h-full object-cover row-span-2 md:col-span-3 hover:-translate-y-2 active:-translate-y-2 transition-all duration-300'
        />
             
        </div>
        
    </section>
  )
}

export default Gallary