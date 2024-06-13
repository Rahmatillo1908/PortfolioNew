import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaGithub, FaTelegram } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa6";

const About = () => {
    return (
        <div className='h-full page-shadow bg-white p-10'>
            <div className="flex flex-col items-center">
                <h1 className='inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1'>
                    About
                </h1>
                <p className='text-sm text-slate-500 text-center md:w-[80%] mx-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui vitae minus hic. Libero?
                </p>
            </div>
            <div className='mt-10 text-slate-500'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet distinctio quibusdam, animi delectus qui quia dicta? Nam magni nesciunt nihil.</p>
                <br />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque doloremque suscipit magnam quibusdam nemo?</p>
                <div className='flex space-x-4 mt-10'>
                    <a target='_blank' href="https://www.instagram.com/rahmatillo4590/"><AiFillInstagram className='social-btn' /></a>
                    <a target='_blank' href="https://t.me/Rahmatillo1908"><FaTelegram className='social-btn' /></a>
                    <a target='_blank' href="https://github.com/Rahmatillo1908"><FaGithub className='social-btn' /></a>
                    <a target='_blank' href="https://codepen.io/Rahmatillo-Umarov"><FaCodepen className='social-btn' /></a>
                </div>
                <div className='flex space-x-4 mt-4'>
                    <a target='_blank' href="https://www.canva.com/design/DAGB_CtsIBg/ftKOu-T2FrLzeF6Z8VjWew/view?utm_content=DAGB_CtsIBg&utm_campaign=designshare&utm_medium=link&utm_source=editor" className='primary-btn'>Resume</a>
                    <a href="tel:+998903434590" className='outline-btn'>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default About