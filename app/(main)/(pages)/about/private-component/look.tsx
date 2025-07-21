import React from 'react'
import Image from 'next/image'
import { getTranslations } from "next-intl/server";
const Look =async  () => {
   const t = await getTranslations("pages.about.Look")
    const img = "/hall.jpg"

    const title = t("title")
    const para =t("para")
  return (
    <section className='flex flex-col p-1 sm:p-4 gap-4 items-center bg-gray-300  '>
        <Image
        alt=''
        src={img}
        width={100}
        height={100}
        className='w-full  '
        unoptimized={true}
        />
        <div className='font-medium text-center md:w-full'>
            <h3 className='header'> {title}</h3>
            <p className='para text-gray-700 font-bold'>{para}</p>
        </div>
        
    </section>
  )
}

export default Look