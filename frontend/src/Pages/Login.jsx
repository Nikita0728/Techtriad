
import react, { useState } from "react";
import { Button } from "@/Components/ui/button";
import React from 'react'
import axios from "axios";

const Login = () => {
  const[name ,setname]=useState()
  const [psw, setpsw] = useState()
  const  adddata=async()=>{
try{
     await axios.get('http://localhost:3000/loginentry', {
      Name: name,
      Password: psw
    }).then(
      (res) => {
        console.log("added to db",res)
    }

    )
  }
  catch(error)
  {
    console.log("cannot add data to db",error)
  }
}

  return (
    <div className="h-screen w-screen flex  justify-center items-center ">
      <div className=" flex flex-col w-fit  gap-8 h-fit bg-red-600  p-5">
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter your email" />
        <input type="password" value={psw}  onchnage={(e)=>setpsw(e.target.value)} placeholder="Enter your password" />
    <Button variant="outline" onclick={()=>{adddata()}} >Button</Button>
    </div>
    </div>
  )


}

export default Login
