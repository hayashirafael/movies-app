import { EllipsisVertical } from 'lucide-react-native';
import * as S from './styles'
import { Typography } from '@components/Typography';
import { useTheme } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonIcon } from '@components/ButtonIcon';

export function Header() {
  const theme = useTheme();
  return (
    <SafeAreaView>
      <S.Container>
        <Typography text='BRQ Movies' size={22} />
        <ButtonIcon
          icon={EllipsisVertical}
          iconColor={theme.COLORS.GREY700}
          iconBgColor={theme.COLORS.ORANGE}
          style={{
            marginLeft: 'auto',
          }}
        />
      </S.Container>
    </SafeAreaView>
  );
}

