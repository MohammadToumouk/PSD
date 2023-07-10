import { useState } from "react";
import pexdelp from "../../assets/pexdelp.png";
import pexels1 from "../../assets/pexels1.png";
import pexelsbike from "../../assets/pexelsbike.png";
import rectangle from "../../assets/rectangle.png";

// import bootstrap from "bootstrap";
// import { withStyles } from "@material-ui/core/styles";
import "./Blog.css";
function Blog() {
  return (
    <>
      <div className="video-container">
        <div className="black-bg">
          <h2 className="videoPar">
            "It`s not about fitting in... it`s about you, your ride, your
            journey."
          </h2>
          <div className="videoTitle">
            <h2>Featured Video</h2>
            <hr />
          </div>
        </div>
        <div className="videoSection">
          <div className="videoDesc">
            <p>
              styled to look as though they could head to Kathmandu without
              bothering with roads, these are bikings equivalent of the Range
              Rover. But here is the irony: they are fantastic road bikes, but
              are actually pretty frightening off road because they are so
              heavy.
            </p>
            <button className="viewVideos-btn">View More Videos</button>
          </div>

          <div className="playBtn">Play</div>
        </div>

        <div className="blog">
          <div className="title">
            <h2 className="blogTitle">Latest Blog</h2>
            <hr />
          </div>

          <div className="card-group">
            <div className="cards">
              <div className="card1">
                <img
                  src={pexelsbike}
                  className="card-img-top"
                  alt="parked motorbikes"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <hr />
                  <div className="cardInfo">
                    <div className="carddate">12 October 2015</div>
                    <div className="cardComment">Comments</div>
                  </div>
                </div>
              </div>

              <div className="card1">
                <img
                  src={pexels1}
                  className="card-img-top"
                  alt="Fissure in Sandstone"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <hr />
                  <div className="cardInfo">
                    <div className="cardInfo">
                      <div className="carddate">12 October 2015</div>
                      <div className="cardComment">Comments</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card1">
                <img
                  src={pexdelp}
                  className="card-img-top"
                  alt="two people on a bike"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <hr />
                  <div className="cardInfo">
                    <div className="cardInfo">
                      <div className="carddate">12 October 2015</div>
                      <div className="cardComment">Comments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
