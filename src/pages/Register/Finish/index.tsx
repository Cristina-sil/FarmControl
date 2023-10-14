import React from "react";

// Components
import { Button } from "../../../components/ButtonGreen";

// Styles
import { Container, Content, Emoji, Title, Subtitle, Footer } from "./styles";

export default function Finish({ navigation }: any) {
  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>
        <Title>Pronto</Title>
        <Subtitle>Seu animal foi registrado com sucesso</Subtitle>
        <Footer>
          <Button
            title="Continuar"
            onPress={() => navigation.navigate("Home")}
            active
          />
        </Footer>
      </Content>
    </Container>
  );
}
