import React from 'react'
import { getTranslations } from "next-intl/server";

interface Shape{
    
    title: string;
    values: {
        title: string;
        text: string;
    }[];

}
const Page = async () => {
      const t = await getTranslations("pages.institutes")
    const data:Shape = {
        title:t("title"),
        values:t.raw("values")
    }
  return (
    <main className=''>
        <h3 className='header text-green-800 md:w-[80%] md:mx-auto text-center  '>{data.title}</h3>
        <div className='flex flex-col gap-2 p-4 md:w-[80%] md:mx-auto'>
            {
                data.values.map((ele)=>{

                    return (
                        <div key={ele.text} className='shadow-md p-2 flex flex-col gap-2'>
                                <h3 className='text-[1.5rem] font-bold text-green-700'> {ele.title}</h3>
                                <p className=' text-gray-700 font-medium para text-balance '>{ele.text}</p>
                        </div>
                    )
                })
            }
        </div>
    
    
    </main>
  )
}

export default Page