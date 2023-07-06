import React from "react";
import "../styles/OurTeam.css";
import pf1 from "../assets/profile-img-1.png";
import pf2 from "../assets/profile-img-2.png";
import pf3 from "../assets/profile-img-3.png";
const OurTeam = () => {
  return (
    <section>
      <div class="row">
        <h1>Our Team</h1>
      </div>
      <div class="row">
        {/* <!-- Column 1--> */}
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={pf1} />
            </div>
            <h3>Luna Turner</h3>
            <p>Founder</p>
            {/* <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
              <a href="#">
                <i class="fas fa-envelope"></i>
              </a>
            </div> */}
            <div className="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut impedit ipsa vitae! Maiores voluptatem doloribus nemo reprehenderit. Cumque, rem voluptatem?
            </div>
          </div>
        </div>
        {/* <!-- Column 2--> */}
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={pf2} />
            </div>
            <h3>Bryant Hall</h3>
            <p>Developer</p>
            <div className="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut impedit ipsa vitae! Maiores voluptatem doloribus nemo reprehenderit. Cumque, rem voluptatem?
            </div>
          </div>
        </div>
        {/* <!-- Column 3--> */}
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={pf3} />
            </div>
            <h3>Hope Watkins</h3>
            <p>Designer</p>
            <div className="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut impedit ipsa vitae! Maiores voluptatem doloribus nemo reprehenderit. Cumque, rem voluptatem?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
