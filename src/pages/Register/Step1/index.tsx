import React from "react";

// Components
import OptionButton from "../../../components/OptionButton";

// Styles
import { Container, Title, Row, Separator, Content } from "./styles";

// Icons
import Cow from "../../../assets/images/Cow";
import Horse from "../../../assets/images/Horse";
import Pork from "../../../assets/images/Pork";
import Goat from "../../../assets/images/Goat";
import Sheep from "../../../assets/images/Sheep";
import HeaderBack from "../../../components/HeaderBack";

const Step1 = ({ navigation }: any) => {
  return (
    <Container>
      <HeaderBack />
      <Content>
        <Title>{'Selecione o tipo de animal\nque você quer cadastrar.'}</Title>
        <Separator />
        <Row>
          <OptionButton
            title="Bovino"
            image={<Cow />}
            onPress={() => navigation.navigate("Step2", { type: "Bovino" })}
          />
          <OptionButton
            title="Equino"
            image={<Horse />}
            onPress={() => navigation.navigate("Step2", { type: "Equino" })}
          />
        </Row>
        <Separator />
        <Row>
          <OptionButton
            title="Suíno"
            image={<Pork />}
            onPress={() => navigation.navigate("Step2", { type: "Suino" })}
          />
          <OptionButton
            title="Caprino"
            image={<Goat />}
            onPress={() => navigation.navigate("Step2", { type: "Caprino" })}
          />
        </Row>
        <Separator />
        <Row>
          <OptionButton
            title="Ovino"
            image={<Sheep />}
            onPress={() => navigation.navigate("Step2", { type: "Ovino" })}
          />
        </Row>
      </Content>
    </Container>
  );
};

export default Step1;
