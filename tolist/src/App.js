import "./App.css";
import TaskCreate from "./Components/TaskCreate";
import { useState } from "react";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title) => {
    const createdTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
      },
    ];
    setTasks(createdTask);
  };

  const deleteTask = (id) => {
    const afterDeleteTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeleteTasks);
  };

  const editTask = (id, newTitle) => {
    const updateTasks = tasks.map((task) => {
      if (task.id === id)
        return {
          id,
          title: newTitle,
        };

      return task;
    });
    setTasks(updateTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
      {/* ekrana basma işlemi */}
    </div>
  );
}

export default App;
