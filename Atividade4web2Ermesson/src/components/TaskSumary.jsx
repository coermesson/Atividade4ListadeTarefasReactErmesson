function TaskSummary({ tarefas }) {
  const total = tarefas.length;

  const concluidas = tarefas.filter(
    tarefa => tarefa.concluida
  ).length;

  const pendentes = tarefas.filter(
    tarefa => !tarefa.concluida
  ).length;

  return (
  <section className="summary-section">
    <div className="section-header">
      <div>
        <span className="section-label">ACOMPANHAMENTO</span>
        <h2>Resumo</h2>
      </div>
    </div>

    <div className="summary-grid">
      <div className="summary-item">
        <span>Total</span>
        <strong>{total}</strong>
      </div>

      <div className="summary-item">
        <span>Concluídas</span>
        <strong>{concluidas}</strong>
      </div>

      <div className="summary-item">
        <span>Pendentes</span>
        <strong>{pendentes}</strong>
      </div>
    </div>

    <div className="summary-message">
      {pendentes > 0 ? (
        <p>Você ainda possui tarefas pendentes.</p>
      ) : (
        <p>Parabéns! Todas as tarefas foram concluídas!</p>
      )}
    </div>
  </section>
);
}

export default TaskSummary;