import React, { useState } from 'react';

// Components
import HeaderBack from '../../../components/HeaderBack';
import Input from '../../../components/Input';
import { Button } from '../../../components/ButtonGreen';
import SwitchToggle from '../../../components/Switch';
import InputDate from '../../../components/InputDate';

// Styles
import { Container, Content, Separator, TextCheckBox, Title, ViewCheckBox } from './styles';

const Step4 = ({ navigation }: any) => {

  const [purchase, setPurchase] = useState(false)

  return (
    <Container>
      <HeaderBack />
      <Content>
        <Title>{"Agora vamos preencher\nalguns dados do seu animal."}</Title>
        <Separator />
        <ViewCheckBox>
          <SwitchToggle switchOn={purchase} onPress={() => setPurchase(!purchase)} />
          <TextCheckBox>Animal comprado?</TextCheckBox>
        </ViewCheckBox>
        <Separator />
        {purchase && (
          <>
          <InputDate TitleInput='Data da compra do animal' />
          <Separator />
          <Input TitleInput="Local da compra" Keyboard="numeric" />
          <Separator />
          </>
        )}
        <Button title='Continuar' active onPress={() => navigation.navigate("Finish")} />
      </Content>
    </Container>
  );
}

export default Step4;