import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, Platform } from "react-native";

// Components
import { Button } from "../../components/ButtonGreen";

// Styles
import {
  Container,
  KeyboardContainer,
  Content,
  Form,
  Header,
  Emoji,
  Title,
  Input,
  Footer,
} from "./styles";

export default function Identification({ navigation }: any) {
  // async function handlerSubmmit(){
  //   if(!name)
  //     return Alert.alert('Me diz como chamar você 😢');

  //   try {
  //     await AsyncStorage.setItem('@plantmanager:user', name);
  //   } catch (error) {
  //     Alert.alert('Não foi possível salvar o seu nome. 😢');
  //   }

  //   navigation.navigate('Confirmation', {
  //     title: 'Prontinho',
  //     subTitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
  //     buttonTitle: 'Começar',
  //     icon: 'smile',
  //     nextScreen: 'PlantSelect'
  //   })
  // }

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handlerInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handlerInputFocus() {
    setIsFocused(true);
  }

  function handlerInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <Container>
      <KeyboardContainer
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <Header>
                <Emoji>{isFilled ? "😄" : "😀"}</Emoji>
                <Title>Digite o seu nome</Title>
              </Header>
              <Input
                style={[(isFocused || isFilled) && { borderColor: "#32B768" }]}
                placeholder="Digite um nome"
                onBlur={handlerInputBlur}
                onFocus={handlerInputFocus}
                onChangeText={handlerInputChange}
              />
              <Footer>
                <Button
                  title="Continuar"
                  onPress={() => navigation.navigate("IdentificationCheck")}
                  active={isFilled}
                />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardContainer>
    </Container>
  );
}
