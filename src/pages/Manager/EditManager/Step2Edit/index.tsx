import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";

// libs
import { useDispatch, useSelector } from "react-redux";

// Components
import HeaderBack from "../../../../components/HeaderBack";
import Input from "../../../../components/Input";
import SwitchToggle from "../../../../components/Switch";
import { Button } from "../../../../components/ButtonGreen";
import InputDate from "../../../../components/InputDate";

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
import { checkDate } from "../../../../utils";
import { ReduxState } from "../../../../store/reducer";

const Step2Edit = ({ navigation, route }: any) => {
  const params = route?.params;
  const dispatch = useDispatch();
  const mammals = useSelector(
    (state: ReduxState) => state.mammals.data.mammals
  );
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
  const [raceMother, setRaceMother] = useState("");
  const [errorRaceFather, setErrorRaceFather] = useState(false);
  const [errorRaceMother, setErrorRaceMother] = useState(false);

  const initState = () => {
    setPurchase(params?.purchase);
    setFarm(!params?.purchase);
    setVaccinated(params?.vaccinated);
    setRaceFather(params?.raceFather);
    setRaceMother(params?.raceMother);
    setDatePurchase(params?.dateAcquisition);
    setNameVaccine(params?.nameVaccine);
    setBirthDate(params?.birthDate);
    setMother(params?.idMother);
    setFather(params?.idFather);
    setLocalPurchase(params?.localAcquisition);
  };

  useEffect(() => {
    initState();
  }, []);

  const onPressForm = () => {
    if (purchase) {
      const isValidDate = checkDate(datePurchase);
      setErrorLocalPurchase(!localPurchase);
      setErrorRaceFather(!raceFather);
      setErrorRaceMother(!raceMother);
      setErrorDatePurchase(!isValidDate);
      if (raceFather && localPurchase && isValidDate) {
        const data = mammals.map((item) => {
          if (item.id === params?.id) {
            return {
              ...item,
              race: params?.newData.race || "SRD",
              sex: params?.newData.sex,
              weight: params?.newData.weight,
              dateWeight: params?.newData.dateWeight,
              birthDate: birthDate,
              idFather: father,
              idMother: mother,
              purchase: purchase,
              dateAcquisition: datePurchase,
              localAcquisition: localPurchase,
              raceFather: raceFather || "SRD",
              raceMother: raceMother || "SRD",
              vaccinated: vaccinated,
              nameVaccine: nameVaccine,
            };
          }
          return item;
        });
        dispatch({ type: "FETCH_EDIT_MAMMALS", payload: data });
        navigation.navigate("Finish", {type: 'EDT'});
      }
    } else if (farm) {
      const isValidDate = checkDate(birthDate);
      setErrorBirthDate(!isValidDate);
      if (isValidDate) {
        const data = mammals.map((item) => {
          if (item.id === params?.id) {
            return {
              ...item,
              race: params?.newData.race || "SRD",
              sex: params?.newData.sex,
              weight: params?.newData.weight,
              dateWeight: params?.newData.dateWeight,
              birthDate: birthDate,
              idFather: father,
              idMother: mother,
              purchase: purchase,
              dateAcquisition: datePurchase,
              localAcquisition: localPurchase,
              raceFather: raceFather || "SRD",
              raceMother: raceMother || "SRD",
              vaccinated: vaccinated,
              nameVaccine: nameVaccine,
            };
          }
          return item;
        });
        dispatch({ type: "FETCH_EDIT_MAMMALS", payload: data });
        navigation.navigate("Finish", {type: 'EDT'});
      }
    }
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={"height"}>
      <Container>
        <HeaderBack />
        <Content>
          <Title>{"Aqui você pode editar\nalguns dados do seu animal."}</Title>
          <Separator />
          {farm && (
            <>
              <Separator />
              <InputDate
                TitleInput="Data de nascimento do animal (*)"
                value={birthDate}
                setValue={setBirthDate}
                errorInput={errorBirthDate}
                editable={true}
              />
              <Separator />
              <Input
                TitleInput="Código da mãe do animal"
                Keyboard="default"
                value={mother}
                setValue={setMother}
                errorInput={false}
                editable={true}
              />
              <Separator />
              <Input
                TitleInput="Código do pai do animal"
                Keyboard="default"
                value={father}
                setValue={setFather}
                errorInput={false}
                editable={true}
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
                editable={true}
              />
              <Separator />
              <Input
                TitleInput="Local da compra (*)"
                Keyboard="default"
                value={localPurchase}
                setValue={setLocalPurchase}
                errorInput={errorLocalPurchase}
                editable={true}
              />
              <Separator />
              <Input
                TitleInput="Raça do pai"
                Keyboard="default"
                value={raceFather}
                setValue={setRaceFather}
                errorInput={errorRaceFather}
                editable={true}
              />
              <Separator />
              <Input
                TitleInput="Raça da mãe"
                Keyboard="default"
                value={raceMother}
                setValue={setRaceMother}
                errorInput={errorRaceMother}
                editable={true}
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
                  editable={true}
                />
              )}
              <Separator />
            </>
          )}
          <Button title="Continuar" active onPress={() => onPressForm()} />
          <Separator />
          <Separator />
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Step2Edit;
