import React, { useState, useCallback } from "react";
import { observer } from "mobx-react";
import { useStore } from "../../hooks";

const TodoList = observer(() => {

  let { todoListStore: store } = useStore()

  const [val, setVal] = useState('');
  const inputChange = useCallback(
    (e) => {
      setVal(e.currentTarget.value)
    },
    [],
  )


  return (
    <div>
      <h1>todolist:</h1>
      <input onInput={inputChange} type="text" />
      <button onClick={() => store.pushItem(val)}>+</button>
      <ul>
        {store.todoList.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => item.changeFinish(true)}>finish</button>
            <button onClick={() => store.dropItem(item.id)}>x</button>
            <span>{item.finish ? "√" : ""}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TodoList;
