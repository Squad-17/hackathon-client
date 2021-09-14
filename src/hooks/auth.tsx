import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';

type AuthState = {
  token: string;
  nome: string;
};

type SignUpCredentials = {
  nome: string;
  email: string;
  cargo: string;
  senha: string;
};

type SignInCredentials = Omit<SignUpCredentials, 'nome'|'cargo'>;

type AuthContextData = {
  name: string;
  signUp(credentials: SignUpCredentials): Promise<void>;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('FCAMARA_TOKEN');
    const nome = localStorage.getItem('FCAMARA_NOME');

    if (token && nome) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, nome };
    }

    return {} as AuthState;
  });

  function handleResponse({ token, nome }: AuthState) {
    localStorage.setItem('FCAMARA_TOKEN', token);
    localStorage.setItem('FCAMARA_NOME', nome);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, nome });
  }

  async function signUp({ nome, email, cargo, senha }: SignUpCredentials) {
    const response = await api.post('funcionario/cadastrar', {
      nome,
      email,
      cargo,
      senha,
    });

    handleResponse(response.data);
  }

  async function signIn({ email, senha }: SignInCredentials) {
    const response = await api.post('funcionario/login', {
      email,
      senha,
    });

    handleResponse(response.data);
  }

  function signOut() {
    localStorage.removeItem('FCAMARA_TOKEN');
    localStorage.removeItem('FCAMARA_NOME');

    setData({} as AuthState);
  }

  return (
    <AuthContext.Provider value={{ name: data.nome, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
