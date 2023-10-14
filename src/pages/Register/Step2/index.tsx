import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";

// Components
import HeaderBack from "../../../components/HeaderBack";
import Input from "../../../components/Input";
import { Button } from "../../../components/ButtonGreen";
import FormPick from "../../../components/FormPick";
import InputDate from "../../../components/InputDate";

// Styles
import { Container, Content, Separator, Title } from "./styles";
import { checkDate } from "../../../utils";

const Step2 = ({ navigation, route }: any) => {
  const params = route?.params;

  const [id, setId] = useState("");
  const [errorId, setErrorId] = useState(false);
  const [race, setRace] = useState("");
  const [sex, setSex] = useState<Number>(0);
  const [errorSex, setErrorSex] = useState(false);
  const [weight, setWeight] = useState("");
  const [errorWeight, setErrorWeight] = useState(false);
  const [dateWeight, setDateWeight] = useState("");
  const [errorDateWeight, setErrorDateWeight] = useState(false);

  const onPressForm = () => {
    const isValidDate = checkDate(dateWeight);
    setErrorDateWeight(!isValidDate);
    setErrorId(!id);
    setErrorSex(sex === 0);
    setErrorWeight(!weight);
    if (id && sex != 0 && weight && isValidDate) {
      navigation.navigate("Step3", {
        ...params,
        id,
        race,
        sex,
        weight,
        dateWeight,
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={"height"}
      keyboardVerticalOffset={-70}
    >
      <Container>
        <HeaderBack />
        <Content>
          <Title>{"Agora vamos preencher\nalguns dados do seu animal."}</Title>
          <Separator />
          <Input
            TitleInput="Código do animal (*)"
            Keyboard="numeric"
            value={id}
            setValue={setId}
            errorInput={errorId}
          />
          <Separator />
          <Input
            TitleInput="Raça do animal"
            Keyboard="default"
            value={race}
            setValue={setRace}
            errorInput={false}
          />
          <Separator />
          <FormPick
            value={sex}
            setValue={setSex}
            titleForm="Sexo do animal (*)"
            errorPicker={errorSex}
          />
          <Separator />
          <Input
            TitleInput="Peso do animal (*)"
            Keyboard="numeric"
            value={weight}
            setValue={setWeight}
            errorInput={errorWeight}
          />
          <Separator />
          <InputDate
            TitleInput="Data da ultima pesagem"
            value={dateWeight}
            setValue={setDateWeight}
            errorInput={errorDateWeight}
          />
          <Separator />
          <Button active title="Continuar" onPress={() => onPressForm()} />
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Step2;
