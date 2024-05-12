import './About.css'
import Button from 'react-bootstrap/Button';
import dark_arrow from '../../assets/dark-arrow.png'
import { useContext } from 'react';
import Context from '@/ContextAPI/Contextprovider';
import { useNavigate } from 'react-router-dom';
import { Contact } from '../Contact/Contact';



export const About= () => {
  const navigate=useNavigate()
  const {officer,setOfficer}=useContext(Context)
  const Adminitrator=()=>{
    setOfficer(true)
    console.log("clicked")
    navigate('/login')

console.log("officer",officer)
  }
  const localpep=()=>{
    setOfficer(false)
    navigate('/login')

console.log("officer",officer)
  }
  return (
    <div >
    <div className='body1 h-screen   'id='home'>
        <div className='para'>
                 <h1> One community, many solutions</h1>
                 <p>Turning complaints into resolution one tap at a time.
                 </p>
                 <div className='up-btn'>
                 <Button className='btn-exp one' onClick={Adminitrator}>Get Started as a administrator<img src={dark_arrow}></img></Button>
                 <Button className='btn-exp' onClick={localpep}>Get Started as a local<img src={dark_arrow}></img></Button>
                 </div>
                
                
                 </div>
                 <hr/>

                   
    </div>
    <Contact/> 

    </div>
  )
}