
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import * as mdb from 'mdb-ui-kit';
import './App.css'
import Hero from './components/Hero/Hero'
import GridSection from './components/GridSection/GridSection'
import Blog from './components/Blog/Blog'

function App() {
  

  return (
    <>
      <Hero />
      <GridSection />
      <Blog />
    </>
  )

}

export default App;
