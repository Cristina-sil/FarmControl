import React from "react";

// Components
import OptionButton from "../../../components/OptionButton";

// Styles
import { Container, Title, Row, Separator, Content } from "./styles";

// Icons
import Cow from "../../../assets/images/Cow";
import Horse from "../../../assets/images/Horse";
import Pork from "../../../assets/images/Pork";
import Goat from "../../../assets/images/Goat.tsx";
import Sheep from "../../../assets/images/Sheep";
import HeaderBack from "../../../components/HeaderBack";

const SelectManager = ({ navigation }: any) => {
  return (
    <Container>
      <HeaderBack />
      <Content>
        <Title>{'Selecione o tipo de animal\nque você quer gerenciar.'}</Title>
        <Separator />
        <Row>
          <OptionButton
            title="Bovino"
            image={<Cow />}
            onPress={() => navigation.navigate("HomeManager", { type: "Bovino" })}
          />
          <OptionButton
            title="Equino"
            image={<Horse />}
            onPress={() => navigation.navigate("HomeManager", { type: "Equino" })}
          />
        </Row>
        <Separator />
        <Row>
          <OptionButton
            title="Suíno"
            image={<Pork />}
            onPress={() => navigation.navigate("HomeManager", { type: "Suino" })}
          />
          <OptionButton
            title="Caprino"
            image={<Goat />}
            onPress={() => navigation.navigate("HomeManager", { type: "Caprino" })}
          />
        </Row>
        <Separator />
        <Row>
          <OptionButton
            title="Ovino"
            image={<Sheep />}
            onPress={() => navigation.navigate("HomeManager", { type: "Ovino" })}
          />
        </Row>
      </Content>
    </Container>
  );
};

export default SelectManager;
