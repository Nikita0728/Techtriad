import express from 'express'
import connectDB from './database/db.js'

const app = express()
const port = 3000

app.listen(port, () => {
  console.log('Server is running on port port')
})

connectDB()