import React from "react";
import Home from "./routes/Home";
import  Market  from "./routes/Market";
import {Routes,Route} from "react-router-dom";


const App = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/market" element={<Market />}/>
    </Routes>
    </>
  );
}

export default App;
