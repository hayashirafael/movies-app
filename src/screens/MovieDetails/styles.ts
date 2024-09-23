import { MovieDTO } from "@dtos/movie";
import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
`;

export const PosterImage = styled.Image`
  height: 526px;
  width: 100%;
`;

export const TitleContainer = styled.View`
  padding: 32px 0 16px 0;
`;

export const TextContainer = styled.View`
  padding: 0 16px;
`;

export const OverviewContainer = styled.View`
  padding-top: 16px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 16px;
  margin-bottom: 16px;
  margin-top: 32px;
`;