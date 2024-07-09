// context/authContext.js
"use client";
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username, password) => {
    // Aqui você adicionaria a lógica para autenticar o usuário, como chamar uma API
    const authenticatedUser = { username, token: 'fake-jwt-token' }; // Exemplo de resposta de autenticação
    setUser(authenticatedUser);
    localStorage.setItem('user', JSON.stringify(authenticatedUser));
    router.push('/dashboard'); // Redirecionar após o login
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/login'); // Redirecionar após o logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
