import React from 'react';
import TodoList from './todo-list';
import AddForm from './add-form';

const App = () => {
    return(
      <div className="container">
        <div className="task-manager">
          <TodoList/>
          <AddForm/>
        </div>
      </div>

    )
}

export default App;