import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

// libs
import { useDispatch } from "react-redux";

// Components
import HeaderBack from "../../../components/HeaderBack";
import Input from "../../../components/Input";
import SwitchToggle from "../../../components/Switch";
import { Button } from "../../../components/ButtonGreen";
import InputDate from "../../../components/InputDate";

// Styles
import {
  Container,
  Content,
  Separator,
  TextCheckBox,
  Title,
  ViewCheckBox,
} from "./styles";

// Utils
import { checkDate } from "../../../utils";

const Step3 = ({ navigation, route }: any) => {
  const params = route?.params;
  const dispatch = useDispatch();
  const [purchase, setPurchase] = useState(false);
  const [farm, setFarm] = useState(false);
  const [vaccinated, setVaccinated] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [errorBirthDate, setErrorBirthDate] = useState(false);
  const [mother, setMother] = useState("");
  const [father, setFather] = useState("");
  const [datePurchase, setDatePurchase] = useState("");
  const [errorDatePurchase, setErrorDatePurchase] = useState(false);
  const [localPurchase, setLocalPurchase] = useState("");
  const [errorLocalPurchase, setErrorLocalPurchase] = useState(false);
  const [nameVaccine, setNameVaccine] = useState("");
  const [raceFather, setRaceFather] = useState("");
  const [errorRaceFather, setErrorRaceFather] = useState(false);

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

  const onPressForm = () => {
    if (purchase) {
      const isValidDate = checkDate(datePurchase);
      setErrorLocalPurchase(!localPurchase);
      setErrorRaceFather(!raceFather);
      setErrorDatePurchase(!isValidDate);
      if (raceFather && localPurchase && isValidDate) {
        const data = {
          id: params?.id,
          type: params?.type,
          race: params?.race || "SRD",
          sex: params?.sex,
          weight: params?.weight,
          dateWeight: params?.dateWeight,
          birthDate: birthDate,
          purchase: purchase,
          dateAcquisition: datePurchase,
          localAcquisition: localPurchase,
          father: father,
          mother: mother,
          raceFather: raceFather,
          raceMother: "",
          inmate: true,
          vaccinated: vaccinated,
          nameVaccine: nameVaccine,
        };
        dispatch({ type: "FETCH_MAMMALS", payload: data });
        navigation.navigate("Finish");
      }
    } else if (farm) {
      const isValidDate = checkDate(birthDate);
      setErrorBirthDate(!isValidDate);
      if (isValidDate) {
        const data = {
          id: params?.id,
          type: params?.type,
          race: params?.race || "SRD",
          sex: params?.sex,
          weight: params?.weight,
          dateWeight: params?.dateWeight,
          birthDate: birthDate,
          purchase: purchase,
          dateAcquisition: datePurchase,
          localAcquisition: localPurchase,
          father: father,
          mother: mother,
          raceFather: raceFather,
          raceMother: "",
          inmate: true,
          vaccinated: vaccinated,
          nameVaccine: nameVaccine,
        };
        dispatch({ type: "FETCH_MAMMALS", payload: data });
        navigation.navigate("Finish");
      }
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={"height"}
    >
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
            <SwitchToggle
              switchOn={purchase}
              onPress={() => togglePurchase()}
            />
            <TextCheckBox>Animal comprado?</TextCheckBox>
          </ViewCheckBox>
          <Separator />
          {farm && (
            <>
              <Separator />
              <InputDate
                TitleInput="Data de nascimento do animal (*)"
                value={birthDate}
                setValue={setBirthDate}
                errorInput={errorBirthDate}
              />
              <Separator />
              <Input
                TitleInput="Mãe do animal"
                Keyboard="numeric"
                value={mother}
                setValue={setMother}
                errorInput={false}
              />
              <Separator />
              <Input
                TitleInput="Pai do animal"
                Keyboard="numeric"
                value={father}
                setValue={setFather}
                errorInput={false}
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
                errorInput={errorDatePurchase}
              />
              <Separator />
              <Input
                TitleInput="Local da compra (*)"
                Keyboard="default"
                value={localPurchase}
                setValue={setLocalPurchase}
                errorInput={errorLocalPurchase}
              />
              <Separator />
              <Input
                TitleInput="Raça do pai"
                Keyboard="default"
                value={raceFather}
                setValue={setRaceFather}
                errorInput={errorRaceFather}
              />
              <Separator />
              <Input
                TitleInput="Raça da mãe"
                Keyboard="default"
                value={raceFather}
                setValue={setRaceFather}
                errorInput={errorRaceFather}
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
                  errorInput={false}
                />
              )}
              <Separator />
            </>
          )}
          <Button title="Continuar" active onPress={() => onPressForm()} />
          <Separator />
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Step3;
