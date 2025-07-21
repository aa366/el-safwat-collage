import React from 'react'
import Image from 'next/image'
import { getTranslations } from "next-intl/server";
const AboutBanner = async  () => {
     const t = await getTranslations("pages.about.AboutBanner")
    const img = "/hall.jpg"
    const paras:string[] = t.raw("paras")
  return (
    <section className='md:mx-[10%] relative mb-[5%]'> 
        <Image 
        width={100}
        height={100}
        src={img}
        className='w-full'
        alt=''
        unoptimized={true}
        
        />
        <div className='absolute w-full h-full bg-[rgba(0,0,0,.2)] top-0 left-0' />
            <div className='absolute bottom-0 left-1/2 w-full md:w-4/5 translate-y-1/3 -translate-x-1/2 p-4 gap-2 flex flex-col bg-black overflow-y-auto max-h-[50%]'>
                {
                    paras.map((ele)=>{

                        return(
                            <p key={ele} className='text-white font-medium'>
                                {ele}
                            </p>
                        )
                    })
                }

            </div>
       
        
    </section>
  )
}

export default AboutBanner