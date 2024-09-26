import { useEffect, useState } from "react";
import { Container } from "./style";
import { SideBar } from "../../components/SideBar";
import { SearchComponent } from "../../components/SearchComponent";
import { HeaderTask } from "../../components/HeaderTask";
import { BoardRenderGroup } from "../../components/BoardRenderGroup";
import { api } from "../../services/api";

interface Task {
  id: number;
  title: string;
  statusTask: boolean;
  data:string;
  groupId: number; 
  description: string;
}

interface GroupTask {
  id: number;
  groupTitle: string;
}

export const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [groupTasks, setGroupTasks] = useState<GroupTask[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchTasks = async () => {
    try {
      const response = await api.get<Task[]>("/task");
      setTasks(response.data);
    } catch (error) {
      console.error("Erro ao buscar as tarefas", error);
    }
  };

  const fetchGroupTasks = async () => {
    try {
      const response = await api.get<GroupTask[]>("/grouptasks");
      setGroupTasks(response.data);
    } catch (error) {
      console.error("Erro ao buscar os grupos de tarefas", error);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchGroupTasks();
  }, []);

  const filteredGroupTasks = groupTasks.filter((group) =>
    group.groupTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <HeaderTask />

      <SearchComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <BoardRenderGroup
        filteredGroupTasks={filteredGroupTasks}
        tasks={tasks}
        handlCheckBox={(taskId: number) => {
          const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.statusTask } : task
          );
          setTasks(updatedTasks);
        }}
        fetchGroupTasks={fetchGroupTasks}
        fetchTasks={fetchTasks}  
      />

      <SideBar onGroupCreated={fetchGroupTasks} />
    </Container>
  );
};
