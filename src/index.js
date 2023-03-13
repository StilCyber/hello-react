import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
   {message: 'Hi, how are you', likesCount: 2},
   {message: 'It is my first post', likesCount: 5},
]

let dialogs = [
   {id: 1, name: 'Dimych'},
   {id: 2, name: 'Roman'},
   {id: 3, name: 'Sveta'},
   {id: 4, name: 'Valera'},
   {id: 5, name: 'Andrew'},
   {id: 6, name: 'Victor'},
]
let messages = [
   {id: 1, message: 'Hi'},
   {id: 2, message: 'How is your it-kamasutra?'},
   {id: 3, message: 'Yo'},
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
