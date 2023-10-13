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

export const Separator = styled.View`
  height: 15px;
`;

export const ViewCheckBox = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 15px;
  margin-top: 10px;
`

export const TextCheckBox = styled.Text`
  font-size: 16px;
  padding-left: 10px;
  padding-right: 20px;
  font-family: 'Jost-Regular';
  color: #3A1711;
`