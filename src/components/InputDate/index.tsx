import React, { useState } from "react";
import {KeyboardType} from 'react-native'

// Styles
import { Container, Title, InputAll, Separator } from "./styles";

import { maskDate } from "../../utils";

interface InputAllProps {
  TitleInput: String;
}

const InputDate = ({ TitleInput }: InputAllProps) => {
  const [text, setText] = useState("");
  return (
    <Container>
      <Title>{TitleInput}</Title>
      <Separator />
      <InputAll
        value={text}
        onChangeText={(e) => {
          setText(maskDate(e));
        }}
        keyboardType="numeric"
      />
    </Container>
  );
};

export default InputDate;
