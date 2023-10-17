import React from "react";

// Components
import HeaderBack from "../../../components/HeaderBack";

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

const ManagerDetails = ({ navigation, route }: any) => {
  const params = route?.params?.mammals;
  return (
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
        <ButtonEdit>
          <TextEdit>Editar animal</TextEdit>
        </ButtonEdit>
        <Separator />
        <ButtonExclud>
          <TextExclud>Excluir animal</TextExclud>
        </ButtonExclud>
        <Separator />
      </Content>
    </Container>
  );
};

export default ManagerDetails;
