import { RiLogoutBoxLine } from "react-icons/ri";
import { Header, Logout } from "../../pages/Tasks/style";
import LogoTodoou from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export const HeaderTask = () => {
    const navigate = useNavigate()

  const HandlLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };
  return (
    <Header>
      <span>
        <img src={LogoTodoou} alt="Logo Todoou" />
        <h1>Todoou</h1>
      </span>
      <Logout onClick={HandlLogout}>
        <RiLogoutBoxLine />
      </Logout>
    </Header>
  );
};
