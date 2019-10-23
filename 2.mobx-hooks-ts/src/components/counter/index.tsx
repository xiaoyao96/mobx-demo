import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../../hooks";
const Counter = observer(() => {
  const { counterStore: store } = useStore()
  return (
    <div>
      <h1>couter:</h1>
      <div>{store.counter}</div>
      <button onClick={store.add}>+</button>
      <button onClick={store.reduce}>-</button>
    </div>
  );
});

export default Counter;
