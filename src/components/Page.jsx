import React, { forwardRef } from 'react'

const Page = forwardRef((props, ref) => {
    return (
        <div className='demopage bg-white' ref={ref}>
            <div className='h-full'>{props.children}</div>
            <p className='text-sm text-end text-white pb-4'>Page Number: {props.number}</p>
        </div>
    )
})

export default Page