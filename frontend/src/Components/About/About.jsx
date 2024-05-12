import './About.css'
import Button from 'react-bootstrap/Button';
import dark_arrow from '../../assets/dark-arrow.png'

export const About= () => {
  return (
    <div className='body1  'id='home'>
        <div className='para'>
                 <h1> One community, many solutions</h1>
                 <p>Turning complaints into resolution one tap at a time.
                 </p>
                 <div className='up-btn'>
                 <Button className='btn-exp one'>Get Started as a administrator <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></Button>
                 <Button className='btn-exp'>Get Started as a local <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></Button>
                 </div>
                
                
                 </div>
                 <hr/>

                 
    </div>
  )
}