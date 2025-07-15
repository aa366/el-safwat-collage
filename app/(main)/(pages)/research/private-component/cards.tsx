import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Cards = () => {
    const data = [
        {img:"/research/research-box1.webp",title:"Regulations for Research Activity Management",link:'/research/regulations-for-research-activity Management' , linkName:'',values:[
            "EDUMA is committed to responsible and ethical conduct of research and stewardship of research funds. Our commitment to conducting impactful and responsible research is reflected in the policies and procedures for designing, conducting, supporting and reporting research at EDUMA.",
        ]},
        {img:"/research/research-box4.webp",title:"Ethics Approval for Human Subjects Research",link:'/research/ethics-approval' , linkName:'',values:[
            "EDUMA must ensure that the rights and interests of human participants involved in EDUMA research are protected, that research is conducted with appropriate informed consent, and that the benefits of any research involving such participants outweighs the risks to them and others.",
        ]},
        {img:"/research/research-box-6.webp",title:"External Activities and Outside Income for VinUniversity Faculty and Staff Policy",link:'/research/external activities' , linkName:'',values:[
            "External Activities and Outside Income for EDUMAUniversity Faculty and Staff Policy",
            "This policy applies to all full-time faculty and staff employees of EDUMAUniversity. Any exceptions to this general scope of this policy will be clearly identified."
        ]},
    ]

  return (
    <section className='flex flex-col p-2 gap-8'>
        {
            data.map((main,index)=>{






                return(
                    <div key={main.title+main.img+index} className={`flex flex-col gap-4 md:flex-row ${((index+1)/2 ===1) && "md:flex-row-reverse"}  `}>
                         <Image 
                            alt='image'
                            src={main.img}
                            width={100}
                            height={100}
                            className=' w-full md:w-[50%]'
                            unoptimized={true}
                            />
                            <div className='w-full md:w-[50%] text-balance  px-4 flex flex-col gap-4'>
                                <h3 className='header'>{main.title}</h3>
                                {main.values.map((ele)=> <p key={ele} className='para text-gray-700'>{ele} </p>)}
                                <Link href={main.link} className='para w-fit bg-gray-300 p-2 rounded-xl hover:bg-gray-600 hover:text-white '>{main.linkName || "Read More"}</Link>
                            </div>
                           
                    </div>
                )
            })
        }
        
    </section>
  )
}

export default Cards