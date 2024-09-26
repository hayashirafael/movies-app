import { Image, Keyboard, TextInput } from "react-native";
import * as S from "./styles";
import { useTheme } from "styled-components/native";
import Logo from '../../assets/icon.png';
import { Controller, useForm } from "react-hook-form";
import { Input } from "@components/Input";
import { Lock, User } from "lucide-react-native";
import { Button } from "@components/Button";
import { Typography } from "@components/Typography";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@hooks/useAuth";

type FormDataProps = {
  user: string
  password: string
}

const signUpSchema = yup.object({
  user: yup.string().required('Informe o usuário').min(4, 'O usuário deve ter ao menos 4 caracteres'),
  password: yup.string().required('Informe a senha').min(3, 'A senha deve ao menos 3 dígitos'),
});

export function SignIn() {
  const [filled, setFilled] = useState<boolean>(false);
  const { signIn, authError } = useAuth();
  const theme = useTheme();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const passwordRef = useRef<TextInput>(null);

  const { control, handleSubmit, formState: { errors }, setError } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  function inputFilled() {
    const { user, password } = control._formValues;
    if (!!user && !!password) {
      setFilled(true);
      return;
    }
    setFilled(false);
    return;
  }

  function handleSignUp({ user, password }: FormDataProps) {
    signIn(user, password);
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
            ref={passwordRef}
            icon={Lock}
            onChangeText={onChange}
            onChange={() => inputFilled()}
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
        text="Entrar"
        isFilled={filled}
        onPress={handleSubmit(handleSignUp)}
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