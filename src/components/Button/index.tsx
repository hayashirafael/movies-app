import { TouchableOpacityProps } from 'react-native';
import * as S from './styles'
import { Loading } from '@components/Loading';
export type IButtonProps = TouchableOpacityProps & {
  text: string
  textColor?: string
  isLoading?: boolean
  isFilled: boolean
}

export function Button({ text, textColor, isFilled = false, isLoading = false, ...rest }: IButtonProps) {
  return (
    <S.Button
      isFilled={isFilled}
      {...rest}
    >
      {
        isLoading ? <Loading /> :
          <S.Text isFilled={isFilled}>
            {text}
          </S.Text>

      }
    </S.Button>
  );
};