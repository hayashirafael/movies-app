import { LoadIndicator } from "./styles";
import { ActivityIndicatorProps } from "react-native";

type Props = ActivityIndicatorProps & {
  color?: string
}

export function Loading({ color, ...rest }: Props) {
  return (
    <LoadIndicator
      color='#EC8B00'
      {...rest}
    />
  )
}