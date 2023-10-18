import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #00000080;
  justify-content: center;
  align-items: center;
`

export const ContainerInside = styled.View`
  width: 90%;
  min-height: ${height / 2.3}px;
  border-radius: 2px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 20px;
  color: #000000;
  font-family: 'Jost-Medium';
  text-align: center;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonYes = styled.TouchableOpacity`
  width: 40%;
  height: 56px;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #c4302b;
  border-radius: 8px;
`;

export const ButtonNo = styled.TouchableOpacity`
  width: 40%;
  height: 56px;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #d7d7d7;
  border-radius: 8px;
`;

export const TextYes = styled.Text`
  font-size: 20px;
  color: #FFFFFF;
  font-family: 'Jost-Medium';
`;

export const TextNo = styled.Text`
  font-size: 20px;
  color: #000000;
  font-family: 'Jost-Medium';
`;

export const Separator = styled.View`
  height: 20px;
`;