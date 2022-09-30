import React from "react";
import ReactDOM from "react-dom";
import{BrowserRouter} from "react-router-dom";
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
  <TransactionsProvider>
    <App />
  </TransactionsProvider>
  </BrowserRouter>,
  document.getElementById("root"),
);



// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// import {TransactionProvider } from './context/TransactionContext';

// ReactDOM.createRoot(document.getElementById('root')).render(
// <TransactionProvider>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </TransactionProvider>
// )
