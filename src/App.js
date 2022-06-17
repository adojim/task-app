import React from 'react';
import './App.css';
import freeCodeCampLogo from './images/freeCodeCamp-logo.png';
import TaskList from './components/TaskList';
function App() {
  return (
    <div className='tasks-app'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          clasName='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt="Logo freeCodeCamp"
        />
      </div>
      <div className='tasks-list-ppal'>
        <h1>My tasks</h1>
        <TaskList />
      </div>

    </div>
  );
}

export default App;
