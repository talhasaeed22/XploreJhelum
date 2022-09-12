import React from 'react'
import Login from './Components/Auth/Login'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import SIgnup from './Components/Auth/SIgnup';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
const App = () => {
  return (
    <>

      <Router>

        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/Login" element={<Login />}>
          </Route>
          <Route exact path="/Signup" element={<SIgnup />}>
          </Route>

        </Routes>
        <Footer/>
      </Router>

    </>
  )
}

export default App