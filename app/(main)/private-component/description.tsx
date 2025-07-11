import React from 'react'
import Image from 'next/image'
const Description = () => {
    const title = "Safwat Al-Safwa International University"
    const text = [
        "Committed to delivering high-quality education across various disciplines. Our mission is to empower individuals through skill development, professional requalification, community engagement, and support for sustainable development. We adopt modern methodologies and tools to meet both local and international standards, keeping pace with the evolving world.","The university focuses on self-directed and collaborative learning, scientific research, training, and lifelong education for graduates and the wider community. Our goal is to enhance human competencies and minimize professional errors that may have serious consequences, ensuring our graduates meet global standards and contribute effectively to sustainable development."
    ]
    const img = "/building.webP"
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
                {text.map((t)=> (
                <p key={t +"para"} className='text-gray-800 font-medium'>{t}</p>
            ))}
            </div>
            
        </div>
    </div>
  )
}

export default Description