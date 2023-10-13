import React, { useState } from "react";

// Components
import HeaderBack from "../../../components/HeaderBack";
import Input from "../../../components/Input";
import { Button } from "../../../components/ButtonGreen";
import FormPick from "../../../components/FormPick";

// Styles
import { Container, Content, Separator, Title } from "./styles";
import InputDate from "../../../components/InputDate";

const Step2 = ({ navigation }: any) => {
  const [race, setRace] = useState<Number>(0);

  return (
    <Container>
      <HeaderBack />
      <Content>
        <Title>{"Agora vamos preencher\nalguns dados do seu animal."}</Title>
        <Separator />
        <Input TitleInput="Código do animal" Keyboard="numeric" />
        <Separator />
        <Input TitleInput="Raça do animal" Keyboard="default" />
        <Separator />
        <FormPick value={race} setValue={setRace} titleForm="Sexo do animmal" />
        <Separator />
        <Input TitleInput="Peso do animal" Keyboard="numeric" />
        <Separator />
        <InputDate TitleInput="Data da ultima pesagem" />
        <Separator />
        <Button
          active
          title="Continuar"
          onPress={() => navigation.navigate("Step3")}
        />
      </Content>
    </Container>
  );
};

export default Step2;
