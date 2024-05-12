import React from 'react'
import about from '../../assets/about2.png'
import './About2.css'

export const About2 = () => {
  return (
    <div id='abt'>
    <div className='about'>
    <hr/>

        <div className="div-left">
                <img src={about} alt='' className='about-img'/>
                
        </div>
        <div className="div-right">
            <h3>Niwaran</h3>
            <h2>What if we could tap the problems away?</h2><br/>
            <p>We leverage data analytics to identify trends, prioritize issues, and allocate resources efficiently. By analyzing community feedback and engagement, we empower decision-makers to make informed choices that directly impact the well-being of our neighborhoods.</p><br/>
            <p>Niwaran was born out of a shared desire to make a difference in our community. Inspired by personal experiences and a deep commitment to social impact, our founders set out to create a platform where people could unite to tackle local issues head-on.</p><br/>
            <p>By providing a user-friendly interface and robust features, we aim to facilitate transparent communication</p><br/>
            <p> Users can easily submit various issues affecting their community, whether it's a pothole on the street, a broken streetlight, or a larger systemic problem. </p><br/>
            <p>Looking ahead, we envision [Website Name] becoming the go-to platform for community problem-solving worldwide. By continuing to innovate, expand, and engage with our users, we're confident that we can make a meaningful difference in the lives of even more people.</p><br/>

        </div>
       
            

       
         

    </div>
    
     </div>
  )
}
