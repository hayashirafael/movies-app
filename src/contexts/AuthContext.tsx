import { createContext, ReactNode, useState } from "react";

export type AuthContextDataProps = {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLogged: boolean;
}

type AuthContextProviderProps = {
  children: ReactNode;
}


export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isLogged, setIsLogged] = useState<boolean>(false);


  async function signIn(user: string, password: string) {
    try {
      if (user === 'user' && password === '123') {
        setIsLogged(true);
      }
    } catch (error) {
      throw error
    }
  }

  async function signOut() {

  }

  return (
    <AuthContext.Provider value={{
      isLogged,
      signIn,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  )
}