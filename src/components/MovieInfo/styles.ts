import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 8px;
  padding: 8px;
  background-color: ${({theme}) => theme.COLORS.GREY500};
  width: 47%;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BottomContainer = styled.View`
  margin-top: 8px;
`;
