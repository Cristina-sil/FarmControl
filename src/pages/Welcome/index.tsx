import React from "react";

// Components
import { Button } from "../../components/ButtonGreen";

// Styles
import { Container, Title, Content, SubTitle } from "./styles";

// Icons
import WelcomeLogo from "../../assets/images/WelcomeLogo";

const Welcome = ({ navigation }: any) => {
  return (
    <Container>
      <Content>
        <Title>Farm Control</Title>
        <WelcomeLogo />
        <SubTitle>Gerencie suas criacões de forma fácil</SubTitle>
        <Button
          title="Continuar"
          onPress={() => navigation.navigate("Identification")}
          active
        />
      </Content>
    </Container>
  );
};

export default Welcome;
