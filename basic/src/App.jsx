import './App.css'
import { useState } from 'react'
import Card from './components/Card'


function App() {

  let userDetail={
    userName:"Vinay",
    userProf:"SDE",
    userNote:"DevOps asprient and DSA Paglu",
  }


 
  return (
  <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test </h1>
  <Card userDetail={userDetail}></Card>
  </>
  )
}

export default App
