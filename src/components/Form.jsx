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
            <input 
             type="text"
             placeholder='Digite o título'
             value={value}
             onChange={(e) => {setValue(e.target.value)}}
             />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>

            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export {Form}