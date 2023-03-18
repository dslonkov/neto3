import React, {useState} from 'react';
import AddTodo from "./AddTodo";

const ToDoList = () => {

  const [todos, setTodos] = useState([])

  function addItem (name, dist) {
    setTodos(todos.concat([
      {
        name,
        dist
      }
    ]))
  }

  function removeItem(name) {
    setTodos(todos.filter(item => item.name !== name))
  }

 return (
   <div className='container'>

     <AddTodo onCreate={addItem} />

     <div className='titles'>
       <p>Дата</p>
       <p>Пройдено</p>
       <p>Действия</p>
     </div>

    <ul className='list'>
      {todos.map(todo => {

        return (
          <li className='item' key={todo.name}>
            <p>{todo.name}</p>
            <p>{todo.dist}</p>
            <p onClick={() => removeItem(todo.name)}>X</p>
          </li>
        )
      })}
    </ul>
  </div>
 )
};

export default ToDoList;
