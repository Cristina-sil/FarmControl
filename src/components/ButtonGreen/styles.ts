import styled from "styled-components/native";
import { Dimensions } from "react-native";

const {width} = Dimensions.get('window');

export const ButtonContainer = styled.TouchableOpacity`
  background-color: #32B768;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  height: 56px;
  width: ${width - 40}px;
`;

export const ButtonText = styled.Text`
  font-size: 22px;
  color: #FFFFFF;
  font-family: 'Jost-Medium';
`;