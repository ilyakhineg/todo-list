import React from "react";
import { Provider } from "react-redux";
import { Global } from "@emotion/core";
import "./app.css";
import { AppRouter } from "./app-router";
import { configureStore } from "./store/configure-store";
import { globalStyles } from "./styles/global-styles";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Global styles={globalStyles} />
      <AppRouter />
    </Provider>
  );
}

export default App;
