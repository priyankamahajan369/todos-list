//keeping track of all the items included inside the todos list.
// we're checking the length of the todos, if length = 0 display Nothing to display.
//map function will return an array,here return todo
import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length===0? "No Todos to display":  //DEL4 : if all todos are deleted ,say"No Todos to display":,else another statement will run.

                props.todos.map((todo) => {
                console.log(todo.sno);

                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
                )
            })
              } 
        </div>
    )
}

/*
 
JS MAP? Take an ARRAY and apply some operation (+ , - )on oll the values of array.

let a = [1,2,3,4];
let a2 = a.map((value)=> {return value*2 ;})
console.log(a,a2);

  */