import React from "react";

// Styles
import { Container, Title, InputAll, Separator, ErrorText } from "./styles";

import { maskDate } from "../../utils";

interface InputAllProps {
  TitleInput: String;
  value: string;
  setValue: (e: string) => void;
  errorInput: Boolean
}

const InputDate = ({ TitleInput, value, setValue, errorInput }: InputAllProps) => {
  return (
    <Container>
      <Title error={errorInput}>{TitleInput}</Title>
      <Separator />
      <InputAll
        value={value}
        onChangeText={(e) => {
          setValue(maskDate(e));
        }}
        keyboardType="numeric"
        error={errorInput}
      />
      {errorInput && <ErrorText>Campo obrigatório</ErrorText>}
    </Container>
  );
};

export default InputDate;
