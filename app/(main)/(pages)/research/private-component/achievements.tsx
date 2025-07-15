import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Achievements = () => {
    const data = {
        title:"Research achievement awards",
        values:[
            {img:"/research/research-box3.webp",
                title:"Mid-Career Research Scholar Award",
                para:"This award recognizes a general faculty member with a minimum of three years at EDUMA University and holding...",
                link:"/research/mid-career-research",
                linkName:""
            },
            {img:"/research/research-box2.webp",
                title:"Mid-Career Research Scholar Award",
                para:"This award recognizes a general faculty member with a minimum of three years at EDUMA University and holding...",
                link:"/research/mid-career-research",
                linkName:""
            },
        ]
    }
  return (
    <section className='flex flex-col md:flex-row gap-4 p-4 md:px-[20%]'>
        {
            data.values.map((ele,idx)=>{

                return(
                    <div key={ele.para+ele.title+idx} className=''>
                        <Image 
                        alt=''
                        src={ele.img}
                        width={100}
                        height={100}
                        unoptimized={true}
                        className='w-full'
                        />
                        <div className='flex flex-col p-4 gap-4 shadow-xl'>
                            <h3 className='header text-center hover:text-green-800 transition-all duration-300'>{ele.title}</h3>
                            <p className='para text-gray-700'>{ele.para}</p>
                            <Link href={`${ele.link}`} className='para px-4 rounded-xl  p-2 bg-gray-300 hover:bg-gray-600 hover:text-white w-fit'>
                            {ele.linkName||"View Morw"}
                            </Link>
                        </div>

                    </div>
                )
            })
        }

    </section>
  )
}

export default Achievements