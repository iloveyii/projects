import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
            </div>
        </BrowserRouter>

    );
}

export default App;
