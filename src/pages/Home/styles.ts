import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

export const HeaderContainer = styled.View`
  padding: 0 30px 0 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-family: "Jost-SemiBold";
  color: #52665a;
  line-height: 20px;
  margin-bottom: 5px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  font-family: "Jost-Regular";
  color: #52665a;
  line-height: 20px;
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
