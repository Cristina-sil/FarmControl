import React from "react";
import { View } from "react-native";

// Styles
import {
  Container,
  Greeting,
  UserName,
  IconContainer,
  IconText,
} from "./styles";

interface HeaderProps {
  name: String;
  logo: String;
}

export default function Header({ name, logo }: HeaderProps) {

  const transformLogo = () => {
    const logoSplit = logo.split(' ');

  let logoTransformed = '';

  for (let i = 0; i < logoSplit.length; i++) {
    const letter = logoSplit[i];
    if (letter.length > 0) {
      logoTransformed += letter[0];
    }
  }

  return logoTransformed;
  }
  
  return (
    <Container>
      <View>
        <Greeting>Olá,</Greeting>
        <UserName>{name}</UserName>
      </View>
      <IconContainer>
        <IconText>{transformLogo()}</IconText>
      </IconContainer>
    </Container>
  );
}
