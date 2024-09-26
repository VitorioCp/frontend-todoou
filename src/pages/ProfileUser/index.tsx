import { useEffect, useState } from "react";
import { FaCheck, FaTasks } from "react-icons/fa";
import { Container } from "../Login/style";
import { ButtonFooter, SideBarTask } from "../Tasks/style";
import { Link } from "react-router-dom";
import { HeaderTask } from "../../components/HeaderTask";
import {
  BoardItensUser,
  BoardTaskUser,
  BoxFilter,
  FilterButtonUser,
  UserPerfil,
} from "./style";
import { MdOutlineClose } from "react-icons/md";
import { api } from "../../services/api";

interface Task {
  id: number;
  title: string;
  statusTask: boolean;
  description: string;
}

export const ProfileUser = () => {
  const [selectedFilter, setSelectedFilter] = useState<
    "completed" | "incomplete"
  >("incomplete");
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async (filter: "completed" | "incomplete") => {
    try {
      const response = await api.get<Task[]>("/task");
      const filteredTasks = response.data.filter((task) =>
        filter === "completed" ? task.statusTask : !task.statusTask
      );
      setTasks(filteredTasks);
    } catch (error) {
      console.error("Erro ao buscar as tarefas", error);
    }
  };

  useEffect(() => {
    if (selectedFilter) {
      fetchTasks(selectedFilter);
    }
  }, [selectedFilter]);

  return (
    <>
      <Container>
        <HeaderTask />

        <UserPerfil>
          <h1>Suas tarefas</h1>
          <h2>{localStorage.getItem("user")}</h2>
        </UserPerfil>

        <div>
          <BoxFilter>
            <FilterButtonUser
              $isSelected={selectedFilter === "completed"}
              onClick={() => setSelectedFilter("completed")}
            >
              <FaCheck fontSize={25} />
            </FilterButtonUser>

            <FilterButtonUser
              $isSelected={selectedFilter === "incomplete"}
              onClick={() => setSelectedFilter("incomplete")}
            >
              <MdOutlineClose fontSize={25} />
            </FilterButtonUser>
          </BoxFilter>

          <BoardTaskUser>
            {tasks.map((task) => (
              <BoardItensUser key={task.id}>
                <span>{task.title}</span>
                <span>{task.description}</span>
              </BoardItensUser>
            ))}
          </BoardTaskUser>
        </div>

        <SideBarTask>
          <Link to={"/tasks"}>
            <ButtonFooter>
              <FaTasks fontSize={28} />
            </ButtonFooter>
          </Link>
        </SideBarTask>
      </Container>
    </>
  );
};
