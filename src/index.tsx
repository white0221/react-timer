import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

Notification.requestPermission().then((permission) => {
  switch (permission) {
    case 'granted':
      // 許可された場合
      break;
    case 'denied':
      // ブロックされた場合
      break;
    case 'default':
      // 無視された場合
      break;
    default:
      break;
    }
  }
);
