import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routers from './routes';
import './App.scss';

function App() {
  return (
    <Router>
      <Routers />
      <ToastContainer />
    </Router>
  );
}

export default App;
