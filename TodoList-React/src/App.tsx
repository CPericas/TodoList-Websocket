import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import TaskList from "./component/TaskList";
import TaskInput from "./component/TaskInput";
import { Container, Spinner } from "react-bootstrap";

const socket = io("http://127.0.0.1:5000");

function App() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    socket.on("update_tasks", (newTasks) => {
      setTasks(newTasks);
      setLoading(false);
    });

    return () => {
      socket.off("update_tasks");
    };
  }, []);

  return (
    <Container>
      <h1>Real-Time To-Do List</h1>
      <TaskInput socket={socket} />
      {loading ? (
        <div className="text-center mt-3">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <TaskList tasks={tasks} socket={socket} />
      )}
    </Container>
  );
}

export default App;

