import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//deploiement
//lancer la commande npm run build
//prompt sur le repertoire build
//lancer surge
//definisser le nom de domaine et voila
//https://javascript.plainenglish.io/deploy-a-react-app-using-surge-1061a626794c

