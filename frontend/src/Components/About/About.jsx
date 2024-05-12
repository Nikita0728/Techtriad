import './About.css'
import Button from 'react-bootstrap/Button';
import dark_arrow from '../../assets/dark-arrow.png'
import { useContext } from 'react';
import Context from '@/ContextAPI/Contextprovider';
import { useNavigate } from 'react-router-dom';import { About2 } from '../About2/About2';
import { Contact } from '../Contact/Contact';

export const About= () => {
  const navigate=useNavigate()
  const {officer,setOfficer}=useContext(Context)
  const Adminitrator=()=>{
    console.log("clicked")
    navigate('/login')
setOfficer(true)
  }
  const localpep=()=>{
    navigate('/login')
setOfficer(false)
  }
  return (
    <>
    <div className='body1  'id='home'>
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
    <About2/>
    <Contact/>

    </>
  )
}