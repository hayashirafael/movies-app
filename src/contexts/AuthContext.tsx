import { createContext, ReactNode, useState } from "react";

export type AuthContextDataProps = {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
  authError: string | null;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));

  async function signIn(user: string, password: string) {
    try {
      setIsLoading(true);
      setAuthError(null);
      await sleep();
      if (user === 'user' && password === '123') {
        setIsAuthenticated(true);
      } else {
        setAuthError('Usuário ou senha incorreto');
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false);
    }
  }

  async function signOut() {
    try {
      setIsAuthenticated(false)
    } catch (error) {
      throw error;
    }
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      isLoading,
      authError,
      signIn,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  )
}