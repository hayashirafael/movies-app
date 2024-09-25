import { CircleArrowRight, EllipsisVertical, Home } from 'lucide-react-native';
import * as S from './styles'
import { Typography } from '@components/Typography';
import { useTheme } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomIcon } from '@components/ButtonIcon';
import Popover from 'react-native-popover-view';
import { TouchableOpacity, Text, View } from 'react-native';
import { useAuth } from '@hooks/useAuth';

export function Header() {
  const theme = useTheme();
  const { signOut } = useAuth();
  return (
    <SafeAreaView>
      <S.Container>
        <Typography text='BRQ Movies' size={22} />

        <S.MenuContainer>
          <Popover
            arrowSize={{ width: 0, height: 0 }}
            offset={-30}
            popoverStyle={{ backgroundColor: 'transparent' }}
            from={(
              <S.MenuIconTouchable>
                <CustomIcon
                  icon={EllipsisVertical}
                  iconColor={theme.COLORS.GREY700}
                  iconBgColor={theme.COLORS.ORANGE}
                />
              </S.MenuIconTouchable>
            )}>
            <S.LogoutPopContainer onPress={() => signOut()}>
              <CircleArrowRight
                color={theme.COLORS.WHITE}
                size={24}
              />
              <Typography
                text='Sair'
                color={theme.COLORS.WHITE}
                size={20}
                style={{ marginLeft: 8 }}
              />
            </S.LogoutPopContainer>
          </Popover>
        </S.MenuContainer>


      </S.Container>
    </SafeAreaView>
  );
}

