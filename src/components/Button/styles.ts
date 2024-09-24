import styled from "styled-components/native";

export const Button = styled.TouchableOpacity<{isFilled: boolean}>`
  background-color: ${({ theme: {COLORS }, isFilled }) => isFilled ? COLORS.ORANGE : COLORS.GREY200};
  height: 40px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Text = styled.Text<{ isFilled: boolean }>`
  font-size: 14px;
  font-family: ${({theme}) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme: { COLORS }, isFilled }) => isFilled ? COLORS.WHITE : COLORS.GREY700};
`;