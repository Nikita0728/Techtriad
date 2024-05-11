import './About.css'
import Button from 'react-bootstrap/Button';
import dark_arrow from '../../assets/dark-arrow.png'

export const About= () => {
  return (
    <div className='body1  'id='home'>
        <div className='para'>
                 <h1> One community, many solutions</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque dolorum sapiente voluptatum, veritatis obcaecati nihil. Nesciunt illo fugit id, laborum quia itaque error quaerat, perspiciatis voluptate ratione optio doloribus asperiores tempore fuga qui.
                 </p>
                 <div className='up-btn'>
                 <Button className='btn-exp'>Get Started<img src={dark_arrow}></img></Button>
                 </div>
                
                
                 </div>
                 <hr/>

                 
    </div>
  )
}