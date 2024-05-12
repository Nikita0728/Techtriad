
import react, { useState } from "react";
import { Button } from "@/Components/ui/button";
import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Signup from "./Signup";

const Login = () => {
  const navigate=useNavigate()
  const[name ,setName]=useState()
  const [psw, setPsw] = useState()


  const  adddata=async()=>{
    console.log("I am in adddata clicked")
    
try{
     const found= await axios.post('http://localhost:3000/loginentry', {
      Name: name,
      Password: psw
    })
    if(found.status==200)
      {
       console.log("I am respinse" )
      navigate('/map')

      }
      else {
        alert("User not found")
      }
    

  }
  
  catch(error)
  {
    console.log("cannot add data to db",error)
  }
}


const gotosignin=()=>{
  console.log("clicked go to signin")
  navigate('/signup')

}
  return (
    <div className="h-screen w-screen flex  justify-center items-center  bg-[#f2f4f7] ">
 <div className="flex flex-col w-fit gap-8 h-fit bg-[#ffffff] p-5" style={{ boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}>
   <div>Welcome back to Niwaran</div>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your email" style={{ border: '1px solid black', borderRadius: '4px', padding: '8px', background: 'transparent', color: 'black' }} />
   
    <input type="password" value={psw} onChange={(e) => setPsw(e.target.value)} placeholder="Enter your password" style={{ border: '1px solid  black', borderRadius: '4px', padding: '8px', background: 'transparent', color: 'black' }} />
    <div className="flex flex-row gap-2 items-center"><FcGoogle /><p>Login with google</p></div>
    <Button variant="outline" onClick={() => { adddata() }} className="bg-red-600 text-white" >Submit</Button>
    <button className="underline" onClick={()=>{gotosignin()}}>Doesn't have account?</button>
</div>
{/* <Signup/> */}
    </div>

  )


}

export default Login
