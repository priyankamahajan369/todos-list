//TodoItem.js
//With this, we're all set to display all the items of our todo list on the main.
//keeping track of the individual todo items
//remove the particular item.
//=> means function pass.
import React from 'react'
export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
        </div>
        <hr/> 
        </>
    )
}


