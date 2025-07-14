"use client"
import React from 'react'

import { usePathname } from 'next/navigation'

const Page = () => {
  const router = usePathname()
  const slug = router.split("/")
  const path = slug[slug.length-1]
  return (
    <main className='h-[50vh] flex flex-col gap-4'>
    <h3 className='font-bold header text-center mx-auto  capitalize'>
     faculty of {path}
    
    </h3>
    <p className='w-full md:w-[80%] mx-auto para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, laudantium, exercitationem iste quis voluptates nihil beatae molestiae est repellat labore non quo accusantium ratione ad vitae nesciunt. Aspernatur, placeat id.</p>
  </main>
  )
}

export default Page