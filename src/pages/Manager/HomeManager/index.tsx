import React, { useEffect, useState } from "react";

// Libs
import { useSelector } from "react-redux";
import _ from "lodash";

// Components
import HeaderBack from "../../../components/HeaderBack";

// Store
import { ReduxState } from "../../../store/reducer";
import { mammalsState } from "../../../store/reducer/mammals";

// Utils
import { renderSex } from "../../../utils";

// Styles
import {
  Container,
  Content,
  SearchContainer,
  SearchText,
  ListMammals,
  ItemContainer,
  ItemDescription,
  ItemTitle,
  ItemLine,
  Separator,
  Title,
  EmptyContainer,
  TextEmpty,
  TextEmptyDescription
} from "./styles";

// Icons
import SvgSearch from "../../../assets/images/Search";
import Empty from "../../../assets/images/Empty";

const HomeManager = ({ navigation, route }: any) => {
  const params = route?.params;
  const mammals = useSelector(
    (state: ReduxState) => state.mammals.data.mammals
  );
  const [listMammalsAll, setListMammalsAll] = useState(
    mammals.filter((item) => item.type === params?.type)
  );
  const [listMammalsFilter, setListMammalsFilter] = useState([]);

  const initList = () => {
    setListMammalsFilter(listMammalsAll);
  };

  useEffect(() => {
    initList();
  }, []);

  const handlerSearch = (text: string) => {
    const lowerText = text.toLowerCase();
    const data = listMammalsAll.filter(
      (item: mammalsState) =>
        String(item.id).toLowerCase().includes(lowerText) ||
        item.race.toLowerCase().includes(lowerText) ||
        renderSex(item.sex)?.toLowerCase().includes(lowerText)
    );
    setListMammalsFilter(data);
  };

  return (
    <Container>
      <HeaderBack />
      <Content>
        <SearchContainer>
          <SvgSearch height={20} width={20} style={{ marginLeft: 10 }} />
          <SearchText
            placeholder="Pesquisar..."
            onChangeText={(text) => {
              handlerSearch(text);
            }}
          />
        </SearchContainer>
        <Separator />
        <Title>
          Lista de {params?.type}s: {listMammalsFilter.length}
        </Title>
        <Separator />
        <ItemLine />
        <ListMammals
          data={listMammalsFilter}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => {
            const { id, race, sex } = item.item;
            return (
              <ItemContainer
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate("ManagerDetails", {mammals: item.item})
                }
              >
                <ItemTitle>
                  ID do animal: <ItemDescription>{id}</ItemDescription>
                </ItemTitle>
                <ItemTitle>
                  Raça do animal: <ItemDescription>{race}</ItemDescription>
                </ItemTitle>
                <ItemTitle>
                  Sexo do animal:{" "}
                  <ItemDescription>{renderSex(sex)}</ItemDescription>
                </ItemTitle>
                <ItemLine />
              </ItemContainer>
            );
          }}
          ListEmptyComponent={() => (
            <EmptyContainer>
              <Empty />
              <TextEmpty>Ops! Nada por aqui...</TextEmpty>
              <TextEmptyDescription>{'Cadastre seus animais\ne eles irão ser aparecer aqui.'}</TextEmptyDescription>
            </EmptyContainer>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Content>
    </Container>
  );
};

export default HomeManager;
