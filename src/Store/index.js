import { createStore } from "redux";
import todoReducer from "../Reducers/TodoReducer";

const configureStore = () => {
  return createStore(todoReducer);
};

export default configureStore;
