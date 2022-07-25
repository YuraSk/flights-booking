import './App.css';
import { Routes, Route } from "react-router-dom";
import Flighs from './pages/Flights';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import Header from './components/Header';

function App() {  
  return (
    <>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <Link to="/book-flight">Book Flight</Link> */}
      <Header />
      <Routes>
        {/* Declare all routes here: */}
        <Route exact path='/' element={ <Home /> }/ >
        <Route exact path='/login' element={ <Login/> } />
        <Route exact path='/signup' element={ <SignUp/> } />
        <Route exact path='/profile' element={ <UserProfile/> } />
        <Route exact path='/flights' element={ <Flighs/> }/>
      </Routes>

    </>
  );
}

export default App;
