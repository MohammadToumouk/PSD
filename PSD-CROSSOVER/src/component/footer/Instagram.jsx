import png1 from "./Bild/png1.png";
import png2 from "./Bild/png2.png";
import png3 from "./Bild/png3.png";
import png4 from "./Bild/png4.png";
import png5 from "./Bild/png5.png";
import png6 from "./Bild/png6.png";
import png7 from "./Bild/png7.png";
import png8 from "./Bild/png8.png";
import png9 from "./Bild/png9.png";
import png10 from "./Bild/png10.png";
import { MyFooter } from "./footer";
import './footer.css'



export function Instagram () {
    
    return(
        <>
        <h1>Instagram</h1>
        <div className="bilder">
            <img src={png1} alt="" />
            <img src={png2} alt="" />
            <img src={png3} alt="" />
            <img src={png4} alt="" />
            <img src={png5} alt="" />
            <img src={png6} alt="" />
            <img src={png7} alt="" />
            <img src={png9} alt="" />
            <img src={png8} alt="" />
            <img src={png10} alt="" /> 
        </div>
        <MyFooter/>
        </>

    )
}