import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ChatbotPage from './pages/ChatbotPage';
import MainPage from './pages/MainPage';

function App() {

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route exact path='/chatbot' element={<ChatbotPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
