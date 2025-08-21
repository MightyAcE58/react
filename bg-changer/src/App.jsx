import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  function setter(colur){
    setColor(colur)
  }

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      
      <div className='fixed flex flex-wrap justify-center bottom-28 inset-x-0 px-2'>

        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mb-7'>

          <button
          onClick={()=> setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-2xl' style={{backgroundColor:"red"}}>
            Red
          </button>

          <button
          onClick={()=> setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-2xl' style={{backgroundColor:"blue"}}>
            blue
          </button>

          <button
          onClick={()=> setColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-2xl' style={{backgroundColor:"green"}}>
            green
          </button>

          <button
          onClick={()=> setColor("black")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-2xl' style={{backgroundColor:"black"}}>
            black
          </button>
        

        </div>

      </div>
    </div>
    
    </>
  )
}

export default App
