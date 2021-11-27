import styled from "styled-components";

export const Section = styled.section`
  /* position: relative; */
  padding-top: 100px;

  @media (max-width: 979px) {
    margin-top: 90px;
    padding-top: 10px;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 90%;
  padding: 10px 0 50px;
  margin: auto;
  border-radius: 20px;

  background: #000;
`;

export const TitleH1 = styled.h1`
  text-align: center;
  color: #fff;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-top: 60px;
  /* padding-bottom: 50px; */
`;

export const Card = styled.div`
  color: #fff;

  &:nth-child(1) {
    border-right: 3px solid #f3a658;
  }

  &:nth-child(2) {
    border-right: 3px solid #f3a658;
  }

  &:nth-child(3) {
    border-right: 3px solid #f3a658;
  }

  @media screen and (max-width: 900px) {
    &:nth-child(3) {
      border-right: none;
    }

    &:nth-child(4) {
      margin-top: 60px;
    }
  }

  @media screen and (max-width: 683px) {
    &:nth-child(2) {
      border-right: none;
    }

    &:nth-child(3) {
      border-right: 3px solid #f3a658;
    }

    &:nth-child(3) {
      margin-top: 60px;
    }
  }

  @media screen and (max-width: 461px) {
    &:nth-child(1) {
      border-right: none;
    }

    &:nth-child(2) {
      margin-top: 60px;
    }

    &:nth-child(3) {
      border-right: none;
    }
  }
`;

export const CardTitle = styled.div`
  text-align: center;
  padding: 10px 0;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const CardInfo = styled.div`
  text-align: center;
  line-height: 1.7rem;
`;
