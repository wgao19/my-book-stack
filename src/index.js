import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import MyBookStack from "./components/MyBookStack";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MyBookStack />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
