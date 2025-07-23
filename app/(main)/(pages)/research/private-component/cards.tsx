import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { getTranslations } from "next-intl/server";

interface CardData {
    img: string;
    title: string;
    link: string;
    linkName: string;
    values: string[];
}

const Cards: React.FC = async () => {
    const t = await getTranslations("pages.research")
    const data = t.raw("Cards") as CardData[]

    return (
        <section className='flex flex-col p-2 gap-8'>
            {
                data.map((main: CardData, index: number) => {
                    return (
                        <div key={main.title + main.img + index} className={`flex flex-col gap-4 md:flex-row ${((index + 1) / 2 === 1) && "md:flex-row-reverse"}  `}>
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
                                {main.values.map((ele: string) => <p key={ele} className='para text-gray-700'>{ele} </p>)}
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