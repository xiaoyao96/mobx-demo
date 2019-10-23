import React, { useContext, useEffect } from "react";
import "./index.scss";
import { RouteComponentProps } from "react-router";
import Counter from "../../components/counter";
import TodoList from "../../components/todolist";


const Home: React.FC<RouteComponentProps>  = function(props) {
  // const store = useContext(Context);
  return (
    <div>
      <Counter />
      <TodoList />
    </div>
  );
};
export default Home;
