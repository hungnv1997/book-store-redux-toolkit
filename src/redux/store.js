import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
// import createSagaMiddleware from "redux-saga";

// disalbe thunk and add redux-saga middleware
// const sagaMiddleware = createSagaMiddleware();
// // const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
});
