import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, Platform } from "react-native";

// libs
import { useDispatch } from "react-redux";

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

  const dispatch = useDispatch();

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

  const onFillForm = () => {
    if (name) {
      dispatch({type: 'FETCH_USER', payload: name})
      navigation.navigate("IdentificationCheck")
    }
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
                  onPress={() => onFillForm()}
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
