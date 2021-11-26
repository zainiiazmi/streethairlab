import { openhour } from "../../constant/constant";
import { Card, CardInfo, CardTitle, Container, Content, Section, TitleH1 } from "./OpenHourStyles";

const OpenHour = () => {
  return (
    <Section id="open">
      <Container>
        <TitleH1>Opening Hour</TitleH1>
        <Content>
          {openhour.map(({ id, title, hour }) => (
            <Card key={id}>
              <CardTitle>{title}</CardTitle>
              <CardInfo>{hour}</CardInfo>
            </Card>
          ))}
        </Content>
      </Container>
    </Section>
  );
};

export default OpenHour;
