import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.scss';

ReactDOM.createRoot(document.querySelector<HTMLDivElement>('#app')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
