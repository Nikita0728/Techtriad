import express from 'express'
import connectDB from './database/db.js'
import  loginentry from './database/Controller/Login.js'
import add from './database/Controller/Addcomplain.js'
import adddataModel from './database/Schema/Mapschema.js'
import cors from 'cors'
import Signinmodel from './database/Schema/SigninModel.js'
import { signinentry } from './database/Controller/Signin.js'
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())
app.listen(port, () => {
  console.log('Server is running on port port')
})

connectDB()
app.post('/loginentry', async(req, res) => {
  // loginentry(req.body)
  // res.send('ADDED')
 const {Name, Password} = req.body

  try{
    const user = await Signinmodel.findOne({Name})
    console.log("im user",user)
    if(!user)
    {
        console.log("error name")
        return res.status(404)
    }
    const psw = user.Password === Password
    // const psw  = bcrypt.compare(Password, user.Password)
    if(!psw)
    {
        console.log("error psw")
        return res.status(400).send("user not found")
    
}
console.log("user found")
    return res.status(200).send("User found")
  
 
}
 
catch(error)
{
    return res.json({"message":"Error finding username and password"})
}
  
})

  

app.post('/add', (req,res)=>{
  console.log("server hitted")
  const{ Complain }=req.body
  console.log("im complain",Complain)
  add(req.body)
  res.set('ADDED')
})

app.post('/getdata', async(req,res)=>{
  
  const data =  await adddataModel.find()
  // console.log("im data",data)
  return res.json(data)

}

)


app.post('/signup' , (req,res)=>{
  console.log("from signin",req)
    signinentry(req.body)
  return res.status(200).send("added")
})