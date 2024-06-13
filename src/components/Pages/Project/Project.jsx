import React from 'react'

const Project = ({ project }) => {
  return (
    <div className='h-[300px] rounded-xl p-6'>
      <h1 className=' text-4xl font-semibold text-center pb-4'>{project.name}</h1>
      <img className='w-full h-full object-cover rounded-xl shadow-lg shadow-gray-600' src={project.image} alt="" />
      <div className='pt-3'>
        <p className='text-2xl line-clamp-2 text-gray-500'>{project.desc}</p>
        <a className='primary-btn p-3 mt-4 text-2xl' target='_blank' href={project.websiteLink}>View project</a>
      </div>
    </div>
  )
}

export default Project