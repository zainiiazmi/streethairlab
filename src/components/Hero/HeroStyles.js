import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
`;

export const HeroBg = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
  overflow: hidden;

  &::after {
    content: "";
    width: inherit;
    height: inherit;
    position: absolute;
    top: 0;
    left: 0;
    background: -webkit-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.5) 10%, transparent 100%);
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  max-width: 1280px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: -20px;
  padding: 1vmax 2vmax;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);

  @-moz-document url-prefix() {
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 1024px) {
    left: 56%;
  }

  @media screen and (max-width: 280px) {
    left: 57%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: 5vmax;
  margin-top: 0;
  letter-spacing: 1vmax;
  color: #fff;

  @media screen and (max-height: 823px) {
    font-size: 4vmax;
  }

  @media screen and (max-width: 280px) {
    font-size: 3vmax;
  }
`;

export const HeroP = styled.p`
  font-size: 1.2vmax;
  margin-top: -3vh;
  font-weight: bold;
  letter-spacing: 0.5vmax;
  color: #fff;

  @media screen and (max-height: 823px) {
    margin-top: -2vh;
    font-size: 1.4vmax;
  }

  @media screen and (max-width: 280px) {
    margin-top: 0;
    font-size: 1.3vmax;
  }
`;

export const HeroSpan = styled.span`
  color: #f3a658;
`;
