import styled from "styled-components/native";
import { ITypographyProps } from "@components/Typography";

export const Typography = styled.Text<ITypographyProps>`
  color: ${({ theme, color }) => color ? color : theme.COLORS.WHITE};
  text-align: ${({  align }) => align ? align : 'left'};
  `;
