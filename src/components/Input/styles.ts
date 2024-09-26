import { TextInput } from "react-native";
import styled from "styled-components/native";

export const InputContainer = styled.View<{ focused: boolean }>`
  background-color: ${({ theme }) => theme.COLORS.GREY500};
  flex-direction: row;
  width: 100%;
  height: 56px;
  align-items: center;
  border-radius: 4px 4px 0 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme, focused}) => focused ? theme.COLORS.ORANGE : theme.COLORS.WHITE};
  `;

export const Container = styled.View`
  flex-direction: column;
  margin-bottom: 48px;
  width: 100%;
`;

export const Input = styled(TextInput)<{ focused: boolean }>`
  color: ${({ theme}) => theme.COLORS.WHITE};
  font-size: 16px;
`;

export const ClearButton = styled.TouchableOpacity``;

export const VerticalInputContainer = styled.View`
  flex-direction: column;
  padding: 0 12px;
  width: 100%;
`;

export const HorizontalInputContainer = styled.View`
  flex-direction: row;
`;
 
export const InputLabel = styled.Text<{ focused: boolean}>`
  color: ${({ theme, focused }) => focused ? theme.COLORS.ORANGE : theme.COLORS.WHITE};
  font-size: 12px;
  height: 16px;
`;

