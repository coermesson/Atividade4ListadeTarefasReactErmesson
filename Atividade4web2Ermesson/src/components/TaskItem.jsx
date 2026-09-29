function TaskItem({ titulo, concluida, onConcluir, onExcluir }) {
  return (
    <div className={`task-card ${concluida ? "completed" : ""}`}>
      <div className="task-content">
        <div>
          <h3>{titulo}</h3>

          <span className={`task-status ${concluida ? "status-completed" : "status-pending"}`}>
            {concluida ? "Concluída" : "Pendente"}
          </span>
        </div>
      </div>

      <div className="task-actions">
        {!concluida && (
          <button className="complete-button" onClick={onConcluir}>
            Concluir
          </button>
        )}

        <button className="delete-button" onClick={onExcluir}>
          Excluir
        </button>
      </div>
    </div>
  );
}

export default TaskItem;