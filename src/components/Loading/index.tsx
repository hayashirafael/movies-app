import { LoadIndicator } from "./styles";
import { ActivityIndicatorProps } from "react-native";
import { useTheme } from "styled-components/native";

type Props = ActivityIndicatorProps & {
  color?: string
}

export function Loading({ color, ...rest }: Props) {
  // const { COLORS } = useTheme();
  return (
    <LoadIndicator
      color='#EC8B00'
      {...rest}
    />
  )
}