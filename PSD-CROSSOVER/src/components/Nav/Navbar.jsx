import './Navbar.css'
import logoImage from '../../Images/Logo.png';
const Navbar = () => {

    return(
        <nav className='NavigationBar'>
            <ul className='list'>
                <li>Home</li>
                <li>Our Team</li>
                <li>partner and Merchendais</li>
                <li>
                <li>
                <img src='https://seeklogo.com/images/H/Harley-Davidson-logo-EF01293DA4-seeklogo.com.png' width={"150px"} />
                </li>
                </li>
                <li>SHOWROOM</li>
                <li>BLOG</li>
                <li>Contact and Media</li>
            </ul>
        </nav>
    )
}
export default Navbar