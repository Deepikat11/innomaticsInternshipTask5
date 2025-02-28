import React from "react";
import ToDoList from "./ToDoList";
import "./App.css"; // Keep this only if you need custom styles

function App() {
  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <ToDoList />
    </div>
  );
}

export default App;
