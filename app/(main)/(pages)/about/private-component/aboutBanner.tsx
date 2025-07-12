import React from 'react'
import Image from 'next/image'

const AboutBanner = () => {
    const img = "/hall.webP"
    const paras:string[] = [
        "Safwat Al-Safwa International University is committed to delivering high-quality education across various disciplines. Our mission is to empower individuals through skill development, professional requalification, community engagement, and support for sustainable development. We adopt modern methodologies and tools to meet both local and international standards, keeping pace with the evolving world.",
        "The university focuses on self-directed and collaborative learning, scientific research, training, and lifelong education for graduates and the wider community. Our goal is to enhance human competencies and minimize professional errors that may have serious consequences, ensuring our graduates meet global standards and contribute effectively to sustainable development."
    ]
  return (
    <section className='md:mx-[10%] relative mb-[5%]'> 
        <Image 
        width={100}
        height={100}
        src={img}
        className='w-full'
        alt=''
        
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