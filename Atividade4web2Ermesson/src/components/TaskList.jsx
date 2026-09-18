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
    <section>
      <h2>Lista de Tarefas</h2>

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