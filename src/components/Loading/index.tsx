import { LoadIndicator } from "./styles";
import { ActivityIndicatorProps } from "react-native";
import theme from '../../theme/index'

type Props = ActivityIndicatorProps & {
  color?: string
}

export function Loading({ color, ...rest }: Props) {
  return (
    <LoadIndicator
      testID="loading"
      color={theme.COLORS.WHITE}
      {...rest}
    />
  )
}