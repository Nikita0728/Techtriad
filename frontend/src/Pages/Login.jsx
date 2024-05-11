
import react from "react";
import { Button } from "@/Components/ui/button";
import React from 'react'

const Login = () => {
  return (
    <div className="h-screen w-screen flex  justify-center items-center ">
      <div className=" flex flex-col w-fit  gap-8 h-fit bg-red-600  p-5">
        <input type="text" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
    <Button variant="outline" >Button</Button>
    </div>
    </div>
  )


}

export default Login
