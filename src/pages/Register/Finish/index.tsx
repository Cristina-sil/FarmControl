import React from "react";

// Components
import { Button } from "../../../components/ButtonGreen";

// Styles
import { Container, Content, Emoji, Title, Subtitle, Footer } from "./styles";

interface FinishProps {
  navigation: any,
  route: any,
}

export default function Finish({ navigation, route }: FinishProps) {
  const params = route?.params;
  const renderType = () => {
    switch(params?.type) {
      case 'ADD': return 'registrado';
      case 'EDT': return 'editado';
      case 'EXC': return 'excluido';
    }
  }
  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>
        <Title>Pronto</Title>
        <Subtitle>Seu animal foi {renderType()} com sucesso</Subtitle>
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
