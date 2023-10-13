import React, { useState } from "react";

// Components
import HeaderBack from "../../../components/HeaderBack";
import Input from "../../../components/Input";
import SwitchToggle from "../../../components/Switch";
import { Button } from "../../../components/ButtonGreen";

// Styles
import {
  Container,
  Content,
  Separator,
  TextCheckBox,
  Title,
  ViewCheckBox,
} from "./styles";
import InputDate from "../../../components/InputDate";

const Step3 = ({ navigation }: any) => {
  const [purchase, setPurchase] = useState(false);
  const [farm, setFarm] = useState(false);
  const [vaccinated, setVaccinated] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [mother, setMother] = useState("");
  const [father, setFather] = useState("");
  const [datePurchase, setDatePurchase] = useState("");
  const [localPurchase, setLocalPurchase] = useState("");
  const [nameVaccine, setNameVaccine] = useState('');

  const togglePurchase = () => {
    setPurchase(!purchase);
    setFarm(false);
    setVaccinated(false);
  };

  const toggleFarm = () => {
    setPurchase(false);
    setFarm(!farm);
    setVaccinated(false);
  };
  return (
    <Container>
      <HeaderBack />
      <Content>
        <Title>{"Agora vamos definir\na origem do seu animal."}</Title>
        <Separator />
        <ViewCheckBox>
          <SwitchToggle switchOn={farm} onPress={() => toggleFarm()} />
          <TextCheckBox>Animal nascido na fazenda?</TextCheckBox>
        </ViewCheckBox>
        <Separator />
        <ViewCheckBox>
          <SwitchToggle switchOn={purchase} onPress={() => togglePurchase()} />
          <TextCheckBox>Animal comprado?</TextCheckBox>
        </ViewCheckBox>
        <Separator />
        {farm && (
          <>
            <Separator />
            <InputDate
              TitleInput="Data de nascimento do animal"
              value={birthDate}
              setValue={setBirthDate}
            />
            <Separator />
            <Input
              TitleInput="Mãe do animal"
              Keyboard="numeric"
              value={mother}
              setValue={setMother}
            />
            <Separator />
            <Input
              TitleInput="Pai do animal"
              Keyboard="numeric"
              value={father}
              setValue={setFather}
            />
            <Separator />
          </>
        )}
        {purchase && (
          <>
            <InputDate
              TitleInput="Data da compra do animal"
              value={datePurchase}
              setValue={setDatePurchase}
            />
            <Separator />
            <Input
              TitleInput="Local da compra"
              Keyboard="default"
              value={localPurchase}
              setValue={setLocalPurchase}
            />
            <Separator />
            <ViewCheckBox>
              <SwitchToggle
                switchOn={vaccinated}
                onPress={() => setVaccinated(!vaccinated)}
              />
              <TextCheckBox>Animal foi vacinado?</TextCheckBox>
            </ViewCheckBox>
            <Separator />
            {vaccinated && (
              <Input
                TitleInput="Nome da vacina"
                Keyboard="default"
                value={nameVaccine}
                setValue={setNameVaccine}
              />
            )}
            <Separator />
          </>
        )}
        <Button
          title="Continuar"
          active
          onPress={() => navigation.navigate("Finish")}
        />
      </Content>
    </Container>
  );
};

export default Step3;
