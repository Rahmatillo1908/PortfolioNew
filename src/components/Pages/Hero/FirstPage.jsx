import React from 'react'
import person from "../../../assets/person2.png"
const FirstPage = () => {
    return (
        <div className='h-full'>
            <main className='h-full w-full bg-secondary page-shadow'>
                <div className='px-10 space-y-4'>
                    <div>
                        <img src={person} className='w-[300px] mx-auto' alt="" />
                    </div>
                    <div>
                        <div className='space-y-3'>
                            <p className='uppercase'>Hello</p>
                            <p className='text-4xl md:text-6xl font-bold text-black/80'>I'm Rahmatillo</p>
                            <p className='text-black/75 text-left'>Web Developer</p>
                            <p className='text-black/75'>I Umarov Rahmatillo. I was born in 2005. I have been working as a web developer since 2021.</p>
                         <a href="mailto:rahmatillo722022@gmail.com" className='inline-block primary-btn'>Hire Me</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default FirstPage