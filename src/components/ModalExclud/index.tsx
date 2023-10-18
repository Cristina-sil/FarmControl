import React from "react";
import { Modal } from "react-native";

// Styles
import {
  Container,
  ContainerInside,
  Content,
  Title,
  Row,
  ButtonYes,
  ButtonNo,
  TextYes,
  TextNo,
  Separator
} from "./styles";

// Icons
import Alert from "../../assets/images/Alert";

interface ModalExcludProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  onPressForm: () => void;
}

const ModalExclud = ({ visible, setVisible, onPressForm }: ModalExcludProps) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <Container>
        <ContainerInside>
          <Content>
            <Alert />
            <Separator />
            <Title>{'Tem certeza de que\ndeseja excluir o animal?'}</Title>
            <Separator />
            <Separator />
            <Row>
              <ButtonYes activeOpacity={0.7} onPress={() => onPressForm()}>
                <TextYes>Sim</TextYes>
              </ButtonYes>
              <ButtonNo activeOpacity={0.7} onPress={() => setVisible(false)}>
                <TextNo>Não</TextNo>
              </ButtonNo>
            </Row>
          </Content>
        </ContainerInside>
      </Container>
    </Modal>
  );
};

export default ModalExclud;
