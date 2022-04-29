
import { Context, createContext } from "react";

interface ContextType {
  theme?: string,
  language?: string,
  country?: string,
}

export const AppContext: Context<ContextType> = createContext({});

export default AppContext;
