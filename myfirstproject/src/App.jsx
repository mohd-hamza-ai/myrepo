import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Demo} from './component.jsx/Demo'
import Temu from './component.jsx/Temu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>hamza</h1>
      <Example1></Example1>
      <Demo></Demo>
      <Temu></Temu>
    </div>  
  )
}
function Example1(){
  return(
    <h3>hello this is example of component</h3>
  )
}
export default App
