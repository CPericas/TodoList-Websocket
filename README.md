# 📝 Real-Time To-Do List App

A full-stack real-time to-do list application built with **React**, **TypeScript**, **Flask**, and **Socket.IO**. Users can add, remove, and toggle tasks with updates syncing across all connected clients in real-time.

## 🚀 Features

- 📡 Real-time task updates via WebSockets
- ✅ Add, remove, and toggle task completion
- 🧠 Full-stack integration (React frontend + Flask backend)
- 💬 WebSocket event-driven communication (`socket.io`)
- 🎨 Clean, responsive UI using React Bootstrap

## 🛠️ Tech Stack

**Frontend:**
- React
- TypeScript
- React Bootstrap
- Socket.IO Client

**Backend:**
- Python
- Flask
- Flask-SocketIO

---

## 📦 Project Structure

root/
├── backend/
│ ├── app.py
│ └── web_socket_server.py
├── frontend/
│ ├── App.tsx
│ └── component/
│ ├── TaskInput.tsx
│ └── TaskList.tsx
