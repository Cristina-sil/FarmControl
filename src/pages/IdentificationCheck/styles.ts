import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
  width: 100%;
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-family: "Jost-SemiBold";
  color: #3A1711;
  text-align: center;
  line-height: 38px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-family: "Jost-Regular";
  text-align: center;
  font-size: 20px;
  padding: 10px 0 10px 0;
  color: #3A1711;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 50px 0 50px;
  margin-top: 20px;
  align-items: center;
`;
