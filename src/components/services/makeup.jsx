import React from "react";
import { useEffect, useRef, useState } from "react";
import img1 from "../../assets/hair.jpg";
import "../../styles/services/makeup.css";
import ImageSlider from "../ImageSlider";
const Makeup = () => {
  let [scrollcard, setscrollcard] = useState(0);
  const containerRef = useRef();

  const handlescrollLeft = () => {
    containerRef.current.scrollLeft -= 500;
  };

  const handlescrollRight = () => {
    containerRef.current.scrollLeft += 500;
  };
  return (
    <>
      <div className="makeuphead">
        <div className="one">
          <h1 className="heading">MAKEUP SERVICES....!</h1>
        </div>
        <h2>Make your face the center of attraction.....</h2>
        <section className="card-slider-conatiner">
          <div className="main-slider-contianer">
            {/* <button className="slider-icon left" onclick={(e)=>handlescrollLeft(e)}> left</button> */}
            <div
              className="slider"
              style={{ scrollLeft: scrollcard }}
              ref={containerRef}
            >
              {
                <>
                  <div className="slider-card">
                    <div className="ho">
                      <img
                        className="slider-card-image hover"
                        src={img1}
                        alt=""
                      />
                    </div>
                    {/* <div className="slider-card-image"  style={{backgroundImage:{img1}}}> </div> */}
                    <p className="slider-card-title"> card title </p>
                    <p className="slider-card-description">
                      {" "}
                      card description{" "}
                    </p>
                  </div>

                  <div className="slider-card">
                    <img className="slider-card-image" src={img1} alt="" />
                    <p className="slider-card-title"> card title </p>
                    <p className="slider-card-description">
                      {" "}
                      card description{" "}
                    </p>
                  </div>
                  <div className="slider-card">
                    <img className="slider-card-image" src={img1} alt="" />
                    <p className="slider-card-title"> card title </p>
                    <p className="slider-card-description">
                      {" "}
                      card description{" "}
                    </p>
                  </div>
                  <div className="slider-card">
                    <img className="slider-card-image" src={img1} alt="" />
                    <p className="slider-card-title"> card title </p>
                    <p className="slider-card-description">
                      {" "}
                      card description{" "}
                    </p>
                  </div>
                  <div className="slider-card">
                    <img className="slider-card-image" src={img1} alt="" />
                    <p className="slider-card-title"> card title </p>
                    <p className="slider-card-description">
                      {" "}
                      card description{" "}
                    </p>
                  </div>
                  <div className="slider-card">
                    <img className="slider-card-image" src={img1} alt="" />
                    <p className="slider-card-title"> card title </p>
                    <p className="slider-card-description">
                      {" "}
                      card description{" "}
                    </p>
                  </div>
                  <div className="slider-card">
                    <img className="slider-card-image" src={img1} alt="" />
                    <p className="slider-card-title"> card title </p>
                    <p className="slider-card-description">
                      {" "}
                      card description{" "}
                    </p>
                  </div>
                </>
              }
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Makeup;
