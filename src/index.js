import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom"
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./redux/Store";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
          <App />   
          <Toaster/>  
      </Provider>
  </BrowserRouter>
);
