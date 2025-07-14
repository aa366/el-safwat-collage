import React from 'react'
import Card from "@/components/elements/imgCard"
import Asks from './private-component/asks'
const Page = () => {
    const img ="/toWEBP/admission-banner-2.webP"
    const  text = "Working side by side with undergraduates, our professors encourage students to see with new eyes. Through research, coursework, and casual interactions, students and faculty learn from and challenge each other on a daily basis."
  return (
    <main className='flex flex-col gap-[10vh]'>
        <Card img={img} imgClass='md:w-[80%] md:mx-auto' text={text} textContClass='md:w-[40%] right-1/2 translate-x-1/2 translate-y-1/2 bg-black p-2 overflow-y-auto max-h-[40%] text-lg md:text-[1rem] min-h-[50px]' contClass='mb-[5%]'/>
        <Asks />
        
      
    </main>
  )
}

export default Page