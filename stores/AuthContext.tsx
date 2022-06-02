import { createContext, ReactNode, useEffect, useState } from "react";

export interface User {
  user: null;
  login: () => {};
  logout: () => {};
  authReady: false;
};

export const DefaultUser = {
  user: null,
  login: () => { },
  logout: () => { },
  authReady: false,
};

export const AuthContext = createContext({
  user: null,
  login: () => { },
  logout: () => { },
  authReady: false,
});

export interface AuthContextProviderProps {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    // Init netlify identity connection

  }, []);

  const login = () => {
    // Login
  };

  return (
    <AuthContext.Provider value={user || DefaultUser}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
