"use client";
import { Login } from "@/services/auth.service";
import { UserType } from "@/types/user.type";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

type AuthContextType = {
  user: UserType | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticaded: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserType | null>(null);

  const login = async (email: string, password: string) => {
    const response = await Login(email as string, password as string);
    const { data } = response;

    if (data && data.email === email) {
      setUser(data);
      return true;
    }
    return false;
  };

  const logout = () => console.log("logout");

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticaded: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
