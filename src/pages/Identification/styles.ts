import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const KeyboardContainer = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 54px 0 54px;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: #52665a;
  font-family: "Jost-SemiBold";
  line-height: 32px;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #cfcfcf;
  color: #52665a;
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`;

export const Footer = styled.View`
  margin-top: 40px;
  width: 100%;
  padding: 0 20px 0 20px;
  align-items: center;
`;
