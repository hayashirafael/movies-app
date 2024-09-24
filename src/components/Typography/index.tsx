import { TextProps } from "react-native";
import * as S from "./styles";

export interface ITypography extends TextProps {
  text: string
  color?: string
  size?: number
  align?: 'left' | 'center' | 'right'
  fontFamily?: 'REGULAR' | 'MEDIUM' | 'BOLD'
}

export function Typography({ text, color, size, align, fontFamily, ...props }: ITypography) {
  return (
    <S.Typography
      color={color}
      size={size}
      align={align}
      font={fontFamily}
      {...props}
    >
      {text}
    </S.Typography>
  )
}