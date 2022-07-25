import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Flighs from './pages/Flights';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';

function App() {  
  return (
    <div className="App">
      <h1>Book a flight!</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/book-flight">Book Flight</Link></li>
      </ul>

      <Routes>
        {/* Declare all routes here: */}
        <Route exact path='/' element={ <Home /> }/ >
        <Route exact path='/login' element={ <Login/> } />
        <Route exact path='/signup' element={ <SignUp/> } />
        <Route exact path='/profile' element={ <UserProfile/> } />
        <Route exact path='/book-flight' element={ <Flighs/> }/>
      </Routes>

    </div>
  );
}

export default App;
