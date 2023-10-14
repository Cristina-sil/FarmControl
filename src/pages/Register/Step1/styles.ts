import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1px;
  padding-horizontal: 10px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: "Jost-Medium";
  color: #3A1711;
  text-align: center;
`;

export const Row = styled.View`
  flex-direction: row;
  padding: 0 20px 0 20px;
  justify-content: space-evenly;
  align-items: center;
`;

export const Separator = styled.View`
  height: 20px;
`;