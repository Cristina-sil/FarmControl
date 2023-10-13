import React from "react";
import { Platform } from "react-native";

// Styles
import { Container, Title, PickerSelect, PickerContainer } from "./styles";

// Utils
import { validatePickerGenre } from "../../utils";

interface FormPickProps {
  titleForm: String;
  value: Number;
  setValue: (e: Number) => void;
}

const FormPick = ({ titleForm, value, setValue }: FormPickProps) => {
  return (
    <Container>
      <Title>{titleForm}</Title>
      <PickerContainer>
        <PickerSelect
          style={{
            width: "100%",
            backgroundColor: "transparent",
          }}
          itemStyle={{
            fontFamily: "Jost-Regular",
            color: "#3A1711",
          }}
          selectedValue={value}
          onValueChange={(itemValue) => setValue(itemValue)}
        >
          {validatePickerGenre.map((element) => (
            <PickerSelect.Item
              key={element.key}
              label={element.label}
              value={element.value}
            />
          ))}
        </PickerSelect>
      </PickerContainer>
    </Container>
  );
};

export default FormPick;
