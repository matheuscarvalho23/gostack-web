import React, { createContext, useCallback, useState } from "react";

import api from '../services/api';

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: object;
}

interface AuthContextData {
  user: object;
  signIn(credencials: SignInCredencials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user  = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user)}
    }

    return {} as AuthState;
  });
  // Método de Login
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data.list;

    localStorage.setItem('@GoBarber:token',token);
    localStorage.setItem('@GoBarber:user',JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
