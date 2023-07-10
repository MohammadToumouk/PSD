import LOGO from "./Bild/LOGO.png";
import gps from "./Bild/gps.png";
import telefon from "./Bild/telefon.png";
import Email from "./Bild/Email.png";
import Facebook from "./Bild/Facebook.png";
import Twitter from "./Bild/Twitter.png";
import Instagram from "./Bild/Instagram.png";
import Youtube from "./Bild/Youtube.png";
import './myfooter.css'

export function MyFooter () {
    
    return(
        <>
        <section className='container-foot'>
            <div className="Acount">
                <h2>Newsletter Signup</h2>
                <p>Signup to get the latest news...</p>
                <div>
                    <input type="email" placeholder="Your Email Addresse" />
                    <button>OK</button>
                </div>
            </div>

            <div id="Logo">
                <img src={LOGO} alt="" />
            </div>

            <div className="contact">
                <h2>Contact Us</h2>

                    <div className="info">                     
                        <div className="contact-me">
                        <img src={gps} alt="gps" />
                        <p>2701 RIVERSIDE DR SUITE N0813 <br /> OTTAWA</p>
                        </div>

                        <div className="contact-me">
                        <img src={telefon} alt="" />
                            <p>+971005555150
                                <br />
                                +97116699898
                            </p>
                        </div>

                        <div className="contact-me">
                        <img src={Email} alt="" />
                            <p>info@templatesjugle.com</p>
                        </div>
                        
                    </div>
            </div>

        <div className="socialmedia">
            <a href="#"><img src={Facebook} alt="" /></a>
            <a href="#"><img src={Twitter} alt="" /></a>
            <a href="#"><img src={Instagram} alt="" /></a>
            <a href="#"><img src={Youtube} alt="" /></a>
        </div>

        <div id="copy">
            <p>&copy; Copyright 2022 Templates Jungle L.L.C. All Rights Reserved.</p>
        </div>

    
        </section>

        </>
    )
}