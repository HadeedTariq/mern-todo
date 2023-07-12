import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Form = ({login,signup}) => {
  const navigate=useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",

  })
  const [err,setErr]=useState("")
  const submitCredentials = async (e,url) => { 
    e.preventDefault()
    try {
      await axios.post(`http://localhost:5000/user/${url}`,user)
      localStorage.setItem('todo-user',JSON.stringify(user))
      navigate('/')
    } catch (error) {
      setErr(error.response.data.message)
    }
  }
  return (
    <div className='flex py-3 px-5 w-72 h-fit rounded-md bg-zinc-800 text-white'>
      <form onSubmit={(e)=>submitCredentials(e,login?'auth':"register")} className='w-full flex flex-col gap-1'>
       {!login && <label>Name</label>}
        {!login &&<input type="text" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} name="name" className='border-none py-0.5 px-2 text-base w-full outline-none text-black'/>}
        <label>Email</label>
        <input type="text" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} name="email" className='border-none py-0.5 px-2 text-base w-full outline-none text-black'/>
        <label>Password</label>
        <input type="text" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} name="password" className='border-none py-0.5 px-2 text-base w-full outline-none text-black'/>
        {err&&<h3 className='mt-1 text-base text-red-500 font-bold'>{err}</h3>}
        <button type='submit' className='my-2 bg-teal-600 py-1 px-4 text-base font-semibold rounded-md'>{login?login:signup}</button>
      </form>
    </div>
  )
}

export default Form