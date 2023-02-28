// /**
//  * ************************************
//  *
//  * @module  index.js
//  * @author
//  * @date
//  * @description entry point for application. Hangs React app off of #contents in index.html
//  *
//  * ************************************
//  */

import store from "./store";
import { Provider } from "react-redux";
import App from "./App";
import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
// import { loadUsersActionCreator } from "./actions/action-creators";


import styles from './scss/styles.scss';
  
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store = {store}>
        <App />
        {/* <div className="jiggly"></div> */}
    </Provider>
  </BrowserRouter>
);