import { useState } from "react";
import {
  BoardHeader,
  BoardItens,
  BoardTask,
  DateBoardTask,
  HeaderOption,
  Main,
  TitleTaskBoard,
} from "../../pages/Tasks/style";
import CheckBoxTrue from "../../assets/checkbox.png";
import CheckBoxFalse from "../../assets/checkboxFalse.png";
import { api } from "../../services/api";
import { ImBin } from "react-icons/im";
import { FaPlus, FaTasks } from "react-icons/fa";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
  FormItemTask,
  ContainerInput,
  IconWrapper,
  InputModalTask,
  ButtonModalTask,
  ItemTaskHeader,
  ContainerSelect,
  SelectTask,
  ButtonModalDelete,
  TextareaModalTaskDescription,
} from "./style";
import { MdDateRange, MdOutlineDescription } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { BoardRenderGroupProps, Task } from "../../interfaces/BoardRenderGroup";
import { formatDate } from "./utils";
import { BoardHeaderTitle } from "../BoardHeaderTitle";


export const BoardRenderGroup = ({
  filteredGroupTasks,
  tasks,
  fetchGroupTasks,
  fetchTasks,
}: BoardRenderGroupProps) => {
  const [modal, setModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [titleTask, setTitleTask] = useState("");
  const [dataTask, setDataTask] = useState("");
  const [descriptionTask, setDescriptionTask] = useState("");
  const [statsTask, setStatsTask] = useState(false);
  const [activeGroupId, setActiveGroupId] = useState<number | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handlDelete = async (groupId: number) => {
    if (
      window.confirm("Tem certeza que deseja excluir este grupo de tarefas?")
    ) {
      try {
        const response = await api.delete(`/grouptasks/${groupId}`);
        if (response.status === 200) {
          console.log("Grupo de tarefas excluído com sucesso.");
          fetchGroupTasks();
        } else {
          console.error("Falha ao excluir o grupo de tarefas.");
        }
      } catch (error) {
        console.error(
          "Não foi possível enviar a solicitação para o servidor:",
          error
        );
      }
    }
  };

  const handlDeleteTask = async () => {
    if (!selectedTask) return;

    if (window.confirm("Tem certeza que deseja excluir esta tarefa?")) {
      try {
        const response = await api.delete(`/task/${selectedTask.id}`);
        if (response.status === 200) {
          console.log("Tarefa excluída com sucesso.");
          fetchTasks();
          closeModal();
        } else {
          console.error("Falha ao excluir a tarefa.");
        }
      } catch (error) {
        console.error("Erro ao excluir a tarefa:", error);
      }
    }
  };

  const handlSubmitTask = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!titleTask || !dataTask || !descriptionTask) {
      alert("Preencha os campos obrigatórios: titulo, descrição e data");
      return;
    }

    if (!activeGroupId) return;

    try {
      const response = await api.post("/task", {
        title: titleTask,
        data: dataTask,
        description: descriptionTask,
        statusTask: statsTask,
        groupId: activeGroupId,
      });
      console.log("Task criada com sucesso", response);
      setModal(false);
      fetchTasks();
    } catch (error) {
      console.error("Erro ao enviar os dados para o servidor", error);
    }
  };

  const handlModalTask = (groupId: number) => {
    setActiveGroupId(groupId);
    setTitleTask("");
    setDataTask("");
    setDescriptionTask("");
    setStatsTask(false);

    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setUpdateModal(false);
    setSelectedTask(null);
  };

  const handlUpdateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTask) return;

    try {
      const response = await api.put(`/task/${selectedTask.id}`, {
        title: titleTask,
        data: dataTask,
        description: descriptionTask,
        statusTask: statsTask,
      });
      console.log("Task atualizada com sucesso", response);
      setUpdateModal(false);
      fetchTasks();
    } catch (error) {
      console.error("Erro ao atualizar a tarefa", error);
    }
  };

  const handlStatusTask = async (taskId: number) => {
    try {
      const taskResponse = await api.get(`/task/${taskId}`);
      const taskData = taskResponse.data;

      if (!taskData) {
        console.error("Tarefa não encontrada");
        return;
      }

      const newStatus = !taskData.statusTask;

      const updateResponse = await api.put(`/task/${taskId}`, {
        statusTask: newStatus,
      });

      if (updateResponse.status === 200) {
        console.log("Status da tarefa atualizado com sucesso");
        fetchTasks();
      } else {
        console.error("Falha ao atualizar o status da tarefa.");
      }
    } catch (error) {
      console.error("Erro ao tentar atualizar o status da tarefa:", error);
    }
  };

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setTitleTask(task.title);
    setDataTask(task.data);
    setDescriptionTask(task.description);
    setStatsTask(task.statusTask);
    setUpdateModal(true);
  };

  return (
    <Main>
      {filteredGroupTasks.map((group) => (
        <BoardTask key={group.id}>
          <BoardHeader>
          <BoardHeaderTitle id={group.id} value={group.groupTitle} />
          <HeaderOption>
              <span onClick={() => handlModalTask(group.id)}>
                <FaPlus />
              </span>
              <span onClick={() => handlDelete(group.id)}>
                <ImBin />
              </span>
            </HeaderOption>
          </BoardHeader>

       
          {tasks
            .filter((task) => task.groupId === group.id)
            .map((task) => (
              <BoardItens key={task.id}>
                <span onClick={() => handlStatusTask(task.id)}>
                  {task.statusTask ? (
                    <img src={CheckBoxTrue} alt="Marcado" />
                  ) : (
                    <img src={CheckBoxFalse} alt="Desmarcado" />
                  )}
                </span>
                <TitleTaskBoard onClick={() => handleEditTask(task)}>
                  {task.title}
                </TitleTaskBoard>
                <DateBoardTask onClick={() => handleEditTask(task)}>{formatDate(task.data)}</DateBoardTask>
              </BoardItens>
            ))}
        </BoardTask>
      ))}


      {modal && (
        <ModalOverlay>
          <ModalContent>
            <ItemTaskHeader>
              <CloseButton onClick={closeModal}>
                <IoIosClose fontSize={45} />
              </CloseButton>
            </ItemTaskHeader>
            <FormItemTask onSubmit={handlSubmitTask}>
              <ContainerInput>
                <IconWrapper>
                  <FaTasks />
                </IconWrapper>
                <InputModalTask
                  type="text"
                  placeholder="Escreva sua Task"
                  onChange={(e) => setTitleTask(e.target.value)}
                />
              </ContainerInput>

              <ContainerInput>
                <IconWrapper>
                  <MdDateRange />
                </IconWrapper>
                <InputModalTask
                  type="date"
                  onChange={(e) => setDataTask(e.target.value)}
                />
              </ContainerInput>

              <ContainerInput>
                <IconWrapper>
                  <MdOutlineDescription />
                </IconWrapper>
                <TextareaModalTaskDescription
                  placeholder="Descrição"
                  onChange={(e) => setDescriptionTask(e.target.value)}
                />
              </ContainerInput>

              <ContainerSelect>
                <SelectTask
                  onChange={(e) =>
                    setStatsTask(e.target.value === "0" ? false : true)
                  }
                >
                  <option value="0">A fazer</option>
                  <option value="1">Concluído</option>
                </SelectTask>
              </ContainerSelect>

              <ButtonModalTask type="submit">Confirmar</ButtonModalTask>
            </FormItemTask>
          </ModalContent>
        </ModalOverlay>
      )}

      {updateModal && selectedTask && (
        <ModalOverlay>
          <ModalContent>
            <ItemTaskHeader>
              <CloseButton onClick={closeModal}>
                <IoIosClose fontSize={45} />
              </CloseButton>
            </ItemTaskHeader>
            <FormItemTask onSubmit={handlUpdateTask}>
              <ContainerInput>
                <IconWrapper>
                  <FaTasks />
                </IconWrapper>
                <InputModalTask
                  type="text"
                  value={titleTask}
                  onChange={(e) => setTitleTask(e.target.value)}
                />
              </ContainerInput>

              <ContainerInput>
                <IconWrapper>
                  <MdDateRange />
                </IconWrapper>
                <InputModalTask
                  type="date"
                  onChange={(e) => setDataTask(e.target.value)}
                />
              </ContainerInput>

              <ContainerInput>
                <IconWrapper>
                  <MdOutlineDescription />
                </IconWrapper>
                <TextareaModalTaskDescription
                  value={descriptionTask}
                  onChange={(e) => setDescriptionTask(e.target.value)}
                />
              </ContainerInput>

              <ContainerSelect>
                <SelectTask
                  value={statsTask ? "1" : "0"}
                  onChange={(e) =>
                    setStatsTask(e.target.value === "0" ? false : true)
                  }
                >
                  <option value="0">A fazer</option>
                  <option value="1">Concluído</option>
                </SelectTask>
              </ContainerSelect>
              <ButtonModalTask type="submit">Confirmar</ButtonModalTask>
              <ButtonModalDelete onClick={handlDeleteTask}>
                Deletar
              </ButtonModalDelete>
            </FormItemTask>
          </ModalContent>
        </ModalOverlay>
      )}
    </Main>
  );
};
