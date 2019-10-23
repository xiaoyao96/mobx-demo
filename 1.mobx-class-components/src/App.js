import React from 'react';
import Counter from './components/counter';
import TodoList from './components/todoList';

class App extends React.Component{
  render(){
    return (
      <div>
        <Counter />
        <TodoList />
      </div>
    )
  }
}

export default App;
