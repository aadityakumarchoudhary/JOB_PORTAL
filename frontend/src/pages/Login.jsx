
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const submit=(e)=>{
    e.preventDefault()
    toast.success('Login Successful')
  }

  return(
    <form onSubmit={submit} className="p-10 flex flex-col gap-4 max-w-md mx-auto">
      <input placeholder="Email" className="p-3 text-black" onChange={(e)=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" className="p-3 text-black" onChange={(e)=>setPassword(e.target.value)} />
      <button className="bg-blue-600 p-3 rounded">Login</button>
    </form>
  )
}
