import React from "react";
import { Provider } from "react-redux";
import configureStore from "./Store/index";
import TodoList from "./Components/TodoList";
import AddTodoForm from "./Components/AddTodoForm";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AddTodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
