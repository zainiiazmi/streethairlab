import { service } from "../../constant/constant";
import { Card, CardInfo, CardSpan, CardTitle, Container, Content, Section, TitleH1, TitleP } from "./ServiceStyle";

const Service = () => {
  return (
    <Section>
      <Container>
        <TitleH1>Services</TitleH1>
        <TitleP>Selain potong rambut, kami juga memiliki beberapa service lain.</TitleP>
        <Content>
          {service.map(({ id, title, description }) => (
            <Card key={id}>
              <CardTitle>
                <CardSpan>{title}</CardSpan>
              </CardTitle>
              <CardInfo id="open">{description}</CardInfo>
            </Card>
          ))}
        </Content>
      </Container>
    </Section>
  );
};

export default Service;
