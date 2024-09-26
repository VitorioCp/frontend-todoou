import { HeaderLogo } from "../../components/HeaderLogo/index.tsx";
import { LoginForm } from "../../components/Login/index.tsx";
import { Container} from "./style.ts";
export const Login = () => {
  return (
    <>
      <Container>
        <HeaderLogo/>
        <h2>
          O maior software <span>GERENCIAMENTO</span> no mercado
        </h2>
        <LoginForm/>
      </Container>
    </>
  );
};
