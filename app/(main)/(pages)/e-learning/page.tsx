import React from 'react'

const Page = () => {
    const data = {
        title:"E-Learning at Our University",
        box1:{
            title:"Key Benefits of E-Learning",
            values:[
            "Eliminates the need for traditional classrooms, allowing more flexibility and greater student capacity.",
"Reduces the overall cost of education.",
"Saves time and extends the student’s effective learning span.",
"Enhances education through interactive, self-paced, and collaborative learning, fostering engagement between students and instructors, as well as among peers.",
"Allows students to review lessons at any time, replay sessions, and benefit from explanations by multiple instructors, which improves comprehension and performance.",
"Encourages global exposure and interaction with students from various countries, promoting cross-cultural learning.",
"Improves job opportunities and supports career advancement through flexible access to education. ",       
            ]
        },
        box2:{
            title:"Types of E-Learning",
            values:[
                {head:"Synchronous Learning",
                    para:"This involves live sessions delivered through virtual classrooms over the internet. Students and instructors are online at the same time, allowing for real-time interaction and discussion.",
                    word:"Advantages:",
                    items:[
                        "No need to commute to campus, saving time and lowering costs.",
"Real-time engagement with instructors and classmates.",
                    ]

                },
                {head:"Asynchronous Learning",
                    para:"In this format, lessons are pre-recorded, allowing students to access them at their convenience. Students can send questions to instructors and participate in discussions at their own pace.",
                    word:"Advantages:",
                    items:[
                        "Flexible access to course content anytime, anywhere.",
"Students can revisit and review materials as needed, enhancing long-term understanding.",
                    ]

                },
            ]
        }

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