import React, {useState} from 'react';

const AddTodo = ({ onCreate }) => {

  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  function SubmitHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    if (value1.trim() && value2.trim()) {
      onCreate(value1,value2)
      setValue1('')
      setValue2('')
    }
  }

  return (
    <form className='form' onSubmit={SubmitHandler}>
      <div>
        <label className='label' htmlFor="date">Дата</label>
        <input
          className='input'
          type='date'
          id='date'
          value={value1}
          onChange={event => setValue1(event.target.value)}
        />
      </div>

      <div>
        <label className='label' htmlFor="dist">Пройдено км</label>
        <input
          className='input'
          type='number'
          id='dist'
          value={value2}
          onChange={event => setValue2(event.target.value)}
        />
      </div>
      <button className='btn' type='submit'>OK</button>
    </form>
  );
};

export default AddTodo;
