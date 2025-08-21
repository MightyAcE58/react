import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [lenght, setlenght] = useState(8)
  const [number, setnumber] = useState(false)
  const [char, setchar] = useState(false)
  const [password, setpassword] = useState("")

  const passwordRef = useRef(null)

  const Generator = useCallback(()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMONPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str+="1234567890"

    if (char) str+="!@#$%^&*"

    for (let i = 1; i <= lenght; i++) {

      const randomIndex = Math.floor(Math.random() * str.length)

      pass += str[randomIndex]
      
    }
    setpassword(pass)


  },
  [ lenght,number,char,setpassword ])

  const copyClipBoard= useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  })


  useEffect(()=>{
    Generator()

  },[ lenght,number,char,Generator ])


  

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black bg-gray-500'>
      <h1 className='text-white text-3xl text-center'>Password Generator</h1>
    
    <div className='flex rounded-lg overflow-hidden mb-6 mt-4 '>
      <input
       type="text" value={password} placeholder='password' readOnly 
       className='outline-none  w-full py-1 px-3 mb-3 bg-white
       '
      />
      <button
       className='bg-blue-300 outline-none py-1 px-3 mb-3 shrink-0 cursor-pointer'
       onClick={copyClipBoard}
      > copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>

    <div className='flex items-center gap-x-2'>
      <input
       type="range" 
       min={6}
       max={20}
       value={lenght}
       className='cursor-pointer'
       onChange={(e)=>{setlenght(e.target.value)}}
       />
       <label className='text-white'
       > Lenght:{lenght}
       </label>
    </div>

    <div className='flex items-center gap-x-1'>
      <input
       type="checkbox"
       defaultChecked={setnumber}
       onChange={()=>{
        setnumber((prev)=>!prev);
       }}
       />
       <label className='text-white'>
        Numbers
       </label>
    </div>

    <div className='flex items-center gap-x-1'>
      <input
       type="checkbox"
       defaultChecked={setnumber}
       onChange={()=>{
        setchar((prev)=>!prev);
       }}
       />
       <label className='text-white'>
        Characters
       </label>
    </div>

    </div>

    </div>
    </>
  )
}

export default App
