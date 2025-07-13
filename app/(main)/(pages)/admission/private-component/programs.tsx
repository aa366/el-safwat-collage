import React from 'react'

const Programs = () => {
    const data = [
        {title:"Academic Programs",para:"Safwat Al-Safwa International University grants academic degrees upon the recommendation of the College or Institute Council and the approval of the University Council. The following degrees are awarded:",values:[
"Ijaza Degree (Diploma)",
"Higher Ijaza Degree (Bachelor’s Degree)",
"Specialization Degree (Higher Diploma)",
"Advanced Specialization Degree (Master’s Degree)",
"Al-Alamiyya Degree (Doctorate)",
"Continuing Education Programs",

            
        ]},
        {title:"Admission Requirements",para:"To be eligible for admission to Safwat Al-Safwa International University, applicants must meet the following requirements:",values:[
            "Hold a high school diploma or its equivalent.",
            "Pass the university’s entrance examinations.",
            "Fulfill the specific admission requirements of the desired college.",
            "Obtain official approval from the university.",
        ]},
       
    ]

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