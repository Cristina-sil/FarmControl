import styled from "styled-components/native";

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

export const InputAll = styled.TextInput`
  font-size: 20px;
  font-family: "Jost-Regular";
  border-radius: 8px;
  border-width: 1px;
  border-color: ${(Props) => (Props?.error ? "#C4302B" : "#3A1711")};
  color: #3a1711;
  width: 95%;
  height: 56px;
  padding: 5px;
`;

export const Separator = styled.View`
  height: 3px;
`;

export const ErrorText = styled.Text`
  font-size: 15px;
  font-family: "Jost-Regular";
  color: #c4302b;
  align-self: flex-start;
  margin-left: 12px;
`;
