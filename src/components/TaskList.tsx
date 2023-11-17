// import { STATUSES } from '../constants';
import { TaskListProps } from '../types';
import TaskCard from './TaskCard';


const TaskList = ({ tasks, onEdit, onRemove, onComplete }: TaskListProps) => (
  <div>
    <h2>Task List</h2>
    {
      tasks.map(task => <TaskCard
        key={task.id}
        task={task}
        onEdit={onEdit}
        isInTrash={false}
        onRemove={onRemove}
        onComplete={onComplete}
      />)
    }
  </div>
);

export default TaskList;
