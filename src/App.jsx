import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from './components/NavBar'
import { Home } from "./pages/Home.js"
import  About  from "./pages/About.js"
import Contact from "./pages/Contact.js"
import { Login } from "./pages/Login.js"
import { Signup } from "./pages/Signup.js"
import { Dashboard } from "./pages/Dashboard.js"
import { useState } from "react";
import Cart from "./pages/Cart"
import { PrivateRoute } from "./components/PrivateRoute.js";
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className=" min-h-screen bg-[#050a0f] flex flex-col">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/cart" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Cart />
          </PrivateRoute>
        } />
      </Routes>

    </div>
  );
}

export default App;
