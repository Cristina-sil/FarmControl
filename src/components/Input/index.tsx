import React, { useState } from "react";
import { KeyboardType } from "react-native";

// Styles
import { Container, Title, InputAll, Separator } from "./styles";

interface InputAllProps {
  TitleInput: String;
  Keyboard: KeyboardType;
}

const Input = ({ TitleInput, Keyboard }: InputAllProps) => {
  const [text, setText] = useState("");
  return (
    <Container>
      <Title>{TitleInput}</Title>
      <Separator />
      <InputAll
        value={text}
        onChangeText={(e) => {
          setText(e);
        }}
        keyboardType={Keyboard}
      />
    </Container>
  );
};

export default Input;
