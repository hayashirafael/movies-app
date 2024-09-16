import { TextInputProps } from 'react-native';
import * as S from './styles';
import { useState } from 'react';
import { useTheme } from 'styled-components/native';
import { LucideIcon, CircleX } from 'lucide-react-native';
import { Typography } from '@components/Typography';

export interface IInputProps extends TextInputProps {
  errorMessage?: string
  isValid?: boolean
  icon: LucideIcon
  label: string
}

export function Input({ icon: Icon, value, onChangeText, label, errorMessage, isValid = false, ...props }: IInputProps) {
  const { COLORS } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  return (
    <S.Container>
      <S.InputContainer focused={isFocused}>
        <Icon
          width={24}
          height={24}
          style={{ marginLeft: 14 }}
          color={COLORS.WHITE}
        />
        <S.VerticalInputContainer>
          {
            !!value?.length && (
              <S.InputLabel focused={isFocused}>
                {label}
              </S.InputLabel>
            )
          }

          {/* <S.HorizontalInputContainer> */}
          <S.Input
            placeholder={label}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={onChangeText}
            focused={isFocused}
            value={value}
            {...props}
          />

          {/* </S.HorizontalInputContainer> */}

        </S.VerticalInputContainer>

        <S.ClearButton
          onPress={() => onChangeText?.('')}
          style={{ marginLeft: 'auto' }}
        >
          <CircleX
            style={{ marginRight: 14 }}
            width={24}
            height={24}
            color={COLORS.WHITE}
          />
        </S.ClearButton>

      </S.InputContainer>

      {
        !!errorMessage && (
          <Typography text={errorMessage} color={COLORS.RED} />
        )
      }

    </S.Container>
  )
}