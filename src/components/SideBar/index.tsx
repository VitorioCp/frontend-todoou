import { FaRegCircleUser } from "react-icons/fa6";
import { ButtonFooter, SideBarTask } from "../../pages/Tasks/style";
import { ModalGroupTask } from "../ModalGroupTask";
import { Link } from "react-router-dom";

interface SideBarProps {
  onGroupCreated: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ onGroupCreated }) => {
  return (
    <>
      <SideBarTask>
        <ModalGroupTask onGroupCreated={onGroupCreated} />
        <Link to={"/user"}>
          <ButtonFooter>
            <FaRegCircleUser fontSize={28} />
          </ButtonFooter>
        </Link>
      </SideBarTask>
    </>
  );
};
