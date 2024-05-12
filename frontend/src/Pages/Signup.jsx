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

let postData =await axios.post('http://localhost:3000/signup',
  {  Name: name, 
    Email: email, 
    Password: password
   }
);if(postData)
  {
    console.log("I am respinse" )
    navigate('/map')
  }

    }
   
    catch(error){
      console.log("cannot add data to db",error)
    
    }
  }
    }
}

  
  return (
    <div className='h-screen w-screen flex  justify-center items-center  bg-[#f2f4f7] '>
    <div className=' flex flex-col gap-4  h-fit w-[24rem]   p-5  'style={{ boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}>
    <div>Welcome to Niwaran</div>
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

