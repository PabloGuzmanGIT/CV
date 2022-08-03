import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import bootstrap from 'bootstrap'
import Footer from "./common/Footer";
import Header from "./common/Header";
import React from "react";
import Music from "./common/Music";
import Main from "./common/Main";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />  
        <Routes>
          <Route path="/Main  " element={<Main />} />
        </Routes>
        <Footer />
          
      </div>
    </BrowserRouter>
  );
}

export default App;
