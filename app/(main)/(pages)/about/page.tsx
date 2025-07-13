import React from 'react'
import AboutBanner from './private-component/aboutBanner'
import Statstics from './private-component/statstics'
import Us from './private-component/us'
import Look from './private-component/look'
const Page = () => {
  return (
    <main  className="flex flex-col gap-[10vh] ">
        <AboutBanner />
        <Statstics />
        < Us/>
        <Look />


    </main>
  )
}

export default Page