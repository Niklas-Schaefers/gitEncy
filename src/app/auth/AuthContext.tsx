import React, {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useState,
} from "react";
import { User } from "../../types";

export const AuthContext = createContext<unknown>(undefined);

type AuthProps = {
  children: ReactElement;
};

export function AuthProvider({ children }: AuthProps): JSX.Element {
  const [user, setUser] = useState<User>();

  const loginWithCode = useCallback(
    (code: string) => {
      if (user) {
        return;
      }
      fetch("/oauth/github/login", {
        method: "POST",
        body: JSON.stringify({ code }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((user: User) => setUser(user))
        .catch(console.error);
    },
    [user]
  );

  const logout = () => {
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ user, loginWithCode, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuth(): any {
  return useContext(AuthContext);
}

export function useUser(): User {
  return useAuth().user;
}
