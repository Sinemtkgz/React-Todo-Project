import React, { useState } from "react";

function TaskCreate({ onCreate, task, taskformedit }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
    //bu add e tıkladığımda içeriğini boşaltır.
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="task-create">
      <h1 className="title">Get Things Done !</h1>
      <form className="task-form">
        <input
          placeholder="What is the task today?"
          className="todo-input"
          type="text"
          onChange={handleChange}
          value={title}
        />
        <button className="button-add" onClick={handleSubmit}>
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;
