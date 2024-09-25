import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  padding: 0 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  align-items: center;
`;

export const MenuContainer = styled.View`
  margin-left: auto;
`;

export const LogoutPopContainer = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GREY500};
  padding: 10px 24px;
  align-items: center;
  border-radius: 8px;
`;

export const MenuIconTouchable = styled.TouchableOpacity``;