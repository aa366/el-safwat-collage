import React from 'react'
import Image from 'next/image'
import { getTranslations } from "next-intl/server";

const Description = async () => {
  const t = await getTranslations("pages.home.Description")
  const title: string = t.raw("title") as string
  const text: string[] = t.raw("text") as string[]
  const img = "/banner.jpg"
  return (
    <div className='flex flex-col md:flex-row gap-2 p-2'>

      <div className='w-full flex justify-self-center '>
        <Image 
          alt='Best University you can Join'
          src={img}
          width={100}
          height={100}
          className='w-full h-full object-cover'
        />
      </div>
      
      <div className='flex flex-col w-full  gap-2 ' >
        <h3 className='text-xl md:text-2xl lg:text-3xl font-medium'>{title}</h3>
        <div className='flex flex-col gap-1'>
          {text.map((t) => (
            <p key={t + "para"} className='text-gray-800 font-medium'>{t}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Description