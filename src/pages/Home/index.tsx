import React from "react";

// Components
import Header from "../../components/Header";
import OptionButton from "../../components/OptionButton";

// Styles
import { Container, HeaderContainer, Title, SubTitle, Row, Separator } from "./styles";

// Icons
import Cow from "../../assets/images/Cow";

export default function Home() {
  return (
    <Container>
      <HeaderContainer>
        <Header />
        <Title>O que vamos gerenciar?</Title>
        <SubTitle>Selecione as opções abaixo e vamos começar!</SubTitle>
      </HeaderContainer>
      <Separator />
      <Row>
        <OptionButton title="Vaca" image={<Cow />} onPress={() => {}} />
        <OptionButton title="Vaca" image={<Cow />} onPress={() => {}} />
      </Row>
      <Separator />
      <Row>
        <OptionButton title="Vaca" image={<Cow />} onPress={() => {}} />
        <OptionButton title="Vaca" image={<Cow />} onPress={() => {}} />
      </Row>
      <Separator />
      <Row>
        <OptionButton title="Vaca" image={<Cow />} onPress={() => {}} />
        <OptionButton title="Vaca" image={<Cow />} onPress={() => {}} />
      </Row>
    </Container>
  );
}
