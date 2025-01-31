import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import { store, persistor } from './redux/store.jsx';
import NameInput from "./components/NameInput/NameInput.jsx";
import Greeting from './components/Greeting/Greeting.jsx';
import Timer from './components/Timer/Timer.jsx';
import Color from './components/Color/Color.jsx';

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<NameInput />} />
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/color" element={<Color />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
