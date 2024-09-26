export interface Task {
    id: number;
    title: string;
    statusTask: boolean;
    data: string;
    groupId: number;
    description: string;
  }
  
export  interface GroupTask {
    id: number;
    groupTitle: string;
  }
  
export  interface BoardRenderGroupProps {
    filteredGroupTasks: GroupTask[];
    tasks: Task[];
    fetchGroupTasks: () => void;
    fetchTasks: () => void;
    handlCheckBox: (taskId: number) => void;
  }