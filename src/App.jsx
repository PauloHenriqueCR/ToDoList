import { useState,useEffect } from 'react'
import './App.css'
import Todo from './components/todo'
import { Form } from './components/Form'
import Search from './components/Search'
import Filter from './components/filter'

function App() {

    // Carrega do localStorage ou inicia com array vazio
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // Salva no localStorage sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const [search, setSearch] = useState("");

  const [filter,setFilter] = useState("all");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category,idResul) =>{


      const newTodos = [
        ...todos,
        {
          id: idResul,
          text,
          category,
          isCompleted:false
        }
      ]

      setTodos(newTodos)
  }


const saveTodo = (id, textUpdate, categoryUpdate) => {
  const updateTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, text: textUpdate, category: categoryUpdate } : todo
  );
  setTodos(updateTodos);
};

  const removeTodo = (id) =>{
    
    const newTodos = [... todos]
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    )
    
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [... todos]
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo)
    setTodos(newTodos)  
  }

  return (
    
    <div className='app'>
        <h1>Lista de Tarefas</h1>
       <Search search={search} setSearch={setSearch}/>
       <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
        <div className='todo-list'>
          {
          todos.filter((todo)=> 
          filter =="All"
          ?true
          : filter === "Completed"
          ? todo.isCompleted
          : !todo.isCompleted
          ).filter((todo) => todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .sort((a,b ) => sort === "Asc" ? a.text.localeCompare(b.text): b.text.localeCompare(a.text))
          .map((todo)=>
             <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}  save={saveTodo} />
          )}
        </div>
          <Form addTodo={addTodo}/>
    </div>
  )
}

export default App
