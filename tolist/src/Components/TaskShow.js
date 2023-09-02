import { useState } from "react";
function TaskShow({ task, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="task-show">
      <p className="show-title">{task.title}</p>
      <div className="show-button">
        <button onClick={handleDelete}>Del</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
}

export default TaskShow;
