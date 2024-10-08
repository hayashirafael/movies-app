import { AuthContextProvider } from "@contexts/AuthContext";
import { MovieContextProvider } from "@contexts/MovieContext";
import { render, RenderOptions } from "@testing-library/react-native";
import theme from "@theme/index";
import { ReactElement } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <MovieContextProvider>
            {children}
          </MovieContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react-native';
export { customRender as render, Providers };