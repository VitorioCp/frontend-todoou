import { Logo } from "../../pages/Login/style";
import LogoTodoou from "../../assets/logo.png";

export const HeaderLogo = () => {
  return (
    <Logo>
      <span>
        <img src={LogoTodoou} alt="" />
      </span>
      <h1>Todoou</h1>
    </Logo>
  );
};
