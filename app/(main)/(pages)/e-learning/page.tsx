import React from 'react'
import { getTranslations } from "next-intl/server";
interface DataShape {
    title: string;
    box1: {
        title: string;
        values: string[];
    };
    box2: {
        title: string;
        values: {
            head: string;
            para: string;
            word: string;
            items: string[];
        }[];
    };
}
const Page =async () => {
      const t = await getTranslations("pages.eLearning")
    //   t.raw("data")
    const data:DataShape = {
        title:t.raw("title"),
        box1:t.raw("box1"),
        box2:t.raw("box2")

    }
  return (

    <main className='flex flex-col gap-[10vh] mb-[10%]'>
        <h3 className='text-[calc(1.5rem+2vw)] font-bold text-green-800 text-center'>{data.title}</h3>

        <section className='w-[98%] mx-auto p-4 md:px-7 md:w-[80%]   bg-gray-200 shadow-lg flex flex-col gap-4'>
            <h3 className='header text-green-800 text-center'>{data.box1.title}</h3>
            <ul className='list-disc list-inside para'>

            
            {data.box1.values.map((ele , idx)=><li key={ele+idx}> {ele}</li>)}
            </ul>
        </section>

        <section className='w-[98%] mx-auto p-4 md:px-7 md:w-[80%]   bg-gray-200 shadow-lg flex flex-col gap-4'>
            <h3 className='header text-green-800 text-center'>{data.box2.title}</h3>
            {data.box2.values.map((ele,idx)=>{

                return(
                    <div key={ele.para+idx} className='flex flex-col gap-4'>
                            <h3 className='text-[calc(1rem+1.5vw)] font-bold '>{ele.head}</h3>
                            <p className='para text-gray-700'>{ele.para}</p>
                            <div>
                                <h4 className='para text-gray-700'>{ele.word}</h4>
                                <ul className='para text-gray-700 list-disc list-inside pl-7'>

                               
                                {
                                    ele.items.map((item,index)=><li key={item+index}>{item} </li>)
                                } </ul>
                            </div>

                    </div>
                )
            })}
        </section>
        
    </main>
  )
}

export default Page