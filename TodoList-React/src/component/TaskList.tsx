import { Button, ListGroup } from "react-bootstrap";

type TaskListProps = {
  tasks: any[];
  socket: any;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, socket }) => {
  const toggleTask = (taskId: number) => {
    socket.emit("toggle_task", taskId);
  };

  const removeTask = (taskId: number) => {
    socket.emit("remove_task", taskId);
  };

  return (
    <ListGroup className="mt-3">
      {tasks.map((task) => (
        <ListGroup.Item key={task.id} className="d-flex justify-content-between">
          <span 
            style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </span>
          <Button variant="danger" size="sm" onClick={() => removeTask(task.id)}>Remove</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskList;
