import styled from "styled-components";

export const Section = styled.section`
  margin-top: 100px;
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 90%;
  padding: 10px 50px;
  margin: auto;
`;

export const TitleH1 = styled.h1`
  text-align: center;
`;

export const TitleP = styled.p`
  text-align: center;
`;

export const Content = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const Card = styled.div`
  padding: 30px 20px;
  border-radius: 10px;

  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  transition: 0.2s ease-in-out;
  background: #000;

  &:hover {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    transform: scale(1.03);
  }
`;

export const CardStar = styled.div``;

export const CardService = styled.h4`
  color: #fff;
`;

export const CardTesti = styled.p`
  color: #fff;
  line-height: 1.4rem;
`;

export const CardClient = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: -35px;
`;

export const CardImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 1);
  margin-left: 35px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  overflow: hidden;
`;

export const CardDetail = styled.h4`
  margin-left: 10px;
  color: #fff;
`;
