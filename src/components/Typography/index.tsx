import { TextProps } from "react-native";
import * as S from "./styles";

export interface ITypographyProps extends TextProps {
  text: string
  color?: string
  size?: number
  align?: 'left' | 'center' | 'right'
  font?: 'regular' | 'bold'
  upperCase?: boolean
}

export function Typography({ upperCase, ...props }: ITypographyProps) {
  const textChildren = upperCase ? props.text.toUpperCase() : props.text;
  return (
    <S.Typography {...props}>
      {textChildren}
    </S.Typography>
  )
}