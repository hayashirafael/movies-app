import * as S from './styles'
import { Typography } from '@components/Typography';
import { useTheme } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function NetInfo() {
  const theme = useTheme();
  return (
    <SafeAreaView>
      <S.Container>
        <Typography text='Sem conexão com a internet' color={theme.COLORS.WHITE} />
      </S.Container>
    </SafeAreaView>
  );
}

