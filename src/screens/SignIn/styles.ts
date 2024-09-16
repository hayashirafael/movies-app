import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme: {COLORS}}) => COLORS.GREY700};
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  height: 40px;
  margin-top: 24px;
  margin-bottom: 30px;
`;