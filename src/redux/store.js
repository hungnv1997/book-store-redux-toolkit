import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/rootReducer";
// import createSagaMiddleware from "redux-saga";

// disalbe thunk and add redux-saga middleware
// const sagaMiddleware = createSagaMiddleware();
// // const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
});
