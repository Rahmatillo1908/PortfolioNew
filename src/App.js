import React from 'react'
import MyBook from './components/MyBook'

const BgStyle = {
  background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3)), center/cover url(https://images.pexels.com/photos/6177677/pexels-photo-6177677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
  minHeight: '100vh',
  width: '100%'
}
const App = () => {
  return (
    <div style={BgStyle} className='w-full h-full flex justify-center items-center'>
      <MyBook />
    </div>
  )
}

export default App