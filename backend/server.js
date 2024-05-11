import express from 'express'
import connectDB from './database/db.js'
import  loginentry from './database/Controller/Login.js'
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
})