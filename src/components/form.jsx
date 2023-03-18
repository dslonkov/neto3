import React, {useState} from 'react';

const Form = () => {

  const [value, setValue] = useState('Введите hex');

  function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)})` : null;
  }

  const onEnterHandler = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value.length !== 7 && e.target.value[0] !== '#') {
        setValue('Ошибка');
      } else {
        setValue(hexToRgb(e.target.value));
      }
    }
  }

  return (
    <div className='wrapper' style={{ 'backgroundColor': value }}>
      <form
        className="form"
        action="#"
      >
        <input
          className="input"
          type="text"
          onChange={() => {} }
          onKeyPress={(e) => onEnterHandler(e)}
        />

        <input
          className="result"
          type="text"
          value={value}
          onChange={() => {} }
        />
      </form>
    </div>
  );
};

export default Form;
