

import Loginmodel from '../Schema/Loginschema.js'

 const loginentry=async( reqdata )=>{
    // const saltRounds = 10;

    const {Name,Password}=reqdata
    // const hash_psw= await bcrypt.hash(Password,saltRounds)
    // console.log(hash_psw)
    // reqdata.Password=hash_psw;
    // console.log(Password)
    console.log(reqdata)
    const logindetail= new Loginmodel({
        Name:Name,
        
        // Contact:Contact,
        Password:Password,
      
       
    
            
        })
        try{
            const data= await logindetail.save()
            console.log("Successfully saved data")
        }
        catch(error)
        {
            console.log("Unsuccessful",error)
        }
      
      
        
       
}
export default loginentry
