import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FFFFFF;
`;

export const Content = styled.View`
  flex: 1px;
  padding-horizontal: 10px;
`;

export const SearchContainer = styled.View`
  width: ${width - 40}px;
  height: 56px;
  border-radius: 6px;
  border-width: 1px;
  border-color: #3A1711;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
`;

export const SearchText = styled.TextInput`
  padding: 5px;
  width: 90%;
  font-size: 18px;
  color: #3A1711;
  font-family: 'Jost-Regular';
  align-items: center;
  justify-content: center;
`;

export const ListMammals = styled.FlatList``;

export const ItemContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 5px;
`;

export const ItemTitle = styled.Text`
  font-size: 22px;
  font-family: 'Jost-Medium';
  color: #3A1711;
`;

export const ItemDescription = styled.Text`
  font-size: 20px;
  font-family: 'Jost-Regular';
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

export const Title = styled.Text`
  font-size: 22px;
  font-family: "Jost-Medium";
  color: #3A1711;
  text-align: center;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TextEmpty = styled.Text`
  font-size: 22px;
  font-family: 'Jost-Medium';
  color: #3A1711;
  margin-top: 15px;
`;

export const TextEmptyDescription = styled.Text`
  font-size: 20px;
  font-family: 'Jost-Regular';
  color: #3A1711;
  margin-top: 8px;
  text-align: center;
`;