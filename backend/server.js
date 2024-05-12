import express from 'express'
import connectDB from './database/db.js'
import  loginentry from './database/Controller/Login.js'
import add from './database/Controller/Addcomplain.js'
import adddataModel from './database/Schema/Mapschema.js'
import cors from 'cors'
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())
app.listen(port, () => {
  console.log('Server is running on port port')
})

connectDB()
app.get('/loginentry', (req, res) => {
  loginentry(req.body)
  res.send(200)
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
  console.log("im data",data)
  return res.json(data)

}

)
