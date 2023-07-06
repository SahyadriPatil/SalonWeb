import React, { useState } from "react";

import Forher from "../services/Forher";
import Forhim from "../services/Forhim";
const Services = () => {
  //   const [isHoveringher, setIsHoveringher] = useState(false);
  //   const [isHoveringhim, setIsHoveringhim] = useState(false);
  // const handleMouseOver = () => {
  //     setIsHoveringher(true);
  //     setIsHoveringhim(false)
  //   };

  //   const handleMouseOut = () => {
  //     setIsHoveringher(false);
  //     setIsHoveringhim(true);
  //   };

  return (
    <>
      <div className=" back">
        <div className="one">
          <h1 className="heading">SERVICES</h1>
        </div>
        <div className=" cardhead">
          <h2> What Our Magicians Can Do For You</h2>
        </div>
        <div className="cardhead">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut id
            voluptatum vel reprehenderit voluptate qui atque numquam nostrum.
            Omnis dicta aliquam fugit incidunt commodi vel dolorum repudiandae
            quas facere magni.
          </p>
        </div>

        <div class="btn1">
          {/* <button className='btn2' type="button">SERVICES FOR HER</button>
    <button className='btn2' type="button">SERVICES FOR HIM</button> */}
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
          />
          <label class="btn btn-outline-primary" for="btnradio1">
            {" "}
            <a href="/services/her" class="btn btn-primary">
              SERVICES FOR HER
            </a>
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autocomplete="off"
          />
          <label class="btn btn-outline-primary" for="btnradio2">
            <a href="/services/him" class="btn btn-primary">
              SERVICES FOR HIM
            </a>
          </label>
        </div>

        {/* <div className='drop'>
  {isHoveringher  && (
    <div className='one1'>
      <Forher/> 
    </div>
  )} */}
        {/* </div>
  <div className='drop'>
  {isHoveringhim  && (
    <div className='one1'>
      <Forhim/> 
    </div>
  )} */}
      </div>
    </>
  );
};

export default Services;
