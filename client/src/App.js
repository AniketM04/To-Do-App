// import logo from './assets/icons8-48.png';
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ToDoList from './pages/ToDo/ToDoList';

import './App.css';
import 'antd/dist/reset.css';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/to-do-list' element={<ToDoList />} />
    </Routes>
  );
}

export default App; 
