import { useState } from "react";
import { Button, Form } from "react-bootstrap";

type TaskInputProps = {
  socket: any;
};

const TaskInput: React.FC<TaskInputProps> = ({ socket }) => {
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() === "") return;
    const newTask = { id: Date.now(), text: taskText, completed: false };
    socket.emit("add_task", newTask);
    setTaskText("");
  };

  return (
    <Form>
      <Form.Control
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task..."
      />
      <Button onClick={addTask} className="mt-2">Add Task</Button>
    </Form>
  );
};

export default TaskInput;
