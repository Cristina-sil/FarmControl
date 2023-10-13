import React from "react";

// Components
import HeaderBack from "../../../components/HeaderBack";
import Input from "../../../components/Input";
import { Button } from "../../../components/ButtonGreen";

// Styles
import { Container, Content, Separator, Title } from "./styles";

const Step3 = ({ navigation }: any) => {
  return (
    <Container>
      <HeaderBack />
      <Content>
        <Title>{"Agora vamos preencher\nalguns dados do seu animal."}</Title>
        <Separator />
        <Input TitleInput="Mãe do animal" Keyboard="numeric" />
        <Separator />
        <Input TitleInput="Pai do animal" Keyboard="numeric" />
        <Separator />
        <Input TitleInput="Raça da mãe do animal" Keyboard="default" />
        <Separator />
        <Input TitleInput="Raça da pai do animal" Keyboard="default" />
        <Separator />
        <Button title="Continuar" active onPress={() => navigation.navigate("Step4")} />
      </Content>
    </Container>
  );
};

export default Step3;
