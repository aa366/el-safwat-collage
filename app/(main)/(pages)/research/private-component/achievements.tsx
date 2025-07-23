import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from "next-intl/server";
interface DataShape {
    title: string;
    values: {
        img: string;
        title: string;
        para: string;
        link: string;
        linkName: string;
    }[];
}
const Achievements =async () => {
     const t = await getTranslations("pages.research.Achievements")
    const data:DataShape = {
        title:t.raw("title"),
        values:t.raw("values")
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