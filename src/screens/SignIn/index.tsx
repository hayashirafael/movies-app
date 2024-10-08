import { useEffect, useRef, useState } from "react";
import { Image, Keyboard, TextInput } from "react-native";
import * as S from "./styles";
import { Typography } from "@components/Typography";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useAuth } from "@hooks/useAuth";
import { useTheme } from "styled-components/native";
import { Controller, useForm } from "react-hook-form";
import { Lock, User } from "lucide-react-native";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import Logo from '../../assets/icon.png';

type FormDataProps = {
  user: string
  password: string
}

const signUpSchema = yup.object({
  user: yup.string().required('Informe o usuário'),
  password: yup.string().required('Informe a senha'),
});

export function SignIn() {
  const [filled, setFilled] = useState<boolean>(false);
  const { signIn, authError, isLoading } = useAuth();
  const theme = useTheme();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const passwordRef = useRef<TextInput>(null);

  const { control, handleSubmit, formState: { errors }, setError, watch } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });
  const watchedFields = watch(['user', 'password']);

  function disableButton() {
    if (watchedFields[0] && watchedFields[1]) return setFilled(true);
    return setFilled(false)
  }

  function handleSignUp({ user, password }: FormDataProps) {
    try {
      signIn(user, password);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if (typeof authError === 'string') {
      setError('user', { message: authError })
      setError('password', { message: authError })
    }
  }, [authError])

  useEffect(() => {
    disableButton()
  }, [watchedFields])

  return (
    <S.Container>
      {
        !isKeyboardVisible && (
          <Image
            source={Logo}
            alt="logo do app"
            style={{ marginTop: 92, marginBottom: 68, alignSelf: 'center' }}
          />
        )
      }

      <Controller
        name="user"
        control={control}
        rules={{ required: 'Informe o usuário' }}
        render={({ field: { onChange, value } }) => (
          <Input
            testID="user-input"
            icon={User}
            onChangeText={onChange}
            value={value}
            label="Usuário"
            placeholderTextColor={theme.COLORS.WHITE}
            errorMessage={errors.user?.message}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: 'Informe a senha' }}
        render={({ field: { onChange, value } }) => (
          <Input
            testID="password-input"
            ref={passwordRef}
            icon={Lock}
            onChangeText={onChange}
            errorMessage={errors.password?.message}
            value={value}
            label="Senha"
            secureTextEntry
            keyboardType="numeric"
            placeholderTextColor={theme.COLORS.WHITE}
            onSubmitEditing={handleSubmit(handleSignUp)}
          />

        )}
      />

      <Button
        testID="submit-button"
        text="Entrar"
        isFilled={filled}
        onPress={handleSubmit(handleSignUp)}
        isLoading={isLoading}
      />

      <S.ForgotPasswordButton>
        <Typography
          text="Esqueci a Senha"
          fontFamily="MEDIUM"
        />
      </S.ForgotPasswordButton>
    </S.Container>
  );
};