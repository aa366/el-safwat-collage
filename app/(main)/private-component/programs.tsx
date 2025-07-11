import React from 'react'
import Card from '@/components/elements/imgCard'

interface typeData{
    link: string;
    img: string;
    text: string;
   
}
const Programs = () => {
    const title = "Academic Programs"
    const sub = "The University Council, upon the recommendation of the College or Institute Council, awards the following degrees:"
    const data:typeData[] = [
        {
            text:"University Diploma (Associate Degree)",
            link:"/programs/university-diploma",
            img:"/toWEBP/Diploma.webP",

        },
        {
            text:"Bachelor’s Degree (Higher Diploma)",
            link:"/programs/bachelors-degree",
            img:"/toWEBP/Bachelor’s.webP",

        },
        {
            text:"Postgraduate Diploma (Specialized Diploma)",
            link:"/programs/postgraduate-diploma",
            img:"/toWEBP/PostgraduateDiploma.webP",

        },
        {
            text:"Master’s Degree (Advanced Specialized Degree)",
            link:"/programs/masters-degree",
            img:"/toWEBP/Master.webP",

        },
        {
            text:"Doctorate Degree (Ph.D.)",
            link:"/programs/doctorate-degree",
            img:"/toWEBP/Doctorate.webP",

        },
        {
            text:"Continuing Education Programs",
            link:"/programs/education",
            img:"/toWEBP/Education.webP",

        },
    ]

  return ( 
    <section className="font-medium flex flex-col gap-2  items-center">
        <div className=' flex flex-col gap-2  items-center px-8'>

      
        <h3 className='header text-center   border-x-8 border-green-800   px-4'>{title}</h3>
        <p className="text-gray-700 ">{sub}</p>
  </div>
        <div className=' w-full  md:px-[3%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
           {data.map(({img , text , link},idx)=>{
          

            return(
                <Card key={link+text+img+idx} img={img} link={link} text={text} textContClass='text-[1rem]' />
            )
           })}
        </div>
    </section>
  )
}

export default Programs