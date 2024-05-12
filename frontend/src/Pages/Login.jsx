
import react, { useState } from "react";
import { Button } from "@/Components/ui/button";
import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  const[name ,setname]=useState()
  const [psw, setpsw] = useState()
  const  adddata=async()=>{
    console.log("I am in adddata clicked")
try{
     await axios.get('http://localhost:3000/loginentry', {
      Name: name,
      Password: psw
    }).then(
      (res) => {
        console.log("added to db",res)
        if(res.status==200)
          {
           console.log("I am respinse" )
           navigate('/map')

          }
    }
   

    )
 
  }
  
  catch(error)
  {
    console.log("cannot add data to db",error)
  }
}

  return (
    <div className="h-screen w-screen flex  justify-center items-center  ">
      <div className=" flex flex-col w-fit  gap-8 h-fit  bg-red-500 p-5">
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter your email" />
        <input type="password" value={psw}  onChange={(e)=>setpsw(e.target.value)} placeholder="Enter your password" />
    <Button variant="outline" onClick={()=>{adddata()}} >Submit</Button>
    </div>
    </div>
  )


}

export default Login
