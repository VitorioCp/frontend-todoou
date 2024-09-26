// components/Login.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import {
  Form,
  Input,
  InputContainer,
  Invalid,
  PasswordIcon,
  UserIcon,
} from "../../pages/Login/style";
import { api } from "../../services/api";

export const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { checkAuth } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!login || !password) {
      console.error("Os campos de login e senha são obrigatórios.");
      setErrorMessage("Preencha todos os campos");

      return;
    }

    try {
      const response = await api.post("/user", {
        login,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", login);
      navigate("/tasks");
      await checkAuth();
      window.location.reload();
    } catch (error) {
      console.error("Erro no login:", error);
      setErrorMessage("O usuário ou a senha estão incorretos!");
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <InputContainer>
        <UserIcon />
        <Input
          placeholder="Login"
          type="text"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
      </InputContainer>

      <InputContainer>
        <PasswordIcon />
        <Input
          placeholder="••••"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </InputContainer>
      {errorMessage && <Invalid>{errorMessage}</Invalid>}

      <span>Esqueceu a sua senha?</span>
      <button type="submit">Login</button>

      <Link to={"/register"}>
        <button>Registrar</button>
      </Link>
    </Form>
  );
};
