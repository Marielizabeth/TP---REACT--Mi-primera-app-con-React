import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/master.css';
import Web from './components/Web';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Web /> 
  </React.StrictMode>,
  document.getElementById('root')
);

//hay que llamar al componente web que es una funcion que retorna un div con un h1 que da la bienvenida al proyecto.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
