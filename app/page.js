"use client"
import React, { useState } from 'react'

const Header = () => {
  const [tittle, settittle] = useState("")
  const [des, setdes] = useState("")
  const [maintask, setmaintask] = useState([]);

  const submithandler = (e) =>{
    e.preventDefault()
    setmaintask([...maintask , {tittle,des}])
    settittle("")
    setdes("")
    console.log(maintask)
  }
  const deletehandller = (i)=>{
    let copytask =[...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
    
  }
  let rendertext = <h4>No tasks right now </h4>;
  if (maintask.length>0) {
    rendertext = maintask.map((a,i) => {
      return(
        <li className="flex justify-between mb-2 py-3 px-3 border rounded-xl bg-slate-200">
  
        
        <div className='flex justify-between w-2/3'>
          <h4 className="text-2xl text-bold-800">{a.tittle}</h4>
          <h5 className="text-xl text-semibold-800">{a.des} </h5>
        </div>
        <div >
        <button className="bg-green-500 mx-1 px-2 py-2 text-xs text-white">completed</button>
        <button className="bg-red-400  mx-1 px-2 py-2 text-xs text-white"
        onClick={(i)=>{
          deletehandller()
        }}
        >delete</button>
        </div>
        
        </li>
      )
    })
   
  } else {
      
  }



  return (
   <>
    <h1 className="px-3 py-2 bg-blue-800 text-white text-6xl text-center align-middle font-bold ">My ToDO list</h1>
   
    <div className='flex flex-1 justify-center'>
   <form className=" flex flex-col align-middle items-center my-5 px-3 py-4 border rounded-xl shadow-xl" onSubmit={submithandler}>
    <input type='text' className="bg-slate-100 rounded mx-5 my-3 px-2 py-2 block"
   placeholder='your task'
   value={tittle}
   onChange={(e)=>{
    settittle(e.target.value)
   
   }}
   />
    <input type='text' className="bg-slate-100 rounded mx-5 my-3 px-2 py-2 text-wrap block h-8"
    placeholder='description'
    value={des}
    onChange={(e)=>{
      setdes(e.target.value)
    
    }}
    />

    <button className="bg-green-700 text-white text-bold px-2 py-2 rounded border-white-2">Add task</button>
   </form>
   
   </div>
   <hr/>
   <div className=' px-4 py-4'>
    <ul className=''>
   {rendertext} 
    </ul>
   </div>
   </>
  )
}

export default Header
