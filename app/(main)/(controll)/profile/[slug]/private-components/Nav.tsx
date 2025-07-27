"use client"
import React from 'react'
import { usePathname,useParams } from 'next/navigation' 
import Link from 'next/link'


// interface Shape{
//     name: string;
//     href: string;
// }[]

const Nav = () => {

 
    const path = usePathname()
   
      const {slug} = useParams<{ category: string; slug: string }>()

    const isModerator = true

    const moderatorItems = [
      {name:"site Structure",href:"/structure"},
      {name:"requests",href:"/requests"},
    ] 
    
    const items = [
        {name:"profile",href:""},
        {name:"courses",href:"/courses"},
        {name:"settings",href:"/profile-settings"},
 
    ]

    const isActive = (href:string)=>{
      if(href === ""){
      const check = (items.filter((item)=>  path.includes(item.href) ))
      check.shift()
      const mcheck = (moderatorItems.filter((item)=>  path.includes(item.href) ))
    
      
      

     if(check.length || mcheck.length ) return false
       
      }
      return path.includes(href)
    }


  return (
    <nav className=' flex gap-2 md:px-9 flex-wrap'>
        {items.map((ele)=>{

          const link = `/profile/${slug}` +ele.href

          return(
            <Link href={link} key={ele.href + "seconed Nav"} >
            <div   className={`p-1 border-4 md:p-3  border-gray-500 font-medium capitalize rounded-md w-fit ${isActive(ele.href) && "bg-green-800 text-white para"}` }>
              {ele.name}

            </div>
            </Link>
          )
        })}

        {isModerator && moderatorItems.map((ele)=>{
          const link = `/profile/${slug}` +ele.href
          return(
            <Link href={link} key={ele.href + "seconed Nav"} >

              <div  className={`p-1 md:p-3 capitalize border-4 border-gray-500 font-medium rounded-md w-fit ${isActive(ele.href) && "bg-green-800 text-white para"}` }>
              {ele.name}
  </div>
           
            </Link>
          )
        })}
    </nav>
  )
}

export default Nav