import React from 'react'

const Cover = ({ coverImg, title }) => {
  const coverImgStyle = {
    backgroundImage: `url(${coverImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
  }
  return (
    <div className='h-full' style={coverImgStyle}>
      <div className='h-full flex justify-center items-center page-shadow'>
        <h1 className='text-primary text-5xl font-outline-2'>{title}</h1>
      </div>
    </div>
  )
}

export default Cover