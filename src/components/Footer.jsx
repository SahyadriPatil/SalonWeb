import React from "react";
// import "../styles/Footer.css";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubContainer>
          <FooterRow>
            <FooterColumn>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <FooterLink href="/about">About Us</FooterLink>
                </li>
                <li>
                  <FooterLink href="/services">Services</FooterLink>
                </li>
                <li>
                  <FooterLink href="/products">Products</FooterLink>
                </li>
                <li>
                  <FooterLink href="/contact">Contact Us</FooterLink>
                </li>
                <li>
                  <FooterLink href="/gallery">Gallery</FooterLink>
                </li>
              </ul>
            </FooterColumn>
            <FooterColumn>
              <h4>Get Help</h4>
              <ul>
                <li>
                  <FooterLink href="#">FAQ</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Help</FooterLink>
                </li>
              </ul>
            </FooterColumn>
            <FooterColumn>
              <h4>About Mauli Salon</h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at
              rerum, tempore dicta voluptatem quibusdam est deserunt nesciunt
              vitae porro magnam ex quaerat. Magnam velit nesciunt vero magni
              aut aliquam repellendus maiores atque architecto illo?
            </FooterColumn>
            <FooterColumn>
              <h4>follow us</h4>
              <SocialLinks>
                <a href="www.facebook.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="www.twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="www.instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="www.linkedin.com">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </SocialLinks>
            </FooterColumn>
          </FooterRow>
        </FooterSubContainer>
        
      </FooterContainer>
    </>
  );
};

const FooterContainer = styled.div`
  background-color: var(--secondary-color);
  padding: 70px 0;
`;
const FooterSubContainer = styled.div`
  max-width: 1170px;
  margin: auto;
`;

const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FooterColumn = styled.div`
  width: 25%;
  padding: 0 15px;
  text-align: justify;
  h4 {
    font-size: 18px;
    color: var(--primary-color);
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;
  }
  h4::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: rgb(218, 2, 238);
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }
  ul {
    list-style: none;
    li:not(:last-child) {
      margin-bottom: 10px;
      /* a {
        font-size: 16px;
        text-transform: capitalize;
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 300;
        color: #000000;
        display: block;
        transition: all 0.3s ease;
      }
      a:hover {
        color: var(--primary-color);
        padding-left: 8px;
      } */
    }
  }

  @media (max-width: 767px) {
    width: 50%;
    margin-bottom: 10px;
  }
  @media (max-width: 574px) {
    width: 100%;
  }
`;
const SocialLinks = styled.div`
  a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(48, 12, 12, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #000000;
    transition: all 0.5s ease;
  }
  a:hover {
    color: var(--primary-color);
    background-color: #ffffff;
  }
`;
const FooterLink = styled.a`
  font-size: 16px;
  text-transform: capitalize;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 300;
  color: #000000;
  display: block;
  transition: all 0.3s ease;
  &:hover {
    color: var(--primary-color);
    padding-left: 8px;
  }
`;

export default Footer;
