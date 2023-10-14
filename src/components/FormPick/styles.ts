import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

export const Container = styled.View`
  width: 100%;
  padding-horizontal: 10px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-family: "Jost-Regular";
  color: ${(Props) => (Props?.error ? "#C4302B" : "#3A1711")};
  align-self: flex-start;
  margin-left: 10px;
`;

export const PickerContainer = styled.View`
  border-radius: 8px;
  border-width: 1px;
  color: ${(Props) => (Props?.error ? "#C4302B" : "#3A1711")};
  width: 95%;
  height: 56px;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

export const PickerSelect = styled(Picker)``;

export const ErrorText = styled.Text`
  font-size: 15px;
  font-family: "Jost-Regular";
  color: #c4302b;
  align-self: flex-start;
  margin-left: 12px;
`;
