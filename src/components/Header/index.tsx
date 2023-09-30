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

export default function Header({ name }: HeaderProps) {
  return (
    <Container>
      <View>
        <Greeting>Olá,</Greeting>
        <UserName>{name}</UserName>
      </View>
      <IconContainer>
        <IconText>WP</IconText>
      </IconContainer>
    </Container>
  );
}
