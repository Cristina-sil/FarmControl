import styled from "styled-components/native";
import { Dimensions, TouchableOpacityProps } from "react-native";

const { width } = Dimensions.get("window");

interface ButtonProps extends TouchableOpacityProps {
  active: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(Props) => (Props?.active ? "#97B733" : "#A5A5A5")};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  height: 56px;
  width: ${width - 40}px;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-size: 22px;
  color: ${(Props) => (Props.active ? "#FFFFFF" : "#D7D7D7")};
  font-family: "Jost-Medium";
`;
