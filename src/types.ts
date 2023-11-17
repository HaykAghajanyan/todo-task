export type Status = 'Pending' | 'Completed' | 'Overdue' | 'Removed';

export interface Task {
  id: string;
  title: string;
  description?: string;
  deadline?: string;
  status: Status;
}

export interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onRemove: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export interface SingleTaskProps {
  task: Task;
  isInTrash: boolean;
  onEdit?: (task: Task) => void;
  onRemove?: (taskId: string) => void;
  onComplete?: (taskId: string) => void;
  handleRestoreTask?: (taskId: string) => void;
  handleRemovePermanently?: (taskId: string) => void;
}

export interface TodoState {
  tasks: Task[];
}

export interface TrashListProps {
  tasks: Task[];
}
