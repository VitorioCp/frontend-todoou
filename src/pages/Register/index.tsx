import { FormEvent, useState } from "react";
import {
  Container,
  EmailICon,
  Form,
  Input,
  InputContainer,
  Invalid,
  PasswordIcon,
  UserIcon,
} from "../Login/style";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { HeaderLogo } from "../../components/HeaderLogo";
import { Title, LinkInfo } from "./style";

export const Register = () => {
  const [login, setLogin] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handlRegister = async (e: FormEvent) => {
    e.preventDefault();
    if (!login || !email || !password || !passwordConfirmation) {
      console.error("Os campos de login e senha são obrigatórios.");
      setErrorMessage("Preencha todos os campos");
      return;
    }
    if (password.length < 5) {
      console.error("A senha deve ter pelo menos 5 caracteres.");
      setErrorMessage("A senha deve ter pelo menos 5 caracteres");
      return;
    }
    
    try {
      const response = await api.post("/register", {
        login,
        email,
        password,
        confirmationPassword: passwordConfirmation,
      });
      alert("Criado com sucesso");
      console.log("Registrado com sucesso", response);
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log("Erro ao tentar enviar os dados para o servidor", error);
    }
  };

  return (
    <Container>
      <HeaderLogo />
      <Form onSubmit={handlRegister}>
        <Title>
          <h2>
            Tenha controle de suas <b>tarefas</b> do dia a dia
          </h2>
        </Title>

        <InputContainer>
          <UserIcon />
          <Input
            type="text"
            placeholder="Login"
            value={login}
            id="loginRegister"
            onChange={(e) => setLogin(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <EmailICon />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            id="email"
            onChange={(e) => setemail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <PasswordIcon />
          <Input
            type="password"
            placeholder="password"
            value={password}
            id="passwordRegister"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <PasswordIcon />
          <Input
            type="password"
            placeholder="password Confirmation"
            id="passwordConfirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </InputContainer>
        
        <LinkInfo>Alguma duvida?</LinkInfo>
        {errorMessage && <Invalid>{errorMessage}</Invalid>}
        <button type="submit">Registrar</button>

        <Link to={"/"}>
          <button>Voltar</button>
        </Link>
      </Form>
    </Container>
  );
};
