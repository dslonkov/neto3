import React, {useState} from 'react';
import AddTodo from "./AddTodo";

const ToDoList = () => {

  const [todos, setTodos] = useState([])

  function addItem (name, dist) {

  const findItem = todos.find((item) => item.name === name);
  const filteredSteps = todos.filter((item) => item.name !== name);

  if (findItem) {
    setTodos([
      ...filteredSteps,
      {
        name: findItem.name,
        dist: +dist + +findItem.dist,
      },
    ]);
  } else {
    setTodos((prevState) => [...prevState, { name, dist }])
  }
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
