import { useState } from "react"

const Form = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category,setCategory] = useState("")

    const handleSubmit = (e) =>{
      e.preventDefault();
      if (!value || !category) return;
      
      const idResul = Math.floor((Math.random()) * 10000);
      //adicionando todo
      addTodo(value, category, idResul)

      //limpar todo
      setValue("")
      setCategory("")
    }

  return (
  <div className='todo-form'>
        <h2>Criar Tarefas</h2>
        <form onSubmit={handleSubmit}>
            <input type="text"
             placeholder='digite o título'
             onChange={(e) => {setValue(e.target.value)}}
             />
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">trabalho</option>
                <option value="Pessoal">pessoal</option>
                <option value="Estudos">estudos</option>
            </select>

            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export {Form}