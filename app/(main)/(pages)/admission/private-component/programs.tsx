import React from 'react'
import { getTranslations } from "next-intl/server";
const Programs =async () => {
     const t = await getTranslations("pages.admission.Programs")
    const data = t.raw("data") as {
    title: string;
    para: string;
    values: string[];
}[]

  return (
    <section className='grid gap-[5%] grid-cols-1 md:grid-cols-2 font-medium px-[5%]'>
        {
            data.map(({values,title,para})=>(
                <div key={para} className='flex flex-col gap-3'>
                    <h3 className='header '>{title}</h3>
                    <p className='para text-gray-600'>{para}</p>
                    <ul className='para font-bold list-decimal list-inside'>           

                    {
                        values.map((item)=>(
                                <li key={item} className='hover:scale-105'>
                                    {item}
                                </li>
                        ))
                    }
                      </ul>
                </div>
            ))
        }
        
    </section>
  )
}

export default Programs