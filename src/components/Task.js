import React from 'react';
import '../stylesheets/Task.css';
//import { AiOutlineCloseCircle } from "react-icons/ai"; <AiOutlineCloseCircle />
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Task({ texto, completada, id, completarTask, eliminarTask }) {
  return (
    <div className={completada ? 'task-container completada' : 'task-container'}>
      <div
        className='task-text'
        onClick={()=>completarTask(id)}>
        {texto}
      </div>
      <div
        className='task-container-icon'
        onClick={()=>eliminarTask(id)}>
        <FontAwesomeIcon icon={faCircleXmark} className='task-icon' />
      </div>
    </div>
  );
}
export default Task;
