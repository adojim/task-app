import React, { useState } from 'react';
import TaskForm from './TaskForm';
import '../stylesheets/TaskList.css';
import Task from './Task';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task.texto.trim()) {
      task.texto = task.texto.trim();
      const tasksUpdated = [task, ...tasks];
      setTasks(tasksUpdated);
    }
  };

  const eliminarTask = id => {
    const tasksUpdated = tasks.filter(task => task.id !== id);
    setTasks(tasksUpdated);
  };

  const completarTask = id => {
    const tasksUpdated = tasks.map(task => {
      if (task.id === id) {
        task.completada = !task.completada;
      }
      return task;
    });
    setTasks(tasksUpdated);
  };
  return (
    <>
      <TaskForm onSubmit={ addTask } />
      <div className='task-list-container'>
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              texto={task.texto}
              completada={task.completada}
              eliminarTask={eliminarTask}
              completarTask={completarTask}/>
          )
        }
      </div>
    </>
  );
}
export default TaskList;
