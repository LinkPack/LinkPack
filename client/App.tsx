import React from 'react';
import MainContainer from './containers/MainContainer';
import { Route, Routes } from "react-router-dom";
import DisplayContainer2 from './containers/DisplayContainer2';

function App() {
  return(
    <Routes>
      <Route path="*" element={<DisplayContainer2 />} />
      <Route path="/l" element={<DisplayContainer2 />} />
      <Route path="/" element={<MainContainer/>} />
    </Routes>
  ); 
}


export default App;
