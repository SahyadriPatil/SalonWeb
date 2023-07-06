import React, { useState } from "react";
import "../styles/About.style.js";
import Img from "../assets/about.jpg";

import {
  AboutContainer,
  AboutUs,
  Main,
  Image,
  AllText,
  Button,
  ButtonContainer,
} from "../styles/About.style.js";
import Footer from "./Footer.jsx";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import OurTeam from "./OurTeam.jsx";
const About = () => {
  const [showContent, setShowContent] = useState(false);
  const [showPeople, setShowPeople] = useState(false);
  const handleShowMore = () => {
    setShowContent(!showContent);
  };
  const navigate = useNavigate();
  const handleContactUs = () => {
    navigate('/contact');
  };
  return (
    <>
      <AboutContainer>
        <AboutUs>
          <Main>
            <Image src={Img} alt="" />
            <AllText>
              <h4>About Us</h4>
              <h1>Here is Our History of Mauli Salon n Spa</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                corrupti mollitia accusantium dolorum necessitatibus error,
                deserunt ipsam totam doloremque provident labore quod
                consequatur fugiat? Vitae atque voluptates perspiciatis
                provident libero eaque eius nobis excepturi magnam. Quis quidem
                neque ex a delectus aperiam quo, quos corporis impedit adipisci
                perferendis veritatis quod.
              </p>
              {showContent && (
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                  vero fuga iure necessitatibus et quis beatae sint, provident
                  temporibus, harum aut voluptatem earum minus totam laudantium
                  architecto mollitia officiis ab recusandae ea. Dolorum,
                  facilis asperiores quia, distinctio officiis fugiat corrupti
                  quam nisi veniam soluta, quae nobis ex perferendis explicabo
                  illum?
                </p>
              )}
              <ButtonContainer>
                <Button onClick={handleContactUs}>Contact Us</Button>
                <Button className="btn2" onClick={handleShowMore}>
                  Show More
                </Button>
              </ButtonContainer>
              
            </AllText>
          </Main>
        </AboutUs>
      </AboutContainer>
      <OurTeam/>
      <Footer />
    </>
  );
};

export default About;
