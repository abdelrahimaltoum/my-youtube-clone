import React from "react";
import './App.css';
import Header from "./header";
import Sidebar from "./sidebar";
import Recomndedvideos from "./recomndedvideos";
import {  Routes ,Route, BrowserRouter } from "react-router-dom";
import Searchpage from "./searchpage";
function App() {
  return (
    <div className="app">
    
    <BrowserRouter>
      <Header/>
      <Routes>
        
      <Route path="/searchpage" element={
        <div className="app-page">
    <Sidebar/>
    <Searchpage/>
    </div>
      }>
  </Route>
    <Route path="/" element={
    <div className="app-page">
      <Sidebar/>
      <Recomndedvideos/>
    </div>
   
   
   
    }>
      </Route>
    
      
  
  
    
     </Routes>
     </BrowserRouter>
     </div>
  );
}

export default App;
