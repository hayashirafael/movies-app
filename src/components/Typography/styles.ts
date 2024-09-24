import styled from "styled-components/native";

const getFontFamily = (fontType?: string) => {
  switch (fontType) {
    case 'BOLD':
      return 'Nunito_700Bold';
    case 'MEDIUM':
      return 'Nunito_500Medium';
    case 'REGULAR':
      return 'Nunito_400Regular';
    default:
      return 'Nunito_400Regular';
  }
};

export const Typography = styled.Text<{color?: string, font?: string, align?: string, size?: number}>`
  color: ${({ theme, color }) => color ? color : theme.COLORS.WHITE};
  text-align: ${({ align }) => align ? align : 'left'};
  font-size: ${({ size }) => size ? size + 'px' : '16px'};
  font-family: ${({font}) => getFontFamily(font) };
  `;
