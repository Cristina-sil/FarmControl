import React from "react";

import { useNavigation } from "@react-navigation/native";

// Styles
import { Container, Row } from "./styles";

// Icons
import Back from "../../assets/images/Back";
import LogoHeader from "../../assets/images/LogoHeader";

export default function HeaderBack() {
  const navigation = useNavigation();
  return (
    <Container>
      <Row activeOpacity={0.7} onPress={() => navigation.goBack()}>
         <Back />
      </Row>
      <LogoHeader />
    </Container>
  );
}
