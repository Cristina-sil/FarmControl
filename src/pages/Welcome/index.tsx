import React from "react";

// Libs
import { useSelector } from "react-redux";

// Components
import { Button } from "../../components/ButtonGreen";
import { ReduxState } from "../../store";

// Styles
import { Container, Title, Content, SubTitle } from "./styles";

// Icons
import WelcomeLogo from "../../assets/images/WelcomeLogo";

const Welcome = ({ navigation }: any) => {

  const user = useSelector((state: ReduxState) => state.user);

  console.log(user);

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
