import TaskItem from "./TaskItem";

function TaskList({ tarefas, setTarefas }) {

  function concluirTarefa(id) {
    setTarefas(prevTarefas =>
      prevTarefas.map(tarefa =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  }

  function excluirTarefa(id) {
    setTarefas(prevTarefas =>
      prevTarefas.filter(tarefa => tarefa.id !== id)
    );
  }

  return (
    <section className="tasks-section">
  <div className="section-header">
    <div>
      <span className="section-label">ATIVIDADES</span>
      <h2>Lista de Tarefas</h2>
    </div>

    <span className="task-count">{tarefas.length} tarefas</span>
  </div>

  {tarefas.map(tarefa => (
    <TaskItem
      key={tarefa.id}
      titulo={tarefa.titulo}
      concluida={tarefa.concluida}
      onConcluir={() => concluirTarefa(tarefa.id)}
      onExcluir={() => excluirTarefa(tarefa.id)}
    />
  ))}
</section>
  );
}

export default TaskList;