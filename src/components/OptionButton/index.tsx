import React from "react";

// Styles
import { Container, ButtonText, Separator } from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  image: React.ReactNode;
}

function OptionButton({ title, image, onPress }: ButtonProps) {
  return (
    <Container activeOpacity={0.7} onPress={() => onPress()}>
      {image}
      <Separator />
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}

export default OptionButton;
