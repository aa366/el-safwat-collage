import Card from '@/components/elements/imgCard'
import React from 'react'
import Cards from './private-component/cards'
import Gallary from './private-component/gallary'
import Achievements from './private-component/achievements'

const Page = () => {
    const data = {
        img:"/research/banner-reseach.webp",
        text:"Our alumni have a history of shared experiences and memories, understood by those who studied before them, those who studied with them and those who will soon join the alumni community."
    }
    const {img,text} = data
  return (
  <main className='flex flex-col gap-[10vh]'>
        <Card img={img} imgClass='md:w-[80%] md:mx-auto ' text={text} textContClass='md:w-[50%] para right-1/2 translate-x-1/2 translate-y-1/2 bg-black p-4 overflow-y-auto max-h-[40%]  min-h-[50px] ' contClass='mb-[5%]'/>
        <Cards />
        <Gallary />
        <Achievements />
      
        
      
    </main>)
}

export default Page