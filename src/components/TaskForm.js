import React, {useState} from 'react';
import '../stylesheets/TaskForm.css';
import { v4 as uuidv4} from 'uuid'
function TaskForm(props) {

  const [input, setInput] = useState('');

  const manageChange = e => {
    console.log('Escribiendo...');
    setInput(e.target.value);
    console.log(e.target.value);
  };
  const manageSubmit = e => {
    e.preventDefault();
    console.log('Enviando formulario');

    const newTask = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(newTask);
  };
  return (
    <form
      className='task-form'
      onSubmit={manageSubmit}>
      <input
        className='task-input'
        type='text'
        placeholder='Type a task'
        name='texto'
        onChange={manageChange}
      />
      <button className='task-button'>
        Add Task
      </button>
    </form>
  );

}
export default TaskForm;
