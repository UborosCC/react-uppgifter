import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import NameInput from "./components/NameInput/NameInput.jsx";
import Greeting from './components/Greeting/Greeting.jsx';

function App() {

  return (
    <Routes>
      <Route path="/" element={<NameInput />} />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  );
}

export default App;
