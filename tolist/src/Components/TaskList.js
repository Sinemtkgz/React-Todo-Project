import TaskShow from "./TaskShow";

function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return (
          <TaskShow
            task={task}
            key={index}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
