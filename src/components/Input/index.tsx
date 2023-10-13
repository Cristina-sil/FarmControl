import React from "react";
import { KeyboardType } from "react-native";

// Styles
import { Container, Title, InputAll, Separator, ErrorText } from "./styles";

interface InputAllProps {
  TitleInput: String;
  Keyboard: KeyboardType;
  value: string;
  setValue: (e: string) => void;
  errorInput: Boolean;
}

const Input = ({
  TitleInput,
  Keyboard,
  value,
  setValue,
  errorInput,
}: InputAllProps) => {
  return (
    <Container>
      <Title error={errorInput}>{TitleInput}</Title>
      <Separator />
      <InputAll
        value={value}
        onChangeText={(e) => {
          setValue(e);
        }}
        keyboardType={Keyboard}
        error={errorInput}
      />
      {errorInput && <ErrorText>Campo obrigatório</ErrorText>}
    </Container>
  );
};

export default Input;
