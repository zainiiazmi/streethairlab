import styled from "styled-components";

export const Section = styled.section`
  /* margin-top: 100px; */
  padding-top: 100px;

  @media (max-width: 979px) {
    margin-top: 100px;
    padding-top: 0px;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 90%;
  padding: 10px 0 50px;
  margin: auto;

  /* background-color: #666; */
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 60px;
`;

export const TitleH1 = styled.h1`
  text-align: center;
`;

export const TitleP = styled.p`
  text-align: center;
`;

export const Card = styled.div``;

export const CardTitle = styled.div`
  text-align: center;
  padding: 10px 0;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const CardSpan = styled.span`
  background: #f3a658;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const CardInfo = styled.div`
  text-align: center;
  line-height: 1.7rem;
`;
