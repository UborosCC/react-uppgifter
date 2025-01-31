import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import NameInput from "./components/NameInput/NameInput.jsx";
import Greeting from './components/Greeting/Greeting.jsx';
import Timer from './components/Timer/Timer.jsx';
import Color from './components/Color/Color.jsx';

function App() {

  return (
    <Routes>
      <Route path="/" element={<NameInput />} />
      <Route path="/greeting" element={<Greeting />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/color" element={<Color />} />
    </Routes>
  );
}

export default App;
