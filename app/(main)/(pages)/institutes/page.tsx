import React from 'react'

const Page = () => {
    const data = {
        title:"University Institutes",
        values:[
            {title:"Arabic Language Institute",
                text:"The Arabic Language Institute is dedicated to teaching Arabic to non-native speakers through a comprehensive and immersive curriculum. The institute focuses on developing students' reading, writing, speaking, and listening skills, while also introducing them to Arab culture and traditions. With qualified instructors and modern teaching methods, the institute provides a supportive environment for learners at all levels."
            },
            {title:"Institute of Applied Sciences",
                text:"The Institute of Applied Sciences offers specialized programs that combine theoretical knowledge with hands-on practical experience in various scientific and technical fields. The institute is committed to preparing students for careers in industries such as technology, engineering, health sciences, and environmental studies. Through state-of-the-art laboratories and experienced faculty, students gain the skills needed to meet real-world challenges."
            },
        ]
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