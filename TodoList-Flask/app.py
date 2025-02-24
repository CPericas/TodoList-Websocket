from web_socket_server import WebSocketServer, socketio, app

tasks = []

app = WebSocketServer().create_app()

@app.route('/')
def index():
    return "WebSocket To-Do List Server"

@socketio.on('connect')
def handle_connect():
    print('Client connected.')
    socketio.emit('update_tasks', tasks)

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected.')

@socketio.on('add_task')
def handle_add_task(task):
    tasks.append(task)
    print(f'Task added: {task}')
    socketio.emit('update_tasks', tasks)

@socketio.on('remove_task')
def handle_remove_task(task_id):
    global tasks
    tasks = [task for task in tasks if task["id"] != task_id]
    print(f'Task removed: {task_id}')
    socketio.emit('update_tasks', tasks)

@socketio.on('toggle_task')
def handle_toggle_task(task_id):
    for task in tasks:
        if task["id"] == task_id:
            task["completed"] = not task["completed"]
            break
    print(f'Task toggled: {task_id}')
    socketio.emit('update_tasks', tasks)

if __name__ == '__main__':
    socketio.run(app)
