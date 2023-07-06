import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BackGround,
  IntroContainer,
  Text,
  MobileText,
  TabletText,
  Introduction,
  Image,
  ImageGallery,
  ImgCart,
  Row,
  Column,
  Img,
  Portfolio,
  Container,
  SubTitle,
  WorkList,
  Work,
  LayerImage,
  Layer,
  LayerHeading,
  LayerContent,
  Button,
  ButtonContainer,
  ImageSliderContainer,
  ImageSlider,
  WhyUsContainer,
  WhyUsContent,
  WhyUsHeading,
  SpecialitiesContainer,
  SpecialitiesContent,
  SpecialitiesHeading,
  AnotherSubTitle,
} from "../styles/Home.style";
import owner from "../assets/owner.jpg";
import imageg1 from "../assets/image-gallery-1.jpg";
import imageg2 from "../assets/image-gallery-2.jpg";
import imageg3 from "../assets/image-gallery-3.jpg";
import imageg4 from "../assets/image-gallery-4.jpg";
import serv from "../assets/serv.jpg";
import styled, { css, keyframes } from "styled-components";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleServicesClick = () => {
    navigate("/services");
  };

  

  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
  return (
    <>
      <BackGround />
      <IntroContainer >
      <Introduction>
        {isMobile && (
          <MobileText>
            <p>Elevate Your Beauty & Wellness Journey </p>
            <h4> at "Mauli Unisex Salon n Spa...!!!"</h4>
          </MobileText>
        )}
        {isTablet && (
          <TabletText>
            <p>
              {" "}
              Elevate Your Beauty <br /> & Wellness Journey{" "}
            </p>
            <h4> at "Mauli Unisex Salon n Spa...!!!"</h4>
          </TabletText>
        )}
        {!isMobile && !isTablet && (
          <Text>
            <p>
              Elevate Your Beauty <br /> & Wellness Journey{" "}
            </p>
            <h4> at "Mauli Unisex Salon n Spa...!!!"</h4>
          </Text>
        )}
        <ButtonContainer>
              <Button onClick={handleContactClick}>Contact Us</Button>
              <Button onClick={handleServicesClick}>Services</Button>
            </ButtonContainer>
      </Introduction>
      <ImageGallery>
        <ImgCart>
          <Row>
            <Column>
              <Img src={owner} />
              <Img src={imageg3} />
            </Column>
            <Column id="mid-col">
              <Img src={owner} />
            </Column>
            <Column>
              <Img src={imageg1} />
              <Img src={owner} />
            </Column>
          </Row>
        </ImgCart>
      </ImageGallery>
      </IntroContainer>
      <Portfolio>
        <Container>
          <SubTitle>Our Specialities</SubTitle>
          <WorkList>
            <Work>
              <LayerImage src={owner} />
              <Layer>
                <LayerHeading>Bridal Makeup</LayerHeading>
                <LayerContent>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                  voluptatum fuga enim dignissimos!
                </LayerContent>
              </Layer>
            </Work>
            <Work>
              <LayerImage src={owner} />
              <Layer>
                <LayerHeading>Hair Special</LayerHeading>
                <LayerContent>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                  voluptatum fuga enim dignissimos!
                </LayerContent>
              </Layer>
            </Work>
            <Work>
              <LayerImage src={owner} />
              <Layer id="layer">
                <LayerHeading>Skin Special</LayerHeading>
                <LayerContent>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                  voluptatum fuga enim dignissimos!
                </LayerContent>
              </Layer>
            </Work>
          </WorkList>
          <WhyUsContainer>
            <WhyUsHeading>
              <strong>Why Us?</strong>
            </WhyUsHeading>
            <WhyUsContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, aliquam repellendus minima perferendis consequuntur
              unde non! Nisi soluta repellat recusandae cumque libero
              consequuntur odio obcaecati iste laborum aut fugit molestias
              ratione itaque iure tenetur architecto nesciunt quia qui atque,
              maiores dignissimos voluptatem id suscipit? Odit quo excepturi id,
              nihil impedit iure ipsam beatae suscipit quae labore dolorem saepe
              cum modi voluptates, commodi ad voluptas cupiditate sed molestiae
              ipsum magnam eaque. Architecto sunt aperiam expedita assumenda ad
              impedit magni porro numquam! Eum, rerum saepe? Soluta debitis
              veniam molestias placeat laborum itaque optio autem tempora. Earum
              exercitationem quisquam illum veritatis placeat voluptate.
            </WhyUsContent>
          </WhyUsContainer>
        </Container>
      </Portfolio>

      <AnotherSubTitle>Elevate Your Style</AnotherSubTitle>
      <SpecialitiesContainer>
        <SpecialitiesHeading>
          <strong>Redefine</strong>
          <br /> Your Beauty
        </SpecialitiesHeading>
        <SpecialitiesContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          aliquam repellendus minima perferendis consequuntur unde non! Nisi
          soluta repellat recusandae cumque libero consequuntur odio obcaecati
          iste laborum aut fugit molestias ratione itaque iure tenetur
          architecto nesciunt quia qui atque, maiores dignissimos voluptatem id
          suscipit? Odit quo excepturi id, nihil impedit iure ipsam beatae
          suscipit quae labore dolorem saepe cum modi voluptates, commodi ad
          voluptas cupiditate sed molestiae ipsum magnam eaque. Architecto sunt
          aperiam expedita assumenda ad impedit magni porro numquam! Eum, rerum
          saepe? Soluta debitis veniam molestias placeat laborum itaque optio
          autem tempora. Earum exercitationem quisquam illum veritatis placeat
          voluptate.
        </SpecialitiesContent>
      </SpecialitiesContainer>

      <ImageSliderContainer>
        <ImageSlider />
      </ImageSliderContainer>
      <Footer />
    </>
  );
};

export default Home;