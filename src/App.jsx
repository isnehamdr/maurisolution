import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import Service from './components/Service'
import Vision from './components/Vision'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <WhoWeAre/>
   <Service/>
   <Vision/>
    </>
  )
}

export default App
