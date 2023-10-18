import React, { useState } from "react";


// Libs
import { useDispatch, useSelector } from "react-redux";

// Components
import HeaderBack from "../../../components/HeaderBack";
import ModalExclud from "../../../components/ModalExclud";

// Styles
import {
  Container,
  Content,
  Title,
  ItemBold,
  ItemRegular,
  Separator,
  ItemLine,
  ButtonEdit,
  TextEdit,
  ButtonExclud,
  TextExclud,
} from "./styles";

// Utils
import { renderSex } from "../../../utils";
import { ReduxState } from "../../../store/reducer";

const ManagerDetails = ({ navigation, route }: any) => {
  const params = route?.params?.mammals;
  const dispatch = useDispatch();
  const mammals = useSelector(
    (state: ReduxState) => state.mammals.data.mammals
  );

  const [visible, setVisible] = useState(false);

  const onPressDelete = () => {
    const data = mammals.filter(item => item.id !== params?.id);
    dispatch({ type: "FETCH_EXCLUD_MAMMALS", payload: data });
    navigation.navigate("Finish", {type: 'EXC'});
  };
  return (
    <>
      <ModalExclud
        visible={visible}
        setVisible={setVisible}
        onPressForm={onPressDelete}
      />
      <Container>
        <HeaderBack />
        <Content>
          <Title>Detalhes do {params.type}: </Title>
          <Separator />
          <ItemLine />
          <ItemBold>
            ID do animal: <ItemRegular>{params.id}</ItemRegular>
          </ItemBold>
          <ItemLine />
          <ItemBold>
            Sexo do animal: <ItemRegular>{renderSex(params.sex)}</ItemRegular>
          </ItemBold>
          <ItemLine />
          <ItemBold>
            Peso do animal: <ItemRegular>{params.weight} Kg</ItemRegular>
          </ItemBold>
          <ItemLine />
          <ItemBold>
            Data da pesagem: <ItemRegular>{params.dateWeight}</ItemRegular>
          </ItemBold>
          <ItemLine />
          <ItemBold>
            Raça do animal: <ItemRegular>{params.race}</ItemRegular>
          </ItemBold>
          <ItemLine />
          <ItemBold>
            Animal vacinado:{" "}
            <ItemRegular>{params.vaccinated ? "Sim" : "Não"}</ItemRegular>
          </ItemBold>
          <ItemLine />
          {params?.vaccinated && (
            <>
              <ItemBold>
                Nome da vacina: <ItemRegular>{params.nameVaccine}</ItemRegular>
              </ItemBold>
              <ItemLine />
            </>
          )}
          {params?.purchase ? (
            <>
              <ItemBold>
                Local da compra:{" "}
                <ItemRegular>
                  {params.localAcquisition || "Não definido."}
                </ItemRegular>
              </ItemBold>
              <ItemLine />
              <ItemBold>
                Data da compra:{" "}
                <ItemRegular>
                  {params.dateAcquisition || "Não definido."}
                </ItemRegular>
              </ItemBold>
              <ItemLine />
              <ItemBold>
                Raça da mãe:{" "}
                <ItemRegular>{params.raceMother || "SRD"}</ItemRegular>
              </ItemBold>
              <ItemLine />
              <ItemBold>
                Raça do pai:{" "}
                <ItemRegular>{params.raceFather || "SRD"}</ItemRegular>
              </ItemBold>
            </>
          ) : (
            <>
              <ItemBold>
                Data de nascimento do animal:{" "}
                <ItemRegular>{params.birthDate}</ItemRegular>
              </ItemBold>
              <ItemLine />
              <ItemBold>
                Raça da mãe:{" "}
                <ItemRegular>{params.raceMother || "SRD"}</ItemRegular>
              </ItemBold>
              <ItemLine />
              <ItemBold>
                Raça do pai:{" "}
                <ItemRegular>{params.raceFather || "SRD"}</ItemRegular>
              </ItemBold>
              <ItemLine />
            </>
          )}
          <Separator />
          <ButtonEdit
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Step1Edit", { ...params })}
          >
            <TextEdit>Editar animal</TextEdit>
          </ButtonEdit>
          <Separator />
          <ButtonExclud onPress={() => setVisible(true)}>
            <TextExclud>Excluir animal</TextExclud>
          </ButtonExclud>
          <Separator />
        </Content>
      </Container>
    </>
  );
};

export default ManagerDetails;
