import React from 'react'
import { AiFillLayout } from "react-icons/ai"
import { MdOutlinePhoneAndroid, MdSecurity } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2"
const ServicesData = [
    {
        name: "Frontend Developer",
        icon: <AiFillLayout className="text-4xl" />,
        bgColor: "bg-blue-500/70",
    },
    {
        name: "Web Developer Mentor",
        icon: <MdOutlinePhoneAndroid className="text-4xl" />,
        bgColor: "bg-lime-500/70",
    },
    {
        name: "Web Designer",
        icon: <HiMiniComputerDesktop className="text-4xl" />,
        bgColor: "bg-fuchsia-500/70",
    },
    {
        name: "Consultant",
        icon: <MdSecurity className="text-4xl" />,
        bgColor: "bg-orange-500/70",
    },
]
const ServicesBox = () => {
    return (
        <div className='h-full mt-2 text-white'>
            <div className='grid grid-cols-2 gap-6'>
                {
                    ServicesData.map(({ name, desc, icon, bgColor }, index) =>
                        <div key={index} className={`p-3 ${bgColor} min-h-[180px] rounded-xl`}>
                            <div className='p-3 flex items-center justify-center flex-col'>
                                <h1 className='pb-4'>{icon}</h1>
                                <h1 className='text-xl text-center'>{name}</h1>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ServicesBox