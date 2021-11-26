import React from "react";
import { testimoni } from "../../constant/constant";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Card, CardClient, CardDetail, CardImg, CardLayer, CardService, CardStar, CardTesti, Container, Content, Img, Section, TitleH1, TitleP } from "./TestimonialStyles";

const Testimonial = () => {
  return (
    <Section>
      <Container>
        <TitleH1>Testimonials</TitleH1>
        <TitleP>Our customers love us! Read what they have to say below</TitleP>
        <Content>
          {testimoni.map(({ id, testi, client, level, image }) => (
            <Card key={id}>
              <CardStar>
                <FaStar color="#f3a658" />
                <FaStar color="#f3a658" />
                <FaStar color="#f3a658" />
                <FaStar color="#f3a658" />
                <FaStarHalf color="#f3a658" />
              </CardStar>
              <CardService>{level}</CardService>
              <CardTesti>{testi}</CardTesti>
              <CardClient>
                <CardImg>
                  <Img src={image} />
                </CardImg>
                <CardDetail>{client}</CardDetail>
              </CardClient>
            </Card>
          ))}
        </Content>
      </Container>
    </Section>
  );
};

export default Testimonial;
