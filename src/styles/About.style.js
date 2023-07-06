import styled from "styled-components";
export const Main = styled.div`
  width: 1290px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;
export const Image = styled.img`
  width: 580px;
  max-width: 100%;
  height: auto;
  padding: 0 10px;

  @media screen and (max-width: 650px) {
    margin-bottom: 35px;
  }
`;

export const AllText = styled.div`
  width: 600px;
  max-width: 100%;
  padding: 0 10px;

  h4 {
    font-size: 22px;
    color: var(--tertiary-color);
    letter-spacing: 1px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 55px;
    color: var(--primary-color);
    font-weight: 700;
    margin-bottom: 20px;
    @media screen and (max-width: 650px) {
        font-size: 45px;
        margin-bottom: 20px;

  }
  }
  p {
    font-size: 18px;
    color: #130808;
  }

  @media screen and (max-width: 1250px) {
    text-align: center;
    margin-top: 40px;
  }
`;

export const ButtonContainer = styled.div``;
export const Button = styled.button`
  background: #8181c0;
  /* align-items: center; */
  padding: 20px 32px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  border: none;
  outline: none;
  margin-right: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  &:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    transition: 0.3s;
    cursor: pointer;
  }
  .btn2 {
    background: #8181c0;
    color: black;
    /* height: 10vh;
    width: 5vw; */
  }
`;

export const AboutContainer = styled.div`
  @media screen and (max-width: 650px) {
  }
`;
export const AboutUs = styled.div`
  height: 100vh;
  width: 100%;
  background: var(--secondary-color);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1250px) {
    width: 100%;
    height: auto;
    padding: 60px 0;
  }
`;

