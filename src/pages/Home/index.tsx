import React from "react";

// Libs
import { useSelector } from "react-redux";

// Components
import Header from "../../components/Header";
import OptionButton from "../../components/OptionButton";

// Styles
import { Container, HeaderContainer, Title, SubTitle, Row, Separator } from "./styles";

// Icons
import Cow from "../../assets/images/Cow";
import { ReduxState } from "../../store";

export default function Home() {

  const user = useSelector((state: ReduxState) => state.user);
  return (
    <Container>
      <HeaderContainer>
        <Header name={user.data.name} logo={user.data.name}/>
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
