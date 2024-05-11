import React from 'react'
import msg_icon from '../../assets/msg-icon.png'
import email_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import './Contact.css'
export const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4c821fdc-a11f-4dae-8423-65f2881f0ab9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); //reset the data from the form
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
 <>
 {/* <hr/> */}
<div className=' new div-right'>
  <hr/>
 <h3>Contact Us</h3>        </div>

 <div className="contact">
    
        <div className="contactcol">
            <h5> Send us a message. <img src={msg_icon}/></h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex obcaecati optio pariatur facilis molestiae, officiis ducimus. Dolor, delectus fugit!</p>
            <ul>
                <li><img src={email_icon}/>xyz@blablabla.dev</li>
                <li><img src={phone_icon}/>+1 234-456-7890</li>
                <li><img src={location_icon}/>123, Main Street, New York, USA</li>
            </ul>
        </div>
        <div className="contactcol">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required></input>
            <label>Your email</label>
            <input type='mail' name='mail' placeholder='Enter your email' required/>
            <label>Your contact-no</label>

            <input type='tel'name='phone' placeholder='Enter your contact number' required/>
            <label>Your message</label>
           <textarea name='msg' rows ='6' col='10' placeholder='Enter your message'required></textarea>
           <button type='submit' className='see-more-button'> Submit now<img src={white_arrow}/></button>
            </form>
            <span>{result}</span>
        </div>
        </div>
    </>
  )
}
