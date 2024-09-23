import { TouchableOpacityProps } from 'react-native';
import * as S from './styles'
import { Loading } from '@components/Loading';
import { LucideIcon } from 'lucide-react-native';
import { ButtonIcon } from '@components/ButtonIcon';
import { useTheme } from 'styled-components/native';
import { Typography } from '@components/Typography';

export interface IMovieInfo {
  label: string
  icon: LucideIcon
  info: string
}

export function MovieInfo({ label, icon, info }: IMovieInfo) {
  const theme = useTheme();
  return (
    <S.Container>
      <S.TopContainer>
        <ButtonIcon
          icon={icon}
          iconBgColor={theme.COLORS.GREY700}
          iconColor={theme.COLORS.ORANGE}
        />
        <Typography
          text={label}
          color={theme.COLORS.ORANGE}
          size={14}
          font='bold'
          style={{
            marginLeft: 8
          }}
        />
      </S.TopContainer>

      <S.BottomContainer>
        <Typography
          text={info}
          color={theme.COLORS.WHITE}
          size={20}
        />
      </S.BottomContainer>
    </S.Container>
  )
};