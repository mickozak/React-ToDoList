import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todosList = todos.length ? (
        todos.map(todo=>{
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <button style={{marginLeft: "10px"}} className="waves-effect waves-light btn-small" onClick={()=>{deleteTodo(todo.id)}}>DELETE</button>
                </div>
            )
        })
    ) : (
        <p className="center">You have no tasks to do.</p>
    )
    return(
        <div className="todos collection">
            {todosList}
        </div>
    )
}

export default Todos


