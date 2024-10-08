import { MovieDTO } from "@dtos/movie";
import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ItemSeparator = styled.View`
  height: 16px;
  
`;

export const MoviesList = styled(FlatList as new (props: FlatListProps<MovieDTO>) => FlatList<MovieDTO>)``;