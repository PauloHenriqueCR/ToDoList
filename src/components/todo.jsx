import React, { useState } from "react";

const Todo = ({ todo, removeTodo, completeTodo, save }) => {
  
  // Estado para alternar entre visualização e edição
  const [edit, setEdit] = useState(true);
  // Estado para armazenar o texto editado da tarefa
  const [textUpdate, setTextUpdate] = useState(todo.text);
  // Estado para armazenar a categoria editada da tarefa
  const [category, setCategory] = useState(todo.category);

  // Atualiza o texto da tarefa durante a edição
  const handleText = (e) => setTextUpdate(e.target.value);
  // Atualiza a categoria da tarefa durante a edição
  const handleCategory = (e) => setCategory(e.target.value);

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        {edit ? (
          <p className="task">{todo.text}</p>
        ) : (
          <input
            type="text"
            className="task-text"
            value={textUpdate}
            onChange={handleText}
          />
        )}

        {edit ? (
          <p className="category">{todo.category}</p>
        ) : (
          <select value={category} onChange={handleCategory}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
          </select>
        )}
      </div>

       {/* Botões de ação: completar, remover, editar e salvar */}
      <div className="btn-todo">
        <button
          className="complete btn"
          aria-label="Completar"
          onClick={() => completeTodo(todo.id)}
        >
          ✔️
        </button>
        <button
          className="remove btn"
          aria-label="Remover"
          onClick={() => removeTodo(todo.id)}
        >
          ❌
        </button>
        <button
          className="update btn"
          aria-label="Editar"
          onClick={() => setEdit((prev) => !prev)}
        >
          🖊️
        </button>

        {/* Exibe o botão Salvar apenas no modo de edição */}
        {!edit && (
          <button
            className="save btn"
            aria-label="Salvar"
            onClick={() => {
              save(todo.id, textUpdate, category);
              setEdit(true);
            }}
          >
            💾
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;