import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 20px;
  margin-top: 20px;
  align-items: center;
`;

export const Greeting = styled.Text`
  font-size: 32px;
  font-family: "Jost-Regular";
  color: #52665a;
`;

export const UserName = styled.Text`
  font-size: 32px;
  font-family: "Jost-SemiBold";
  color: #52665a;
  line-height: 40px;
`;

export const IconContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #ffff00;
  align-items: center;
  justify-content: center;
  border-width: 0.15px;
  border-color: #52665a;
`;

export const IconText = styled.Text`
  font-size: 22px;
  color: #52665a;
  font-family: "Jost-Semibold";
`;
