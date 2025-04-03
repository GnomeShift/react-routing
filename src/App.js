import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Contacts from './components/Contacts/Contacts';
import Main from './components/Main/Main.js';
import './App.css';
import User from "./components/User/User";

function App() {
  return (
      <Router>
        <div>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/users/:userId" element={<User />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
