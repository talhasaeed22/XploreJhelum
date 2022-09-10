import React from 'react'
import Login from './Components/Auth/Login'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import SIgnup from './Components/Auth/SIgnup';
const App = () => {
  return (
    <>
      
      <Router>

          <Routes>
            <Route exact path="/Login" element={<Login/>}>
            </Route>
            <Route exact path="/Signup" element={<SIgnup/>}>
            </Route>
            
          </Routes>
            
        </Router>

    </>
  )
}

export default App