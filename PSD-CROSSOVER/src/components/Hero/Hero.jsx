import './Hero.css'
import Navbar from '../Nav/Navbar'

const Hero = () => {

    return(
        <div class="container">
            <div className='hero'>
            <Navbar />
            <div className='HeroText'>
            <h1>Classic</h1>
            <h1>Magnum Street <br/> Fighter Build custom</h1>
            <button class="button-31" role="button">VIEW MORE</button>
            </div>
            </div>
       
        </div>
    )
}
export default Hero