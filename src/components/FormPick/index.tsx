import React from "react";

// Styles
import { Container, Title, PickerSelect, PickerContainer, ErrorText } from "./styles";

// Utils
import { validatePickerGenre } from "../../utils";

interface FormPickProps {
  titleForm: String;
  value: Number;
  setValue: (e: Number) => void;
  errorPicker: Boolean
}

const FormPick = ({ titleForm, value, setValue, errorPicker }: FormPickProps) => {
  return (
    <Container>
      <Title error={errorPicker}>{titleForm}</Title>
      <PickerContainer error={errorPicker}>
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
      {errorPicker && <ErrorText>Campo obrigatório</ErrorText>}
    </Container>
  );
};

export default FormPick;
