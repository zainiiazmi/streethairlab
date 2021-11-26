import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { Container, FooterH1, FooterIcon, FooterP, FooterSection, MyProviderStyled } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterH1>Streethairlab</FooterH1>
        <FooterP>2021 &copy; Streethairlab, All Right Reserved</FooterP>
        <FooterIcon>
          <a target="_blank" href="https://www.facebook.com/" rel="noopener noreferrer">
            <MyProviderStyled>
              <FaFacebookSquare />
            </MyProviderStyled>
          </a>
          <a target="_blank" href="https://www.twitter.com/" rel="noopener noreferrer">
            <MyProviderStyled>
              <FaTwitter />
            </MyProviderStyled>
          </a>
          <a target="_blank" href="https://www.instagram.com/streethairlab/" rel="noopener noreferrer">
            <MyProviderStyled>
              <FaInstagram />
            </MyProviderStyled>
          </a>
        </FooterIcon>
      </Container>
    </FooterSection>
  );
};

export default Footer;
