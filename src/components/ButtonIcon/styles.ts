import styled from "styled-components/native";

export const IconContainer = styled.View<{bgColor: string}>`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme, bgColor}) => bgColor ? bgColor : theme.COLORS.WHITE }
`;