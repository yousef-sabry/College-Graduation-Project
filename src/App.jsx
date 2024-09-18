import React, {  useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { Home } from './Components/Home/Home';
import { Join } from './Components/Join/Join';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import { SMain } from './Components/Select/SMain/SMain';
import { Bookone } from '../src/Components/Bookone/Bookone';
import { Login } from './Components/Login/Login';

import RequireAuth from './Components/Auth/RequireAuth';

 import { Profile } from './Components/Profile/Profile';
import  {Dashboard}  from './Components/Dashboard/Dashboard';
import Loading from './Components/Loading/Loading';

;

function App() {
  const [auth,setAuth] = useState({})
  

  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* <Nav /> */}
          <Routes>

            <Route path="/" element={<Home />}>
            </Route>
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/contact" element={<Contact />}>
            </Route>
            
            <Route path="/register" element={<Join />}>
            </Route>
            <Route path="/" element={<Bookone />} />
            <Route path="/profile" element={<Profile />} />
            

              <Route element={<RequireAuth />}>
                <Route path="/select" element={<SMain />}></Route>
                <Route path="/book" element={<Bookone />}> </Route>
                
                <Route path="/Dashboard" element={<Dashboard />}></Route>
             </Route>

            <Route path="/login" element={<Login />}>
            </Route>

          </Routes>
          
          {/* <Routes>
          <Route path="/loading" element={<Loading />}>
          </Route>

          </Routes> */}
          

          

        </div>
    </BrowserRouter>
    
  );
}

export default App;
