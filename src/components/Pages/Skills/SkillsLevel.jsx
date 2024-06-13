import React from 'react'

const SkillsLevel = ({skillName,percentage}) => {
  return (
    <div className='mt-4 space-y-2'>
        <div className='flex justify-between items-end'>
            <p className='font-bold text-xl'>{skillName}</p>
            <p className='test-sm'>{percentage}</p>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full">
          <div className="h-2 bg-primary rounded-full" style={{width:percentage + "%"}}>
            
          </div>
        </div>
    </div>
  )
}

export default SkillsLevel