import React from "react";

// Components
import { Button } from "../../components/ButtonGreen";

// Styles
import { Container, Content, Emoji, Title, Subtitle, Footer } from "./styles";

export default function IdentificationCheck({ navigation }: any) {
  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>
        <Title>Pronto</Title>
        <Subtitle>
          Agora vamos começar a cuidar das suas criações com muito cuidado.
        </Subtitle>
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
