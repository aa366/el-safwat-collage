import Card from '@/components/elements/imgCard'
import React from 'react'
import Cards from './private-component/cards'
import Gallary from './private-component/gallary'
import Achievements from './private-component/achievements'
import { getTranslations } from "next-intl/server";
const Page = async () => {
      const t = await getTranslations("pages.research.main")
    const data = {
        img:"/research/banner-reseach.webp",
        text:t("text")
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