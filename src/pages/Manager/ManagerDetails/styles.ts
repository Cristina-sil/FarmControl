import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1px;
  padding-horizontal: 10px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-family: "Jost-Medium";
  color: #3A1711;
  text-align: center;
`;

export const ItemBold = styled.Text`
  font-size: 22px;
  font-family: "Jost-Medium";
  color: #3A1711;
`;

export const ItemRegular = styled.Text`
  font-size: 22px;
  font-family: "Jost-Regular";
  color: #3A1711;
`;

export const Separator = styled.View`
  height: 15px;
`;

export const ItemLine = styled.View`
  width: 100%;
  height: 1px;
  background-color: #d7d7d7;
  margin: 10px 0 10px 0;
`;

export const ButtonExclud = styled.TouchableOpacity`
  width: 70%;
  height: 56px;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #c4302b;
  border-radius: 8px;
`;

export const ButtonEdit = styled.TouchableOpacity`
  width: 70%;
  height: 56px;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #d7d7d7;
  border-radius: 8px;
`;

export const TextEdit = styled.Text`
  font-size: 20px;
  color: #000000;
  font-family: 'Jost-Medium';
`;

export const TextExclud = styled.Text`
  font-size: 20px;
  color: #FFFFFF;
  font-family: 'Jost-Medium';
`;