import { createContext, ReactNode, useState } from "react";

export type AuthContextDataProps = {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

type AuthContextProviderProps = {
  children: ReactNode;
}


export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);


  async function signIn(user: string, password: string) {
    try {
      if (user === 'user' && password === '123') {
        setIsAuthenticated(true);
      }
    } catch (error) {
      throw error
    }
  }

  async function signOut() {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      signIn,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  )
}