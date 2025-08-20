import React from 'react'

const Filter = ({filter, setFilter,setSort}) => {
  return (
    <div className='filter'>
        <h2>Filtrar:</h2>
        <div className='filter-options'>
            <div>
                <label htmlFor="status-filter">Status:</label>
                <select id="status-filter"  value={filter} onChange={(e) => setFilter(e.target.value)}> 
                    <option value="">Selecione uma categoria</option>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incompleted">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>

                <div className='btn-alph'>
                    <button onClick={()=> setSort("Asc")}>Asc</button>
                    <button onClick={()=> setSort("Desc")}>Desc</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Filter