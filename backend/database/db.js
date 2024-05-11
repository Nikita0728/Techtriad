import mongoose from 'mongoose';
const uri="mongodb+srv://bhattaraisushma260:YkdX49QF0fnfe6GW@cluster0.atprhwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
 const connectDB = async () => { 
try{
     await mongoose.connect(uri)
    .then(()=>{
        console.log('Database connected')
    })
}
catch(err){
    console.log("cannot connect to db",err)
 }
}
export default connectDB;