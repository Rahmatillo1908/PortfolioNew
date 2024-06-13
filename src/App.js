import React from 'react'
import MyBook from './components/MyBook'
import bg from "./assets/bg.jpg"

const BgStyle = {
  background: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  width: '100%'
}
const App = () => {
  return (
    <div style={BgStyle} className='w-full h-full flex justify-center items-center'>
      <MyBook/>
    </div>
  )
}

export default App