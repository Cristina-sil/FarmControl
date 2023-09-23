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

export default function Header() {
  return (
    <Container>
      <View>
        <Greeting>Olá,</Greeting>
        <UserName>Welles Paiva</UserName>
      </View>
      <IconContainer>
        <IconText>WP</IconText>
      </IconContainer>
    </Container>
  );
}
