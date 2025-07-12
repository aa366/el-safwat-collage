import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {

  const rights = " All rights reserved © 2025 Safwat Al-Safwa International University"
  const data = [
    {
      title:"Rsources",
      values: [
        {name:"About us",link:"/about"},
        {name:"Admission",link:"/admission"},
        {name:"Research",link:"/research"},
        {name:"E-Learning",link:"/e-learning"},
      ]
    },
    {
      title:"Main Faculties",
      values: [
        {name:"Faculty of Medicine",link:"/faculty/Medicine"},
        {name:"Faculty of Dentistry",link:"/faculty/dentistry"},
        {name:"Faculty of Medical Sciences",link:"/faculty/medical-sciences"},
        {name:"Faculty of Engineering",link:"/faculty/engineering"},
       
      ]
    },
    {
      title:"Institutes",
      values: [
        {name:"Arabic Language Institute",link:"/institute"},
        {name:"Institute of Applied Sciences",link:"/institute"},
       
      ]
    },
  ]
  const img = "/logo.png"
  const tel = "+1 (646) 710-0836"
  return (
    <footer className='flex flex-col gap-2 bg-[rgba(0,0,0,0.83)]'>
      <div>

         <div>
          <Image  
          alt=''
          src={img}
          width={100}
          height={100}
          className=''
          />
          <a href={`tel:${tel}`}>
    {tel}
          </a>

          <div>
            

          </div>

         </div>

      <div className='flex p-4 gap-[10%]'>
        {
          data.map((ele)=>{

            return(
              <div key={ele.title} className='flex flex-col gap-4'>
                <h3 className='text-white para'>{ele.title}</h3>
                <div className='flex flex-col  text-[1.1rem] '>
                  {
                    ele.values.map((item)=>{

                      return (
                        <h4 key={item.link+item.name} className='text-gray-400 '>

                          <Link href={item.link} className='h-full w-full'>
                          {item.name}

                          </Link>
                          

                        </h4>
                      )
                    })
                  }
                </div>

              </div>
            )
          })
        }
      </div>

      </div>


      <h3 className='text-gray-300 para border-t-[.25rem] border-gray-600 text-center py-2'>
       {rights}
        
      </h3>
     
      
    </footer>
  )
}

export default Footer