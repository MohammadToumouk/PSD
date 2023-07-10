import "mdb-ui-kit/css/mdb.min.css";
import "./GridSection.css";
import logo from "./assets/logo.png";

const GridSection = () => {
    return (
        <div className="container">
            {/* <div class="grid">
                <div class="g-col-6">
                    <img
                        src="assets/pexels-rachel-claire-4577448.png"
                        alt="ourteam image"
                    />
                </div>
                <div class="g-col-6 ">.g-col-6</div>
                <div class="g-col-6">.g-col-6</div>
                <div class="g-col-6">.g-col-6</div>
            </div> */}
            <div>
                <div class="grid-container-team">
                    <div class="grid-item-team ourTeam">our team</div>
                    <div class="grid-item-team">workshops</div>
                    <div class="grid-item-team">custom builds</div>
                    <div class="grid-item-team serviceAndRepair">
                        Service & Repair
                    </div>
                    <div className="logo-middle">
                        <img
                            src={logo}
                            alt="Logo"
                            className="logo-middle-img"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div class="grid-container-cards">
                    <div class="grid-item-cards img1"></div>
                    <div class="grid-item-cards">Great cafe racer</div>
                    <div class="grid-item-cards img2"></div>
                    <div class="grid-item-cards">Yamaha X10000</div>
                    <div class="grid-item-cards img3"></div>
                    <div class="grid-item-cards">Custom made scrambler</div>
                    <div class="grid-item-cards">
                        2021/2022 motorcycle gears and wears
                    </div>
                    <div class="grid-item-cards img4"></div>

                    <div class="grid-item-cards">Custom made scrambler</div>
                    <div class="grid-item-cards img5"></div>

                    <div class="grid-item-cards">Cool Jewellery For Bikers</div>
                    <div class="grid-item-cards img6"></div>
                </div>
            </div>
            <div className="aboutUs">
                <div className="aboutUsInline">
                    <hr className="inlineHr" />
                    <h2>About Us</h2>
                    <hr className="inlineHr" />
                </div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum deleniti nisi, quasi, alias aliquid dolorum maiores
                    ipsa ut iste soluta, possimus earum obcaecati voluptatum vel
                    nesciunt inventore omnis. Totam perferendis vitae laborum
                    nesciunt quis magnam nihil! Soluta cumque quis asperiores
                    saepe non aliquid.
                </p>
            </div>
        </div>
    );
};

export default GridSection;
