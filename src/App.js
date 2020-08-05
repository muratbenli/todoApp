import React from 'react';
import './main.css';
import {TodoProvider} from "./context/TodoContext";
import TodoForm from "./components/TodoForm";

function App() {
  return (
      <TodoProvider>
          <TodoForm />
      </TodoProvider>
  );
}

export default App;
