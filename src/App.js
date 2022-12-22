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
import Hotels from './Components/Hotels/Hotels';
import HotelDetails from './Components/Hotels/HotelDetails';
import Restaurants from './Components/Restaurant/Restaurants';
import RestaurantDetails from './Components/Restaurant/RestaurantDetails';
import PlacesDetail from './Components/Places/PlacesDetail';
import Places from './Components/Places/Places';
import Tulip from './Admins/Tulip';
import Profile from './Admins/Profile';
import Requests from './Admins/Requests';
import Institutions from './Components/Institutions/Institutions'
import InstitutionDetails from './Components/Institutions/InstitutionDetails';
import Guests from './Admins/Guests';
const App = () => {

  
  return (
    <>

      <Router>

        <Navbar />

        <Routes>
        
          <Route exact path='/' element={ <Home />}>
          </Route>
          <Route exact path="/Hotels" element={<Hotels />}>
          </Route>
          <Route exact path="/Restaurants" element={<Restaurants />}>
          </Route>
          <Route exact path="/Login" element={<Login />}>
          </Route>
          <Route exact path="/Signup" element={<SIgnup />}>
          </Route>
          <Route exact path="/RestaurantDetails" element={<RestaurantDetails />}>
          </Route>
          <Route exact path="/HotelDetails" element={<HotelDetails />}>
          </Route>
          <Route exact path="/PlacesDetails" element={<PlacesDetail />}>
          </Route>
          <Route exact path="/Places" element={<Places />}>
          </Route>
          <Route exact path="/Institutions" element={<Institutions />}>
          </Route>
          <Route exact path="/InstitutionDetails" element={<InstitutionDetails />}>
          </Route>

          {/* //Admin Routes */}
          <Route exact path="/Admin" element={<Tulip />}>
          </Route>
          <Route exact path="/Profile" element={<Profile />}>
          </Route>
          <Route exact path="/Request" element={<Requests />}>
          </Route>
          <Route exact path="/Guests" element={<Guests />}>
          </Route>
          

        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App