import React, { useContext, useState } from 'react';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Foods from './pages/Foods/Foods';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import { ShowContext } from './Context/ShowContext';
import Verify from './pages/Verify/Verify';


const App = () => {
  const [authen, setAuthen] = useState(false);
  const { setToken } = useContext(ShowContext);
  if (localStorage.getItem("user"))
  {
    setToken(localStorage.getItem("user"));  
  }

  return (
    <>
      {authen ? <Login setAuthen={setAuthen} /> : <></>}
      <div className="app">
      <Navbar setAuthen={setAuthen} />
        <Routes>
        <Route path="/" element={<Home />}></Route>  
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/foods" element={<Foods/>}>
          <Route path=":foodId" element={<Foods/>} />
          </Route>  
         <Route path="/orders" element={<Order/>}/> 
         <Route path="/verify" element={<Verify/>}/> 
        </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;