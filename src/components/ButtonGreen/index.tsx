import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  active: boolean;
}
export function Button({ title, active, ...rest }: ButtonProps) {
  return (
    <ButtonContainer activeOpacity={0.6} {...rest} active={active}>
      <ButtonText active={active}>{title}</ButtonText>
    </ButtonContainer>
  );
}
