import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import DisplayContainer from './containers/DisplayContainer.jsx';

function App() {
  // using useNavigate hook to navigate between routes
  const navigate = useNavigate();

  return(
    <Routes>
      <Route path="*" element={<DisplayContainer />} />
      <Route exact path="/l" element={<DisplayContainer />} />
      <Route exact path="/" element={<MainContainer navigate={navigate}/>} />
    </Routes>
  ); 
}


export default App;
