import { Button } from '@/Components/ui/button'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
const [confirmpassword, setConfirmpassword] = useState('')
const navigate=useNavigate()

  const handleclick=async()=> {
    console.log(email, name, password)
   if (name=="" || password=="" || email=="" || confirmpassword=="")
    {
      alert("Please fill your details")
    }
    else{
      if(password!=confirmpassword)
      {
        alert("Password and confirm password should be same")
      }
      else{
      try{

let postData =await axios.get('http://localhost:3000/signup',
  {  Name: 'hello', 
    Email: 'email', 
    Password: 'assword' }
)
.then(()=>{
  console.log("added to db")
  navigate('/map')
})
.catch((error)=>{
  console.log("cannot add data to db",error)
})
    }
    
    catch(error){
      console.log("cannot add data to db",error)
    
    }
  }
    }
}

  
  return (
    <div className='flex justify-center items-center '>
    <div className=' flex flex-col gap-4  w-fit'>
    <input type="text" placeholder="Enter your email"  onChange={(e)=>setEmail(e.target.value)} style={{ border: '1px solid black', borderRadius: '4px', padding: '8px', background: 'transparent', color: 'black' }} />
   <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} style={{ border: '1px solid black', borderRadius: '4px', padding: '8px', background: 'transparent', color: 'black' }} />
    <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} style={{ border: '1px solid  black', borderRadius: '4px', padding: '8px', background: 'transparent', color: 'black' }} />
  <input type="password" placeholder="Confirm your password" onChange={(e)=>setConfirmpassword(e.target.value)} style={{ border: '1px solid  black', borderRadius: '4px', padding: '8px', background: 'transparent', color: 'black' }} />
   <Button className='text-white bg-red-600' onClick={handleclick} > Signin</Button>
    </div>
    </div>
  )
}

export default Signup

