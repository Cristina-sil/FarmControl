import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";

// Components
import HeaderBack from "../../../../components/HeaderBack";
import Input from "../../../../components/Input";
import { Button } from "../../../../components/ButtonGreen";
import FormPick from "../../../../components/FormPick";
import InputDate from "../../../../components/InputDate";

// Styles
import { Container, Content, Separator, Title } from "./styles";
import { checkDate } from "../../../../utils";

const Step1Edit = ({ navigation, route }: any) => {
  const params = route?.params;

  const [id, setId] = useState("");
  const [race, setRace] = useState("");
  const [sex, setSex] = useState<Number>(0);
  const [errorSex, setErrorSex] = useState(false);
  const [weight, setWeight] = useState("");
  const [errorWeight, setErrorWeight] = useState(false);
  const [dateWeight, setDateWeight] = useState("");
  const [errorDateWeight, setErrorDateWeight] = useState(false);

  const initState = () => {
    setId(params?.id);
    setRace(params?.race);
    setSex(params?.sex);
    setWeight(params?.weight);
    setDateWeight(params?.dateWeight);
  };

  useEffect(() => {
    initState();
  }, []);

  const onPressForm = () => {
    const isValidDate = checkDate(dateWeight);
    setErrorDateWeight(!isValidDate);
    setErrorSex(sex === 0);
    setErrorWeight(!weight);
    if (id && sex != 0 && weight && isValidDate) {
      navigation.navigate("Step2Edit", {
        ...params,
        newData: {
          race,
          sex,
          weight,
          dateWeight,
        },
      });
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={"height"}>
      <Container>
        <HeaderBack />
        <Content>
          <Title>{"Aqui você pode editar\nalguns dados do seu animal."}</Title>
          <Separator />
          <Input
            TitleInput="Código do animal"
            Keyboard="default"
            value={id}
            setValue={setId}
            errorInput={false}
            editable={false}
          />
          <Separator />
          <Input
            TitleInput="Raça do animal"
            Keyboard="default"
            value={race}
            setValue={setRace}
            errorInput={false}
            editable={true}
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
            editable={true}
          />
          <Separator />
          <InputDate
            TitleInput="Data da ultima pesagem (*)"
            value={dateWeight}
            setValue={setDateWeight}
            errorInput={errorDateWeight}
            editable={true}
          />
          <Separator />
          <Button active title="Continuar" onPress={() => onPressForm()} />
          <Separator />
          <Separator />
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Step1Edit;
