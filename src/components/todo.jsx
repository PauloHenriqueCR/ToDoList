import React, { useState } from "react";

const Todo = ({todo, removeTodo, completeTodo,save})=>{

// task = true

  const [edit,setEdit] = useState(true)
  const [textUpdate, setTextUpdate] = useState(todo.text)

      const [category,setCategory] = useState(todo.category)


  const handleText = (e) =>{
    setTextUpdate(e.target.value)
  }

  const handleCategory = (e) =>{
    setCategory(e.target.value)

  }


    return(
        <div key={todo.id} className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
                
                <div className='content'>
                {  edit ?
                   <p className="task">{todo.text}</p> 
                :
                   <input type="text" className="task-text" value={todo.text = textUpdate} onChange={handleText} />
                }   
                 
                 { edit ? 
                <p className="category">{todo.category = category}</p> :

                  <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="">{todo.category}</option>
                   <option value="Trabalho">trabalho</option>
                    <option value="Pessoal">pessoal</option>
                     <option value="Estudos">estudos</option>
                </select>
                }     
                </div>

                <div className="btn-todo">
                  <button className="complete btn" onClick={() => completeTodo(todo.id) }>✔️</button>
                  <button className="remove btn" onClick={()=> removeTodo(todo.id)}>❌</button>
                  <button className="update btn" onClick={()=> {
                  
                      if(edit)
                      setEdit(false)
                      else{
                          setEdit(true)
                      };

                  }}>🖊️</button>
                  
                  <button className="save btn" onClick={()=> {save(todo.id, handleText, handleCategory)
                     setEdit(true);

                  }
                  }>💾</button>
                </div>
            </div>
    )
}

export default Todo;