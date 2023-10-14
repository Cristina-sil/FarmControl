import React from "react";

// Libs
import { useSelector } from "react-redux";

// Components
import { Button } from "../../components/ButtonGreen";
import { ReduxState } from "../../store/reducer";

// Styles
import { Container, Content, SubTitle } from "./styles";

// Icons
import WelcomeLogo from "../../assets/images/WelcomeLogo";
import Logo from "../../assets/images/Logo";

const Welcome = ({ navigation }: any) => {

  const user = useSelector((state: ReduxState) => state.user.data.name);

  const mammals = useSelector((state: ReduxState) => state.mammals.data.mammals);

  const onPressNavigation = () => {
    if (user) {
      navigation.navigate("Home")
    } else {
      navigation.navigate("Identification")
    }
  }

  return (
    <Container>
      <Content>
        <Logo />
        <WelcomeLogo />
        <SubTitle>Gerencie suas criacões de forma fácil</SubTitle>
        <Button
          title="Continuar"
          onPress={() => onPressNavigation()}
          active
        />
      </Content>
    </Container>
  );
};

export default Welcome;
