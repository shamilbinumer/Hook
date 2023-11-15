import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Just from './components/just/Just'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Nav/> */}
     <Just/>
    </>
  )
}

export default App
