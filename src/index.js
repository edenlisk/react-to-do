import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from "./components/App";

const App = () => {
    return (
        <TodoList />
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
