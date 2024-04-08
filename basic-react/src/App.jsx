import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.jsx'
import MyButton from './component/MyButton'
import AboutPage from './component/AboutPage'

function App() {
  return (
    <div>
      <MyButton></MyButton>
      <AboutPage></AboutPage>
    </div>
  )
}

export default App
