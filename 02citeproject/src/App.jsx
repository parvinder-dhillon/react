import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let [changeclr, setchangeclr] = useState("black")
  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: changeclr }}>
      <div className='fixed flex flex-wrap justify-center gap-20 bottom-12 inset-x-0 px-2 py-2'>
        <div className='flex flex-wrap justify-center gap-20 bg-white bottom-12 px-2 py-2 rounded-3xl'>
          <button className='outline-none text-white rounded-full px-3 py-2' style={{backgroundColor:"blue"}} onClick={() => setchangeclr("blue")}>blue</button>
          <button className='outline-none text-white rounded-full px-3 py-2' style={{backgroundColor:"green"}} onClick={() => setchangeclr("green")}>green</button>
          <button className='outline-none txt-white rounded-full px-3 py-2' style={{backgroundColor:"yellow"}} onClick={() => setchangeclr("yellow")}>yellow</button>
          <button className='outline-none text-white rounded-full px-3 py-2' style={{backgroundColor:"red"}} onClick={() => setchangeclr("red")}>red</button>
          <button className='outline-none text-white rounded-full px-3 py-2' style={{backgroundColor:"grey"}} onClick={() => setchangeclr("grey")}>grey</button>
          <button className='outline-none text-white rounded-full px-3 py-2' style={{backgroundColor:"black"}} onClick={() => setchangeclr("black")}>black</button>
          <button className='outline-none text-white rounded-full px-3 py-2' style={{backgroundColor:"pink"}} onClick={() => setchangeclr("pink")}>pink</button>
          <button className='outline-none text-white rounded-full px-3 py-2' style={{backgroundColor:"orange"}} onClick={() => setchangeclr("orange")}>orange</button>
        </div>
      </div>
    </div>

  )
}

export default App