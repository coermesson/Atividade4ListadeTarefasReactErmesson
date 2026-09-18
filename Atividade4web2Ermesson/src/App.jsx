import { useState } from "react";

import Header from "./components/Header";
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";
import TaskSummary from "./components/TaskSumary";


function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      titulo: "Estudar React",
      concluida: false
    },
    {
      id: 2,
      titulo: "Fazer atividade",
      concluida: false
    },
    {
      id: 3,
      titulo: "Estudar JavaScript",
      concluida: true
    },
    {
      id: 4,
      titulo: "Entregar trabalho",
      concluida: false
    }
  ]);

  return (
    <div>
      <Header />

      <TaskList
        tarefas={tarefas}
        setTarefas={setTarefas}
      />

      <TaskSummary
        tarefas={tarefas}
      />
    </div>
  );
}

export default App;