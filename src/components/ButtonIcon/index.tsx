import { TouchableOpacityProps } from 'react-native';
import * as S from './styles'
import { LucideIcon } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

export type IButtonIcon = TouchableOpacityProps & {
  icon: LucideIcon
  iconColor: string
  iconBgColor: string
  fill?: boolean
}

export function ButtonIcon({ icon: Icon, fill, iconBgColor, iconColor, ...rest }: IButtonIcon) {
  const { COLORS } = useTheme();
  return (
    <S.TouchableOpacityIcon {...rest}>
      <S.IconContainer bgColor={iconBgColor}>
        <Icon
          width={14}
          height={14}
          color={iconColor ? iconColor : COLORS.GREY200}
          fill={fill ? iconColor : 'transparent'}
        />
      </S.IconContainer>
    </S.TouchableOpacityIcon>
  );
};