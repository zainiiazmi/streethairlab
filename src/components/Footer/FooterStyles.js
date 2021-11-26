import styled from "styled-components";
import { IconContext } from "react-icons";

export const FooterSection = styled.footer`
  width: 100%;
  margin-top: 100px;
  background-color: #000;
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media screen and (max-width: 1216px) {
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const FooterH1 = styled.h1`
  font-size: 2rem;
  color: #fff;
  display: grid;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1216px) {
    padding-top: 30px;
  }
`;

export const FooterP = styled.p`
  display: grid;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 1216px) {
    padding-top: 20px;
    font-size: 0.9rem;
  }
`;

export const FooterIcon = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(20px, 30px));
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1216px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const MyProvider = ({ className, children }) => <IconContext.Provider value={{ className }}>{children}</IconContext.Provider>;

export const MyProviderStyled = styled(MyProvider)`
  font-size: 1.5rem;
  color: #fff;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
